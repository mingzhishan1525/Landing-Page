import { test } from 'node:test';
import assert from 'node:assert/strict';
import { trackGrowthEvent } from '../app/components/growth-tracking';
test('article and destination stay distinct; no install event is invented',()=>{
 const originalWindow=globalThis.window, originalFetch=globalThis.fetch;
 const calls: {url:string,body:any}[]=[];
 const storage={getItem:()=> 'synthetic-test-id',setItem:()=>{}};
 try {
 Object.defineProperty(globalThis,'window',{value:{location:{href:'https://chinasupplyradar.com/blog/inbound-inventory-reorder-timeline/'},localStorage:storage,sessionStorage:storage},configurable:true,writable:true});
 globalThis.fetch=((url:any,init:any)=>{calls.push({url:String(url),body:JSON.parse(init.body)});return Promise.resolve(new Response('{}'));}) as typeof fetch;
 for (const source of ['inbound-guide','calculate-reorder-window','supplier-lead-time-checklist']) for(const destination of ['https://apps.shopify.com/china-supply-radar','https://chromewebstore.google.com/detail/china-supply-radar/ilkmanjaigbnbnicnoobffekdcdfmlkg']) trackGrowthEvent('CLICK',{source,metadata:{destination}});
 assert.equal(calls.length,6);assert.equal(new Set(calls.map(c=>c.body.source)).size,3);assert.ok(calls.every(c=>c.body.event_type==='CLICK'));
 Object.defineProperty(window,'localStorage',{get(){throw new Error('Storage disabled');},configurable:true});
 assert.doesNotThrow(()=>trackGrowthEvent('CLICK'));assert.equal(calls.length,6);
 } finally {globalThis.fetch=originalFetch;Object.defineProperty(globalThis,'window',{value:originalWindow,configurable:true,writable:true});}
});
test('server execution is a no-op',()=>assert.doesNotThrow(()=>trackGrowthEvent('CLICK')));
