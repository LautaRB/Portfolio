export async function getProjectsGit() {
  const response = await fetch(
    "https://api.github.com/users/LautaRB/repos?sort=created&per_page=4",
    {
      headers: {
        Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Error fetching GitHub repositories");
  }
  return await response.json();
}
