import { mkdirSync, writeFileSync } from "node:fs";
const entry = "Sleep finally showed up at 4:58 a.m., after eight hours of trying, two minutes before my 5 a.m. alarm. It never comes early.";
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
