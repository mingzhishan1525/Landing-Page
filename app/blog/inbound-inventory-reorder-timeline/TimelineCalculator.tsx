'use client';
import { useState } from 'react';
import { simulate, type Inputs } from './timeline';
import styles from './calculator.module.css';
const initial = { stock: '300', demand: '10', quantity: '150', receiptDay: '10', delay: '21', days: '45' };
const fields = [['stock','Sellable stock now (units)'],['demand','Daily demand (units)'],['quantity','Inbound usable quantity (units)'],['receiptDay','Expected usable day (day 1 onward)'],['delay','Additional delay (days)'],['days','Planning horizon (days)']] as const;
const columns = [['day','Day'],['opening','Opening stock'],['openingBacklog','Opening backlog'],['demand','New demand'],['backlogFilled','Backlog shipped'],['filled','New demand shipped'],['unfilled','New demand unfilled'],['receipt','Day-end receipt'],['closing','Closing stock'],['backlog','Closing backlog'],['available','Unreserved stock']] as const;
export default function TimelineCalculator() {
 const [values,setValues] = useState(initial); const [backorders,setBackorders] = useState(false);
 let rows: ReturnType<typeof simulate> = [], error = '';
 try { if(Object.values(values).some(v => v.trim() === '')) throw new Error('Complete every input to calculate. Zero is allowed for stock, demand, quantity and delay.');
 const input = Object.fromEntries(Object.entries(values).map(([k,v])=>[k,Number(v)])) as Omit<Inputs,'backorders'>;
 rows = simulate({...input,backorders}); } catch(e) {error = (e as Error).message;}
 const firstGap = rows.find(r=>r.unfilled > 0);
 function download() { const csv = [columns.map(c=>c[0]).join(','),...rows.map(r=>columns.map(c=>r[c[0]]).join(','))].join('\r\n');
 const url=URL.createObjectURL(new Blob([csv],{type:'text/csv;charset=utf-8'})); const a=document.createElement('a'); a.href=url; a.download=`inbound-timeline-${backorders?'backorders':'lost-sales'}.csv`; a.click(); setTimeout(()=>URL.revokeObjectURL(url),1000); }
 return <section id="interactive-timeline" className={styles.panel} aria-labelledby="timeline-heading">
 <h2 id="timeline-heading">Try your own inbound timeline</h2>
 <p>Change the sample inputs to recalculate the table. Day 1 is your first planning day. An expected usable day of 10 plus a 5-day delay means receipt at the end of day 15, available for shipping on day 16.</p>
 <div className={styles.fields}>{fields.map(([key,label])=><label key={key} htmlFor={`timeline-${key}`}>{label}<input id={`timeline-${key}`} type="number" min={key==='receiptDay'||key==='days'?1:0} max={['receiptDay','delay','days'].includes(key)?365:1000000} step="1" value={values[key]} onChange={e=>setValues({...values,[key]:e.target.value})}/></label>)}</div>
 <label className={styles.choice}>When demand cannot be fulfilled<select value={backorders?'backorders':'lost-sales'} onChange={e=>setBackorders(e.target.value==='backorders')}><option value="lost-sales">Lost sales — do not carry orders forward</option><option value="backorders">Back orders — ship oldest orders first</option></select></label>
 <p className={styles.note}>Assumptions: steady whole-unit daily demand, one receipt, no opening backlog, returns or other reservations. Each day ships backlog first, then new demand; receipt becomes usable at day end. No safety-stock reserve is applied. This educational website tool does not sync with the extension or Shopify app. Inputs stay in this page and reset when you reload.</p>
 <div aria-live="polite" aria-atomic="true">{error ? <p role="alert">{error}</p> : <p className={styles.result}>{firstGap ? `First unfulfilled new demand: day ${firstGap.day} (${firstGap.unfilled} units).` : `No unfulfilled demand within the ${values.days}-day horizon.`} {rows.length ? `Closing stock: ${rows.at(-1)!.closing} units; outstanding backlog: ${rows.at(-1)!.backlog} units.` : ''}</p>}</div>
 <div className={styles.actions}><button type="button" disabled={!!error} onClick={download}>Download this result as CSV</button><button type="button" onClick={()=>{setValues(initial);setBackorders(false);}}>Reset sample</button></div>
 <p className={styles.note}>The download is a snapshot, not a spreadsheet with formulas. Recalculate here after changing assumptions. A gap outside the selected horizon is not shown. This tool does not determine the next order date or quantity.</p>
 {!error ? <details><summary>View all {rows.length} daily rows</summary><div className={styles.table} tabIndex={0} role="region" aria-label="Scrollable daily inventory results"><table><caption>Units except Day; receipt after daily fulfillment.</caption><thead><tr>{columns.map(([key,label])=><th scope="col" key={key}>{label}</th>)}</tr></thead><tbody>{rows.map(row=><tr key={row.day}>{columns.map(([key])=><td key={key}>{row[key]}</td>)}</tr>)}</tbody></table></div></details> : null}
 <noscript>Enable JavaScript to change inputs. The worked examples and static CSV below remain available without JavaScript.</noscript>
 </section>;
}
