export type SupplierRegion = {
  province: string;
  industries: string[];
  riskLevel: "low" | "medium" | "high";
  notes: string;
};

export const supplierRegions: SupplierRegion[] = [
  {
    province: "Guangdong",
    industries: ["electronics", "consumer goods", "apparel", "home goods"],
    riskLevel: "high",
    notes:
      "Dense export manufacturing base with heavy holiday shipment congestion around major shutdown windows.",
  },
  {
    province: "Zhejiang",
    industries: ["small commodities", "textiles", "hardware", "packaging"],
    riskLevel: "medium",
    notes:
      "Strong supplier base with seasonal production and logistics pressure around trade peaks.",
  },
  {
    province: "Jiangsu",
    industries: ["machinery", "textiles", "electronics", "industrial goods"],
    riskLevel: "medium",
    notes:
      "Broad manufacturing region where supplier lead times vary significantly by factory workload.",
  },
  {
    province: "Fujian",
    industries: ["footwear", "apparel", "bags", "sports goods"],
    riskLevel: "medium",
    notes:
      "Export-focused region where holiday timing and port logistics may affect replenishment planning.",
  },
  {
    province: "Shandong",
    industries: ["food products", "machinery", "chemicals", "packaging"],
    riskLevel: "low",
    notes:
      "Generally stable production region, though long lead times still require holiday buffers.",
  },
  {
    province: "Hebei",
    industries: ["industrial goods", "metal products", "building materials"],
    riskLevel: "medium",
    notes:
      "Industrial supplier region where production timing can be affected by policy, logistics, and holiday schedules.",
  },
];
