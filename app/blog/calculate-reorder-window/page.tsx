import Link from "next/link";
import styles from "./article.module.css";
export const metadata = {
 title: "How to calculate your reorder window | China Supply Radar",
 description: "A worked inventory example: 300 units, 10 daily sales, production, shipping and a buffer leave a two-day reorder window. Learn the formula and its limits.",
 alternates: { canonical: "/blog/calculate-reorder-window/" },
 openGraph: { title: "How to calculate your reorder window", description: "Understand inventory coverage and lead times with a complete worked example.", url: "/blog/calculate-reorder-window/", type: "article" },
};
export default function ReorderGuide() { return (
<main className={styles.page}><article className={styles.article}>
<nav><Link href="/">China Supply Radar</Link><Link href="/blog/">All guides</Link></nav>
<p className={styles.eyebrow}>INVENTORY PLANNING GUIDE</p>
<h1>{"How to calculate your reorder window from stock and lead time"}</h1><p className={styles.byline}>By China Supply Radar · Worked example with sample data</p>
<h2>{"The short answer"}</h2>
<p>{"Estimate how many days your available stock will last, then subtract the time needed to produce and ship the next order, plus your planning buffer. The result is the number of days you can wait before placing an order under those assumptions."}</p>
<p><strong>{"Inventory coverage = available units ÷ average daily unit sales"}</strong></p>
<p><strong>{"Reorder window = inventory coverage − production days − shipping days − buffer days"}</strong></p>
<p>{"This is a simple planning estimate, not a demand forecast or a delivery guarantee."}</p>
<h2>{"A complete example"}</h2>
<p>{"Imagine one SKU with 300 available units and average sales of 10 units per day. Your supplier quotes 14 days for production and you allow 7 days for shipping. You choose a 7-day buffer."}</p>
<div className={styles.tableWrap}><table><thead><tr><th scope="col">{"Input or result"}</th><th scope="col">{"Value"}</th></tr></thead><tbody><tr><td>{"Available inventory"}</td><td>{"300 units"}</td></tr><tr><td>{"Average daily sales"}</td><td>{"10 units/day"}</td></tr><tr><td>{"Inventory coverage"}</td><td>{"300 ÷ 10 = 30 days"}</td></tr><tr><td>{"Production"}</td><td>{"14 days"}</td></tr><tr><td>{"Shipping"}</td><td>{"7 days"}</td></tr><tr><td>{"Planning buffer"}</td><td>{"7 days"}</td></tr><tr><td>{"Reorder window"}</td><td>{"30 − 14 − 7 − 7 = 2 days"}</td></tr></tbody></table></div>
<p>{"With these sample inputs, you have a two-day reorder window. These are illustrative numbers, not a customer result."}</p>
<h2>{"What a zero or negative result means"}</h2>
<p>{"Zero means the estimated waiting time is used up. A negative number means the current assumptions already leave less inventory coverage than the replenishment time and buffer require. Review the inputs, contact your supplier, and evaluate your options. A negative result does not prove a stockout will happen."}</p>
<h2>{"Check these assumptions before acting"}</h2>
<ul><li>{"Use available, sellable units. Avoid counting reserved or damaged stock twice."}</li><li>{"Choose a representative sales period. A promotion, new product, or seasonal spike can make an average misleading."}</li><li>{"The example assumes production happens before shipping. Do not add production again if your supplier's quoted total lead time already includes it."}</li><li>{"This simple example excludes inbound purchase orders. If a shipment is already on its way, use a dated inventory plan rather than adding all inbound units to today's available inventory."}</li><li>{"Confirm closure, restart, inspection, customs and delivery timing with your supplier and carrier. Add relevant time explicitly; a public holiday date is not a factory's confirmed shutdown schedule."}</li><li>{"A seven-day buffer is an example input, not a recommendation for every product."}</li></ul>
<p>{"If daily sales are zero, this formula cannot provide a meaningful coverage estimate. Review the product's demand history separately."}</p>
<p>Before choosing your inputs, use the <Link href="/blog/supplier-lead-time-checklist/">supplier lead time checklist</Link> to confirm production, shipping and receiving milestones.</p>
<h2>{"Try it with one SKU"}</h2>
<p>{"Use the "}<a href="/tools/reorder-calculator/">{"reorder calculator"}</a>{" to explore your assumptions. To keep one manually entered SKU in your browser, try the "}<a href="https://chromewebstore.google.com/detail/china-supply-radar/ilkmanjaigbnbnicnoobffekdcdfmlkg">{"free Chrome extension"}</a>{"."}</p>
<p>{"For Shopify merchants, "}<a href="https://apps.shopify.com/china-supply-radar">{"China Supply Radar on the Shopify App Store"}</a>{" uses inventory and recent order data to show inventory risk. The public Pro plan is $29/month; check the listing for current pricing. The Chrome extension's free features do not require a Shopify account."}</p>
<h2>{"Questions"}</h2>
<p><strong>{"Is the reorder window the same as the reorder quantity?"}</strong>{" No. This calculation estimates timing. It does not tell you how many units to buy."}</p>
<p><strong>{"Is this a statistical safety-stock formula?"}</strong>{" No. The buffer here is a chosen number of days. It does not model demand or lead-time variability statistically."}</p>
<p><strong>{"Will this prevent every stockout?"}</strong>{" No. Results depend on the accuracy of inventory, sales and lead-time inputs, and actual conditions can change."}</p>
<h2>Watch the worked example</h2>
<video controls playsInline preload="none" width="1080" height="1080" aria-label="Real Chrome extension demonstration using sample inventory inputs"><source src="/media/reorder-demo.mp4" type="video/mp4" />Your browser does not support video. The inputs and calculation are described above.</video>
<p className={styles.byline}>Real extension recording using synthetic data. Silent video; all calculations are explained in the article.</p>
<p><a href="https://x.com/musanmu288388/status/2109135262907609451">View the demonstration on X</a></p>
<h2>Already have an order in transit?</h2><p>Use the <Link href="/blog/inbound-inventory-reorder-timeline/">inbound inventory timeline and downloadable daily tables</Link> to check whether current stock lasts until the receipt becomes usable.</p>
</article></main>); }
