async function fetch_github_project(username) {
  let response = await fetch(`https://api.github.com/users/${username}/repos`)
  let data = await response.json()
  console.log(data)
  return data
} 
