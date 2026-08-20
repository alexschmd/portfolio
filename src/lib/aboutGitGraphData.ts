import type { GitGraphBranchColor } from "./gitGraphPalette"
import { GIT_GRAPH_BRANCH_COLORS } from "./gitGraphPalette"

export type GitGraphBranchId = string
export type GitGraphCommitId = string

export type GitGraphBranch = {
  id: GitGraphBranchId
  label: string
  color: GitGraphBranchColor
}

export type GitGraphCommit = {
  id: GitGraphCommitId
  branchId: GitGraphBranchId
  title: string
  subtitle?: string
  dateLabel?: string
  date?: string
  parents: GitGraphCommitId[]
  kind?: "year" | "milestone" | "merge" | "default"
}

export type GitGraphData = {
  branches: GitGraphBranch[]
  commits: GitGraphCommit[]
}

const color = (index: number) =>
  GIT_GRAPH_BRANCH_COLORS[index % GIT_GRAPH_BRANCH_COLORS.length]

export const aboutGitGraphData: GitGraphData = {
  branches: [
    { id: "main", label: "main", color: color(0) },
    { id: "school", label: "school", color: color(1) },
    { id: "internship", label: "internship", color: color(2) },
    { id: "work", label: "work", color: color(3) },
    { id: "uni", label: "uni", color: color(4) },
    { id: "tz", label: "tz", color: color(5) },
    { id: "messdiener", label: "messdiener", color: color(6) },
    { id: "sternsinger", label: "sternsinger", color: color(1) },
  ],
  commits: (() => {
    const now = new Date()
    const currentYear = now.getFullYear()

    const commits: GitGraphCommit[] = []

    commits.push({
      id: "m0",
      branchId: "main",
      title: "Weiterführende Schule gestartet",
      date: "2015-08-01",
      dateLabel: "Aug 2015",
      parents: [],
      kind: "milestone",
    })

    commits.push({
      id: "s0",
      branchId: "school",
      title: "Weiterführende Schule",
      subtitle: "Alltag, Fächer, Projekte",
      date: "2015-08-01",
      dateLabel: "Aug 2015",
      parents: ["m0"],
    })

    // Year markers on `main` (outlined nodes).
    let previousMainId: GitGraphCommitId = "m0"
    for (let year = 2016; year <= currentYear; year++) {
      const id = `y${year}`
      commits.push({
        id,
        branchId: "main",
        title: String(year),
        date: `${year}-01-01`,
        dateLabel: String(year),
        parents: [previousMainId],
        kind: "year",
      })
      previousMainId = id
    }

    // 2021: TZ + Praktikum
    commits.push({
      id: "t0",
      branchId: "tz",
      title: "TZ gestartet",
      date: "2021-01-01",
      dateLabel: "2021",
      parents: ["y2021"],
    })
    commits.push({
      id: "i0",
      branchId: "internship",
      title: "Praktikum gestartet",
      date: "2021-06-01",
      dateLabel: "Jun 2021",
      parents: ["y2021"],
    })
    commits.push({
      id: "i1",
      branchId: "internship",
      title: "Praktikum abgeschlossen",
      date: "2021-06-30",
      dateLabel: "Jun 2021",
      parents: ["i0"],
      kind: "milestone",
    })
    commits.push({
      id: "m_praktikum",
      branchId: "main",
      title: "Praktikum abgeschlossen",
      date: "2021-06-30",
      dateLabel: "Jun 2021",
      parents: ["y2021", "i1"],
      kind: "merge",
    })

    // 2023: Messdiener + Abitur
    commits.push({
      id: "md0",
      branchId: "messdiener",
      title: "Messdienerschaft gestartet",
      date: "2023-01-01",
      dateLabel: "Jan 2023",
      parents: ["y2023"],
    })
    commits.push({
      id: "s1",
      branchId: "school",
      title: "Abitur",
      subtitle: "Schule abgeschlossen",
      date: "2023-06-01",
      dateLabel: "Jun 2023",
      parents: ["s0"],
      kind: "milestone",
    })
    commits.push({
      id: "m_abitur",
      branchId: "main",
      title: "Abitur",
      date: "2023-06-01",
      dateLabel: "Jun 2023",
      parents: ["y2023", "s1"],
      kind: "merge",
    })

    // 2023: Beruf + Uni (ongoing)
    commits.push({
      id: "m_start_2023",
      branchId: "main",
      title: "Beruf + Uni gestartet",
      date: "2023-09-01",
      dateLabel: "Sep 2023",
      parents: ["m_abitur"],
      kind: "milestone",
    })
    commits.push({
      id: "w0",
      branchId: "work",
      title: "Beruf gestartet",
      date: "2023-09-01",
      dateLabel: "Sep 2023",
      parents: ["m_start_2023"],
    })
    commits.push({
      id: "u0",
      branchId: "uni",
      title: "Uni gestartet",
      date: "2023-09-01",
      dateLabel: "Sep 2023",
      parents: ["w0"],
    })

    // 2024: Sternsinger (ongoing)
    commits.push({
      id: "st0",
      branchId: "sternsinger",
      title: "Sternsinger gestartet",
      date: "2024-01-01",
      dateLabel: "Jan 2024",
      parents: ["y2024"],
    })

    return commits
  })(),
}
