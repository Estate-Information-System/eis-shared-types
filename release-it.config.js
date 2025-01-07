import "dotenv/config";

export default {
  npm: {
    publish: true,
    access: "public",
  },
  git: {
    commitMessage: "chore: release ${version}",
    tagName: "${version}",
    requireCleanWorkingDir: true,
    requireBranch: "main",
    push: true,
  },
  github: {
    release: true,
    token: process.env.GITHUB_TOKEN,
  },
  hooks: {
    "before:init": ["npm lint", "npm format"],
    "before:release": ["npm run build"],
  },
};
