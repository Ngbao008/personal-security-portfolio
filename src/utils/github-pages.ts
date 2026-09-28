const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? "").split("/");

// A repository named <account>.github.io is a user site; every other
// repository is published below /<repository>/ on GitHub Pages.
export const githubPagesBase = owner && repository && repository !== `${owner}.github.io`
  ? `/${repository}`
  : "";

export const githubPagesUrl = owner && repository
  ? `https://${owner}.github.io${githubPagesBase}`
  : undefined;

