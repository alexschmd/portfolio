export const GIT_GRAPH_BRANCH_COLORS = [
  "#0062d1",
  "#8e4ec6",
  "#df2670",
  "#d93037",
  "#fb990a",
  "#398e4a",
  "#258c7d",
] as const

export type GitGraphBranchColor = (typeof GIT_GRAPH_BRANCH_COLORS)[number]
