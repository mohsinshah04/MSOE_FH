import React from 'react'
import './aboutUs.css'
import teamstruc from "../../assets/teamstruc.png"

const aboutUs = () => {
  return (
    <div className="teambox">
      <img src={teamstruc} alt="Team Structure" className="team" />
    </div>
  )
}

export default aboutUs