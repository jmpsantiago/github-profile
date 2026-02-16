import '../Styles/ListOfRepositorys.css'
import { RepositoryCard } from './RepositoryCard.jsx'
import { useState, useEffect } from 'react'

export function ListOfRepositorys({ hasRepo }) {
  const [displayedRepos, setDisplayedRepos] = useState([])
  const [numbOfRepos, setNumberOfRepos] = useState(3)

  useEffect(() => {
    setDisplayedRepos(hasRepo)
  }, [hasRepo])


  return (
    <section className="repository-section">
        <div className="web-info">
          <h1>GitHub</h1>
          <p>How people build software.</p>
        </div>
        <div className="repository-list">
          {displayedRepos.map((repo, index) => {
            if (index <= numbOfRepos){
              return (
                <RepositoryCard 
                  key={repo.id}
                  name={repo.name}
                  description={repo.description}
                  license={repo.license}
                  forks={repo.forks_count}
                  stars={repo.stargazers_count}
                  updatedAt={repo.updated_at}
                  moveToRepo={() => window.open(repo.html_url, "_blank")}
                />
              )
            }
          })}
        </div>
        <div className="button-container">
          <button
            onClick={() => setNumberOfRepos(displayedRepos.length - 1)}
          >View all repositories</button>
        </div>
    </section>
  )
}