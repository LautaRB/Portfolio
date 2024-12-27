import { object } from "astro:schema";

export interface RepositoryInfo {
  name: string;
  description: string | null;
  html_url: string; // url del repositorio
  language: string; //Lenguaje principal del repositorio
  languages_url: string; // Url de los lenguajes usados
  languages: string[] | undefined; // Lenguajes usados en el repositorio
}

async function getProjectsGit() {
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

async function getLanguages( urls: string[]) {
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

        const languaguesData = await response.json();
        return {
          languages: Object.keys(languaguesData),
        };
      })
    );
    
    const languagesArr = results.map((result) => result.languages);

    return languagesArr;
  } catch (error) {
    console.error("Error fetching languages:", error);
    throw error;
  }
}

async function fetchLanguages() {
  const projects = await getProjectsGit();
  const urls = projects.map(
    (repository: RepositoryInfo) => repository.languages_url
  );
  try {
    const languagues = await getLanguages(urls);
    return languagues;
  } catch (error) {
    console.error("Error:", error);
  }
}

export async function getMergedInfo() {
  const projects = await getProjectsGit();
  const languaguesData = await fetchLanguages();

  projects.forEach((repository: RepositoryInfo, index: number) => {
    repository.languages = languaguesData?.[index];
  });

  projects.map((repository: RepositoryInfo) => {
    repository.languages?.map((language: string) => {
      language.toLocaleLowerCase();
    });
  });

  return projects;
}
