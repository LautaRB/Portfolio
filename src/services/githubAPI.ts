export interface RepositoryInfo {
  name: string;
  description: string | null;
  html_url: string; // url del repositorio
  language: string; //Lenguaje principal del repositorio
  languages_url: string; // Url de los lenguajes usados
  languages: Array<string>; // Lenguajes usados en el repositorio
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

async function getLanguages(urls: string[]): Promise<{ languages: string[] }[]> {
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

    return results;
  } catch (error) {
    console.error("Error fetching languages:", error);
    throw error;
  }
}

export async function fetchLanguages(){
  const projects = await getProjectsGit();
  const urls = projects.map((repository: RepositoryInfo) => repository.languages_url)
  try {
    const languagues = await getLanguages(urls);
    return languagues;
  } catch (error) {
    console.error("Error:", error);
  }
}

async function getMergedInfo(){
  const projects = await getProjectsGit();
  const languagues = await fetchLanguages();
  console.log(languagues);
  /*[
      { languages: [ 'TypeScript', 'CSS', 'JavaScript', 'HTML' ] },
      { languages: [] }
    ]*/
}
getMergedInfo();