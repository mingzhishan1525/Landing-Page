import { generateGrowthContent } from "../lib/automation/content-generator";

async function main() {
  const files = await generateGrowthContent();

  console.log("Generated content drafts:");
  for (const file of files) {
    console.log(`- ${file}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
