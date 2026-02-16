import '../Styles/InfoBox.css'

export default function InfoBox({ info, infoValue }) {
  return (
      <div className="info-box">
          <div className='info-name'>{info}</div>
          <div className="info-value">{infoValue}</div>
      </div>
  )
}