export interface Project {
  name: string;
  description: string | null;
  html_url: string;
  language: string;
  languages_url: string;
  iconLanguaje: string;
}

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

async function getLanguages(urls: string[]): Promise<{ url: string; languages: string[] }[]> {
  try {
    const results = await Promise.all(
      urls.map(async (url) => {
        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${import.meta.env.GITHUB_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`Error fetching languages from URL: ${url}`);
        }

        const languagesData = await response.json();
        return {
          url,
          languages: Object.keys(languagesData),
        };
      })
    );

    return results;
  } catch (error) {
    console.error("Error fetching languages:", error);
    throw error;
  }
}

export async function fetchLanguages(){
  const projects = await getProjectsGit();
  const urls = projects.map((project: Project) => project.languages_url)
  try {
    const languages = await getLanguages(urls);
    return languages;
  } catch (error) {
    console.error("Error:", error);
  }
}
