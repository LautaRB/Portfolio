export interface RepositoryInfo {
  name: string;
  description?: string;
  html_url: string; // url del repositorio
  language: string; //Lenguaje principal del repositorio
  languages_url?: string; // Url de los lenguajes usados
  languages: string[]; // Lenguajes usados en el repositorio
}

async function getRepositories() {
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

async function getLanguages( urls: string[]): Promise<string[][]> {
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
        return Object.keys(languaguesData);
      })
    );

    return results;
  } catch (error) {
    console.error("Error fetching languages:", error);
    throw error;
  }
}

async function fetchLanguages() {
  const repositories = await getRepositories();
  const urls = repositories.map(
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
  const repositories = await getRepositories();
  const languaguesData = await fetchLanguages();

  repositories.forEach((repository: RepositoryInfo, index: number) => {
    repository.languages = languaguesData?.[index] || [];
  });


  console.log(repositories);
  return repositories;
}
