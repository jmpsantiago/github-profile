import InfoBox from "./InfoBox"
import "../Styles/UserInfo.css"

export function UserInfo({ followers, following, location }) {
  return (
    <div className="user-info-container">
      <div className="image-container">
        <img
          className="logo-image"
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4"
          alt="GitHub Logo"
        />
      </div>
      <div className="info-container">  
        <InfoBox info="Followers" infoValue={followers} />
        <InfoBox info="Following" infoValue={following} />
        <InfoBox info="Location" infoValue={location} />
      </div>
    </div>
  )
}