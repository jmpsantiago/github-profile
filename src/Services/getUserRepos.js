const USERS_URL = "https://api.github.com/users/";

export async function getUserRepos(username) {
  const response = await fetch(`${USERS_URL}${username}/repos`);
  const data = await response.json();
  return data;
}
