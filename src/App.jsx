import { useState } from 'react'
import './App.css'

import { Header } from './Components/Header.jsx'
import { UserInfo } from './Components/UserInfo.jsx'
import { ListOfRepositorys } from './Components/ListOfRepositorys.jsx'
import { getUserData } from './Services/getUserData.js'
import { getUserRepos } from './Services/getUserRepos.js'

export default function App() {
  const [followers, setFollowers] = useState(0)
  const [following, setFollowing] = useState(0)
  const [location, setLocation] = useState("")
  const [username, setUsername] = useState("")
  const [repositories, setRepositories] = useState([])

  async function handleSearch(event) {
    event.preventDefault()
    
    const userData = await getUserData(username)
    const userRepos = await getUserRepos(username)

    const newFollowers = userData.followers
    const newFollowing = userData.following
    const newLocation = userData.location

    setFollowers(newFollowers)
    setFollowing(newFollowing)
    setLocation(newLocation)
    userRepos ? setRepositories(userRepos) : setRepositories([])
  }

  function handleInput(event) {
    event.preventDefault()
    setUsername(event.target.value)
  }

  return (
    <div className='app-container'>
      <Header 
        handleSearch={ handleSearch }
        handleInput={ handleInput }
      />
      <main className='main-content'>
        <UserInfo 
          followers={followers}
          following={following}
          location={location}
        />
        <ListOfRepositorys hasRepo={ repositories } />
      </main>
    </div>
  )
}


