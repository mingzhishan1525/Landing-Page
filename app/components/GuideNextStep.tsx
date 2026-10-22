import TrackedLink from './TrackedLink';
import { siteConfig } from '../config';
export default function GuideNextStep({source}:{source:string}) {
 return <aside style={{borderTop:'1px solid #a8ceca',marginTop:40,paddingTop:8}} aria-label="Choose your next step">
 <h2>Put the plan to work</h2>
 <p>Start small: use one SKU and verify its stock, demand and lead-time inputs before relying on a result.</p>
 <ul><li><TrackedLink href={siteConfig.chromeStoreUrl} eventSource={source} buttonName="guide_chrome_store">Explore the free Chrome extension</TrackedLink> — keep one manually entered SKU, supplier notes and message templates in your browser. No Shopify account is required for the free features.</li>
 <li><TrackedLink href={siteConfig.shopifyAppUrl} eventSource={source} buttonName="guide_shopify_store">View the Shopify app</TrackedLink> — for merchants who want to connect their Shopify store. Review its current features, plans and permissions before installing.</li></ul>
 <p style={{fontSize:14}}>The inbound timeline on this website is a separate educational tool; it does not import or update store inventory or purchase orders.</p>
 </aside>;
}
