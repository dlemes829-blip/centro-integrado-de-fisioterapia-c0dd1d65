import { researchTools } from "./business-data";

export type NexusResearchTool = typeof researchTools[number];

export function getPreparedResearchTools(): readonly NexusResearchTool[] {
  return researchTools;
}
