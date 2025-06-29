export interface GitHubRelease {
  tag_name: string;
  name: string;
  html_url: string;
  published_at: string;
  body: string;
  prerelease: boolean;
  draft: boolean;
}

export async function getLatestRelease(): Promise<GitHubRelease | null> {
  try {
    const response = await fetch(
      "https://api.github.com/repos/Razano26/CookieCroquis/releases/latest",
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
          "User-Agent": "CookieCroquis-App",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour to respect rate limits
      },
    );

    if (!response.ok) {
      console.error("Failed to fetch GitHub release:", response.statusText);
      return null;
    }

    const release: GitHubRelease = await response.json();

    // Only return non-draft, non-prerelease versions
    if (release.draft || release.prerelease) {
      console.log("Latest release is draft or prerelease, skipping");
      return null;
    }

    return release;
  } catch (error) {
    console.error("Error fetching GitHub release:", error);
    return null;
  }
}

export function formatVersion(version: string): string {
  // Remove 'v' prefix if present and ensure proper formatting
  const cleanVersion = version.startsWith("v") ? version.slice(1) : version;
  return `v${cleanVersion}`;
}
