import {
  siDocker,
  siGit,
  siJavascript,
  siLaravel,
  siLinux,
  siMysql,
  siNextdotjs,
  siNodedotjs,
  siPhp,
  siPostgresql,
  siPython,
  siReact,
  siTailwindcss,
  siThreedotjs,
  siTypescript,
} from "simple-icons";

export type SkillIcon = {
  title: string;
  slug: string;
  path: string;
  hex: string;
};

// 3×5 grid — consumed by the 3D keyboard (one icon per keycap) and, on mobile,
// by the flat list below for the static skills grid that replaces the
// hover-driven keyboard interaction. Taglines live in the i18n dictionary
// under `keyboard.taglines.<slug>`.
export const SKILLS_GRID: readonly (readonly SkillIcon[])[] = [
  [siTypescript, siJavascript, siReact, siNextdotjs, siTailwindcss],
  [siPython, siPhp, siLaravel, siNodedotjs, siThreedotjs],
  [siMysql, siPostgresql, siDocker, siGit, siLinux],
] as const;

export const SKILLS_FLAT: readonly SkillIcon[] = SKILLS_GRID.flat();
