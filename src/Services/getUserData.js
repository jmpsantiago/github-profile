const USERS_URL = "https://api.github.com/users/";

export async function getUserData(username) {
  const response = await fetch(`${USERS_URL}${username}`);
  const data = await response.json();
  return data;
}