import Chield from "../resources/Chield_alt.svg"
import Nesting from "../resources/Nesting.svg"
import Star from "../resources/Star.svg"

import '../Styles/RepositoryCard.css'

export function RepositoryCard({ name, description, license, forks, stars, updatedAt, moveToRepo }) {
    const currentDate = new Date()
    const updatedDate = new Date(updatedAt)
    const timeDifference = currentDate - updatedDate
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

    return (
        <div className="repository-card" onClick={ moveToRepo }>
            <h2>{name}</h2>
            <p>{description}</p>
            <div className="repository-details">
                <span className={license ? "license" : "no-license"}>
                    <img src={Chield} alt="Chield" /> 
                    {license ? license.spdx_id : "No license"}
                </span>
                <span>
                    <img src={Nesting} alt="Nesting" /> 
                    {forks ? forks : 0}
                </span>
                <span>
                    <img src={Star} alt="Star" /> 
                    {stars ? stars : 0}
                </span>
                <p>updated {daysDifference} days ago</p>
            </div>
        </div>
    )
}