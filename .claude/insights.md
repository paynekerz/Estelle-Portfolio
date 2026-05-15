# insights.md

2026-05-15: Writing design docs without holding the target stack in mind → always fold migration notes into the first DESIGN.md pass, not a separate review
2026-05-15: Running npm install before checking node --version → verify runtime against package.json engine requirement first, always
2026-05-15: Running nvm use in a separate Bash call before npm install → chain nvm use && npm ... in a single invocation, shell state does not persist
2026-05-15: npx astro check hangs in PowerShell on Windows → use npm run build as the primary post-scaffold verification step
