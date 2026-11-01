import Link from "next/link";
import TrackedLink from "../components/TrackedLink";
import { siteConfig } from "../config";
import styles from "../blog/calculate-reorder-window/article.module.css";
export const metadata = {title: "Start with one SKU | China Supply Radar", description: "A quick-start guide to the free Chrome inventory planner and the separate Shopify setup path. Try synthetic inputs before using your own stock data.", alternates:{canonical:"/start/"}};
export default function StartPage(){return <main className={styles.page}><article className={styles.article}>
<nav><Link href="/">China Supply Radar</Link><Link href="/blog/">Planning guides</Link></nav>
<p className={styles.eyebrow}>QUICK START</p><h1>Start with one SKU</h1>
<p>Try a small example before relying on a reorder date. Choose the browser tool for manually entered data, or the Shopify app for your store workflow. They have separate setup steps.</p>
<h2>Try the free Chrome inventory planner</h2>
<ol><li><TrackedLink href={siteConfig.chromeStoreUrl} eventSource="quick-start" buttonName="guide_chrome_store">Open China Supply Radar in the Chrome Web Store</TrackedLink> using desktop Chrome. Review the requested permissions and install the extension.</li>
<li>Open Chrome’s Extensions menu, then China Supply Radar. Select <strong>Inventory</strong>. The Dashboard also contains Pro sections; you do not need to upgrade to try the free one-SKU planner.</li>
<li>Use the synthetic values below in an empty SKU slot. If you already have a saved SKU, keep your real record; do not overwrite it just to try this example.</li>
<li>Use the form’s save action. When editing an existing SKU, the button is labelled <strong>Update SKU</strong>. Read the calculation below the form.</li></ol>
<div className={styles.tableWrap}><table><thead><tr><th scope="col">Field</th><th scope="col">Sample value</th></tr></thead><tbody>
<tr><td>Product / SKU name</td><td>DEMO-SKU</td></tr><tr><td>Supplier Name</td><td>Example supplier</td></tr>
<tr><td>Current Inventory</td><td>300 units</td></tr><tr><td>Average Daily Sales</td><td>10 units/day</td></tr>
<tr><td>Production Lead Time Days</td><td>14</td></tr><tr><td>Shipping Time Days</td><td>7</td></tr><tr><td>Safety Stock Days</td><td>7</td></tr>
</tbody></table></div>
<h2>Check the result</h2><p>With those inputs, expect <strong>30 coverage days</strong>, <strong>21 days of production plus shipping</strong>, and a <strong>2-day reorder window</strong>: 300 ÷ 10 − 14 − 7 − 7 = 2.</p>
<p>This example assumes steady demand, all 300 units available to sell, no incoming stock, and sequential production and shipping. Delivery and receiving are included in the sample shipping allowance. Safety Stock Days is a time allowance in this calculation. These are invented inputs, not a forecast for your store.</p>
<p>The displayed calendar dates depend on when you run the calculation. A negative window signals that the plan needs attention under your inputs; it does not prove that your stock is already gone. Confirm the inputs and supplier dates before acting.</p>
<p>For your own SKU, use <Link href="/blog/shopify-available-stock-reorder/">available stock</Link>, a defensible <Link href="/blog/choose-daily-sales-reorder/">daily demand assumption</Link>, and <Link href="/blog/supplier-lead-time-checklist/">confirmed lead-time endpoints</Link>. The free Chrome workflow does not require a Shopify account.</p>
<h2>Using a Shopify store instead?</h2>
<p><TrackedLink href={siteConfig.shopifyAppUrl} eventSource="quick-start" buttonName="guide_shopify_store">Review the Shopify app listing</TrackedLink> for current pricing, permissions and features before installing. Shopify setup and any subscription approval are separate from the free Chrome example above.</p>
<ol><li>Open China Supply Radar inside your Shopify admin.</li><li>The app’s setup prompt starts with <strong>Sync Products &amp; Inventory</strong> and <strong>Sync Order History</strong>.</li><li>Follow the in-app instructions in <strong>Suppliers</strong> to connect the selected SKU with its supplier, then review recommendations against your actual inventory and supplier dates.</li></ol>
<p>If syncing fails, stop and report the visible error rather than treating an empty result as zero inventory. Do not approve a paid plan merely to diagnose an error.</p>
<h2>Need help?</h2><p>Use our <Link href="/support/">support page</Link>. Tell us which path you chose, the step that stopped you, and the visible error. Use sample values where possible; never send access tokens, passwords or customer records.</p>
<p style={{fontSize:14}}>Interface labels checked November 1, 2026. The sample calculation was checked in an existing Chrome installation; this guide is not a timed installation test or a complete Shopify billing test.</p>
</article></main>;}
