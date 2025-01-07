require("dotenv/config");

module.exports = {
  npm: {
    publish: false,
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
    "before:init": ["npm run lint", "npm run format"],
    "before:release": ["npm run build"],
  },
};
