import Link from "next/link";
import GuideNextStep from "../../components/GuideNextStep";
import styles from "../calculate-reorder-window/article.module.css";
export const metadata = {
 title: "Supplier lead time checklist | China Supply Radar",
 description: "Ask your supplier these eight questions before calculating a reorder date. Includes a copyable message and a worked inventory example.",
 alternates: { canonical: "/blog/supplier-lead-time-checklist/" },
 openGraph: { title: "Supplier lead time checklist: what to confirm before reordering", description: "Eight questions, a supplier message template, and a worked reorder example.", url: "/blog/supplier-lead-time-checklist/", type: "article" },
};
export default function SupplierLeadTimeGuide() { return (
<main className={styles.page}><article className={styles.article}>
<nav><Link href="/">China Supply Radar</Link><Link href="/blog/">All guides</Link></nav>
<p className={styles.eyebrow}>SUPPLIER PLANNING GUIDE</p>
<h1>{"Supplier lead time checklist: what to confirm before reordering"}</h1>
<p>{"Before using a supplier's lead time in your reorder calculation, confirm when the clock starts, when the goods will be ready, and when they will become available to sell. Ask for calendar dates, the steps included in each estimate, and the person responsible for updating you."}</p>
<p>{"“Two weeks” sounds clear until you discover it starts after packaging approval—or ends at the factory gate."}</p>
<h2>{"Eight questions to ask"}</h2>
<div className={styles.tableWrap}><table><thead><tr><th scope="col">{"Ask"}</th><th scope="col">{"Write down"}</th></tr></thead><tbody><tr><td>{"What starts the production clock: deposit, approved sample, artwork, or something else?"}</td><td>{"The trigger and whether you have completed it"}</td></tr><tr><td>{"What is the earliest production start and goods-ready date for this quantity?"}</td><td>{"Both dates and the quantity they cover"}</td></tr><tr><td>{"Are these working days or calendar days?"}</td><td>{"Actual dates, including weekends and closures"}</td></tr><tr><td>{"Does goods-ready include inspection, packing and any rework?"}</td><td>{"What must happen before pickup"}</td></tr><tr><td>{"When can the forwarder collect, and what departure is the estimate based on?"}</td><td>{"Pickup, planned departure and booking status"}</td></tr><tr><td>{"Does “shipping time” end at the destination port or at our warehouse?"}</td><td>{"Transport endpoint and any missing stages"}</td></tr><tr><td>{"Are any closures or capacity constraints expected before this order is complete?"}</td><td>{"Order cutoff, closure and restart expectations"}</td></tr><tr><td>{"Who will tell us if a milestone changes, and when is our next update?"}</td><td>{"Contact, update date and revised estimate"}</td></tr></tbody></table></div>
<p>{"If your supplier cannot confirm a transport stage, ask the forwarder. If the shipment ends at your warehouse, check receiving and processing time with the warehouse too. Plan through the point at which units can actually fulfill orders."}</p>
<h2>{"Separate time on the water from time until stock is available"}</h2>
<p>{"Maersk explains that ocean transit and door-to-door time differ: documentation, customs and cargo handling add stages around the voyage. A transit estimate therefore needs a named start and end point. "}<a href="https://www.maersk.com/support/faqs/how-long-does-ocean-freight-take">{"Source: Maersk"}</a>{"."}</p>
<p>{"Confirm who owns each stage. Incoterms clarify buyer and seller responsibilities, costs and risks; the term alone is not a dated replenishment plan. Record the agreed term and place alongside the actual milestone dates. "}<a href="https://www.trade.gov/know-your-incoterms">{"Source: U.S. International Trade Administration"}</a>{"."}</p>
<h2>{"A small example: how missing days change your reorder window"}</h2>
<p>{"These are invented planning inputs, not typical China shipping times or a customer result."}</p>
<p>{"You have 300 sellable units and assume sales stay at 10 units a day. That gives 30 days of stock cover. Your initial inputs are 14 days production, 7 days shipping and 7 days buffer:"}</p>
<p>{""}<strong>{"30 − 14 − 7 − 7 = 2 days until the planned reorder point."}</strong>{""}</p>
<p>{"Then you learn that the 7-day estimate excludes 3 additional calendar days of delivery and warehouse receiving. Assume those stages happen sequentially, are not already included elsewhere, and the same 7-day contingency buffer is still required:"}</p>
<p>{""}<strong>{"30 − 14 − (7 + 3) − 7 = −1 day."}</strong>{""}</p>
<p>{"Under those assumptions, the planned reorder point was one day ago. That does not mean you have already run out of stock. It means your replenishment plan needs review now."}</p>
<p>{"Keep known process time separate from contingency. Avoid counting the same delay in production, shipping and buffer. Where steps overlap, use the actual timeline instead of blindly adding durations. This simple example assumes steady sales and no incoming stock; it does not calculate order quantity or a statistically derived safety stock."}</p>
<h2>{"A message you can adapt"}</h2>
<blockquote><p>{"Hi [name], we're planning the next order for [SKU and quantity]. Could you confirm the production start trigger, earliest start date, and goods-ready date? Please let us know whether inspection and packing are included, and whether the estimate uses working or calendar days."}</p><p>{"For transport, what pickup and arrival milestones does the estimate cover? Please flag any steps we need to confirm separately with our forwarder or warehouse, plus any planned closures that affect this order."}</p><p>{"Who should we check with for changes, and when would be a good date for the next update? Thanks—this will help us plan the reorder realistically."}</p></blockquote>
<h2>{"Turn the answers into a planning record"}</h2>
<p>{"Keep the supplier's reply with the SKU, quantity, date confirmed, assumptions and next check-in date. Mark estimates as estimates; a blank stage is unknown, not zero days. Refresh the plan when a milestone changes."}</p>
<p>{"Then work through the "}<a href="https://chinasupplyradar.com/blog/calculate-reorder-window/">{"reorder-window calculation"}</a>{" using your confirmed inputs. You can try the free Chrome tools with sample numbers; no Shopify account is required. Start with one SKU and check whether the result matches your actual replenishment process."}</p>
<h2>{"Common questions"}</h2>
<p>{""}<strong>{"Can I use the same lead time for every order?"}</strong>{""}</p>
<p>{"Treat it as a starting assumption. Reconfirm when quantity, specifications, production capacity, transport arrangements or closures change."}</p>
<p>{""}<strong>{"Does a public holiday calendar tell me when my supplier will close?"}</strong>{""}</p>
<p>{"Use it to start a conversation. Ask the supplier for its own closure dates, order cutoff and expected restart capacity."}</p>
<p>{""}<strong>{"Does a negative reorder window mean I should order more units?"}</strong>{""}</p>
<p>{"It flags a timing issue under your inputs. Quantity requires a separate decision that considers demand, incoming orders, budget and minimum order quantities."}</p>
<p>{"Sources checked October 11, 2026. The checklist and numerical example are editorial planning aids; the sources support the transport and responsibility distinctions above."}</p>
<h2>Already have an order in transit?</h2><p>Use the <Link href="/blog/inbound-inventory-reorder-timeline/">inbound inventory timeline and downloadable daily tables</Link> to check whether current stock lasts until the receipt becomes usable.</p>
<GuideNextStep source="supplier-lead-time-checklist" />
</article></main>); }
