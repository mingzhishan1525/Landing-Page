import Link from "next/link";
import GuideNextStep from "../../components/GuideNextStep";
import styles from "../calculate-reorder-window/article.module.css";
export const metadata = {
 title: "Which Shopify inventory number should you use for reordering? | China Supply Radar",
 description: "Compare Available, On hand, Committed and Incoming stock before calculating coverage. A worked example shows how double counting changes your reorder window.",
 alternates: { canonical: "/blog/shopify-available-stock-reorder/" },
 openGraph: {title: "Which Shopify inventory number belongs in your reorder calculation?", url: "/blog/shopify-available-stock-reorder/", type: "article"},
};
export default function AvailableStockGuide() { return (
<main className={styles.page}><article className={styles.article}>
<nav><Link href="/">China Supply Radar</Link><Link href="/blog/">All guides</Link></nav>
<p className={styles.eyebrow}>INVENTORY PLANNING GUIDE</p>
<h1>Which Shopify inventory number belongs in your reorder calculation?</h1>
<p>{"A reorder calculation can be mathematically correct and still start with the wrong stock number. Before dividing inventory by daily demand, decide which units can serve the future orders you are planning for."}</p>
<p>{"For the simple coverage calculation below, start with verified Available units for the relevant SKU and fulfillment location. Do not use a total merely because it is larger."}</p>
<h2>{"Read the states before using the number"}</h2>
<p>{"Shopify separates inventory into states. On hand includes Available, Committed and Unavailable quantities. Available excludes units already committed or held as unavailable, and excludes Incoming stock. Incoming stock must be received and become Available before it belongs in that sellable quantity. An app can put received units into another state instead. "}<a href="https://help.shopify.com/en/manual/inventory-and-locations/fundamentals/inventory-states">{"Shopify inventory states"}</a>{""}</p>
<p>{"On Shopify's Inventory page, inspect the variant and location as well as the column heading. A location can hold stock without fulfilling new orders for that variant; its Available field can display a dash. Do not silently treat that dash as sellable stock or as a verified zero. "}<a href="https://help.shopify.com/en/manual/inventory-and-locations/adjusting-inventory/viewing-inventory">{"Viewing inventory"}</a>{""}</p>
<h2>{"A synthetic example: the wrong input adds eight days"}</h2>
<p>{"This is an invented planning exercise, not a customer result. Assume one SKU at one fulfillment location, accurate inventory records, and steady future demand of 10 units a day. Existing commitments are already reflected in Available and are not included again in the future demand forecast."}</p>
<div className={styles.tableWrap}><table><thead><tr><th scope="col">State</th><th scope="col">Units</th></tr></thead><tbody>
<tr><td>{"On hand"}</td><td>{"380"}</td></tr>
<tr><td>{"Committed"}</td><td>{"50"}</td></tr>
<tr><td>{"Unavailable"}</td><td>{"30"}</td></tr>
<tr><td>{"Available"}</td><td>{"300"}</td></tr>
<tr><td>{"Incoming, excluded from today's coverage"}</td><td>{"150"}</td></tr>
</tbody></table></div>
<p>{"The states reconcile: 380 = 50 + 30 + 300."}</p>
<p>{"Using Available gives 300 / 10 = 30 days of coverage. Using On hand gives 380 / 10 = 38 days. The second calculation overstates coverage for new demand by eight days under these assumptions."}</p>
<p>{"Suppose production takes 14 days, shipping takes 7 days, and your chosen planning buffer is 7 days. The simplified window is:"}</p>
<p>{"300 / 10 \u2212 14 \u2212 7 \u2212 7 = 2 days."}</p>
<p>{"Using 380 instead would give 10 days. Neither calculation determines an order quantity. The two-day result excludes incoming orders; it is not a conclusion about when another order is required once the incoming shipment is considered."}</p>
<h2>{"Avoid subtracting the same commitments twice"}</h2>
<p>{"If you start with the 300 Available units above, do not subtract the 50 Committed units again. That would leave 250 units and understate coverage by five days. Keep the inventory snapshot and demand definition aligned: an outstanding order already removed from Available must not also be treated as a new future order in this simple model."}</p>
<p>{"A separate dated fulfillment plan is needed if you want to model existing backlog, new demand and receipts together. State what happens to demand that cannot be fulfilled: lost sales and backorders lead to different later balances."}</p>
<h2>{"Keep the receipt on its own timeline"}</h2>
<p>{"The 150 Incoming units are not part of today's 300 units. Record their expected date of availability separately, including receiving or inspection time where relevant. Then check whether today's stock lasts until that date, and what happens if the receipt is delayed. Our "}<a href="https://chinasupplyradar.com/blog/inbound-inventory-reorder-timeline/">{"inbound inventory timeline"}</a>{" works through that distinction."}</p>
<h2>{"Save an input snapshot before calculating"}</h2>
<p>{"Record the SKU, location, snapshot time, Available units, demand period and demand definition. Note any stock held back and whether an additional buffer represents a separate contingency or repeats protection already in the plan. Match the demand scope to the stock scope; a single location's inventory should not automatically be divided by the whole business's sales."}</p>
<p>{"Verify discrepancies against merchant inventory records before making a purchasing decision. Do not change stock records just to make a planning formula produce a preferred answer."}</p>
<p>{"Once the inputs are consistent, use the "}<a href="https://chinasupplyradar.com/blog/calculate-reorder-window/">{"reorder-window walkthrough"}</a>{" to calculate the simplified timing estimate. This guide explains a manual planning method; it does not claim that China Supply Radar automatically reconciles Shopify inventory states or purchase orders."}</p>
<p>Sources checked October 23, 2026. The numerical example is synthetic.</p>
<GuideNextStep source="shopify-available-stock-reorder" />
</article></main>); }
