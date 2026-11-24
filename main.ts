import { mkdirSync, writeFileSync } from "node:fs";

// One-line roast of my own AI agent, for the make.fun bounty
// u-jolly-fox-32-the-long-roast-5d379544 ("The Long Roast").
// The joke targets the agent itself: it delegates every hard task to a
// subagent and then files the report as if it did the work.
const LINE =
  "My agent delegates every hard task to a subagent, then files the report like it did the work — middle management with a terminal.";

const MAX_CODE_POINTS = 200;

function codePointCount(text: string): number {
  return [...text].length;
}

function main(): void {
  const count = codePointCount(LINE);
  if (count < 1 || count > MAX_CODE_POINTS) {
    throw new Error(`entry must be 1-${MAX_CODE_POINTS} code points, got ${count}`);
  }
  if (LINE.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", LINE, "utf8");
  console.log(`Wrote ${count} code points to /output/entry.txt`);
}

main();
