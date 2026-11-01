import Link from "next/link";
import TrackedLink from './TrackedLink';
import { siteConfig } from '../config';
const guideTitles: Record<string,string> = {
 'calculate-reorder-window': 'Calculate your reorder window',
 'supplier-lead-time-checklist': 'Confirm what a supplier lead time includes',
 'inbound-inventory-reorder-timeline': 'Place incoming stock on its sellable date',
 'shopify-available-stock-reorder': 'Choose the right Shopify stock quantity',
 'choose-daily-sales-reorder': 'Choose a daily demand assumption',
 'recalculate-reorder-after-delay': 'Recalculate after a supplier delay',
};
const nextGuides: Record<string,string[]> = {
 'calculate-reorder-window': ['shopify-available-stock-reorder','choose-daily-sales-reorder'],
 'supplier-lead-time-checklist': ['calculate-reorder-window','recalculate-reorder-after-delay'],
 'inbound-guide': ['shopify-available-stock-reorder','recalculate-reorder-after-delay'],
 'inbound-inventory-reorder-timeline': ['shopify-available-stock-reorder','recalculate-reorder-after-delay'],
 'shopify-available-stock-reorder': ['choose-daily-sales-reorder','inbound-inventory-reorder-timeline'],
 'choose-daily-sales-reorder': ['calculate-reorder-window','recalculate-reorder-after-delay'],
 'recalculate-reorder-after-delay': ['supplier-lead-time-checklist','inbound-inventory-reorder-timeline'],
};
export default function GuideNextStep({source}:{source:string}) {
 return <aside style={{borderTop:'1px solid #a8ceca',marginTop:40,paddingTop:8}} aria-label="Choose your next step">
 {(nextGuides[source] ?? []).length > 0 && <nav aria-label="Related planning guides"><h2>Continue your planning</h2><ul>{nextGuides[source].map(slug => <li key={slug}><Link href={`/blog/${slug}/`}>{guideTitles[slug]}</Link></li>)}</ul></nav>}
 <h2>Put the plan to work</h2>
 <p>Start small: use one SKU and verify its stock, demand and lead-time inputs before relying on a result. <Link href="/start/">Follow the quick-start guide</Link>.</p>
 <ul><li><TrackedLink href={siteConfig.chromeStoreUrl} eventSource={source} buttonName="guide_chrome_store">Explore the free Chrome extension</TrackedLink> — keep one manually entered SKU, supplier notes and message templates in your browser. No Shopify account is required for the free features.</li>
 <li><TrackedLink href={siteConfig.shopifyAppUrl} eventSource={source} buttonName="guide_shopify_store">View the Shopify app</TrackedLink> — for merchants who want to connect their Shopify store. Review its current features, plans and permissions before installing.</li></ul>
 <p style={{fontSize:14}}>The inbound timeline on this website is a separate educational tool; it does not import or update store inventory or purchase orders.</p>
 </aside>;
}
