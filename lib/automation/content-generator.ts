import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";
import { chinaHolidays } from "../data/china-holidays";
import { contentTemplates } from "../data/content-templates";
import { supplierRegions } from "../data/supplier-regions";

function daysLeft(date: string) {
  return Math.max(
    0,
    Math.ceil(
      (new Date(date).getTime() - new Date().getTime()) /
        (1000 * 60 * 60 * 24),
    ),
  );
}

function replaceTemplate(
  template: string,
  values: Record<string, string | number>,
) {
  return Object.entries(values).reduce(
    (content, [key, value]) => content.replaceAll(`{${key}}`, String(value)),
    template,
  );
}

export async function generateGrowthContent(outputDir = "generated-content") {
  await mkdir(outputDir, { recursive: true });

  const holiday = chinaHolidays[0];
  const region = supplierRegions[0];
  const left = daysLeft(holiday.startDate);
  const recommendedDeadline = new Date(
    new Date(holiday.startDate).getTime() -
      (45 + holiday.bufferDays) * 1000 * 60 * 60 * 24,
  )
    .toISOString()
    .slice(0, 10);
  const toolUrl = "https://chinasupplyradar.com/tools/holiday-calculator";

  const replacements = {
    holiday: holiday.name,
    days_left: left,
    recommended_deadline: recommendedDeadline,
    tool_url: toolUrl,
    lead_time: 45,
    risk_level: holiday.impactLevel,
  };

  const files = [
    {
      name: "seo-article-draft.md",
      content: `# ${holiday.name} Ecommerce Reorder Planning Draft

## Summary
${holiday.description}

## Supplier Region Angle
${region.province}: ${region.notes}

## Recommended Deadline
${recommendedDeadline}

## CTA
Use the free calculator: ${toolUrl}
`,
    },
    {
      name: "x-post-draft.md",
      content: replaceTemplate(contentTemplates.xPost, replacements),
    },
    {
      name: "linkedin-post-draft.md",
      content: replaceTemplate(contentTemplates.linkedInPost, replacements),
    },
    {
      name: "weekly-newsletter-draft.md",
      content: replaceTemplate(contentTemplates.newsletter, replacements),
    },
  ];

  await Promise.all(
    files.map((file) => writeFile(join(outputDir, file.name), file.content)),
  );

  return files.map((file) => join(outputDir, file.name));
}
