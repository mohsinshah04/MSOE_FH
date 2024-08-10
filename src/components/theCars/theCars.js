import React from 'react'
import './theCars.css'
import teamstruc from "../../assets/teamstruc.png"

const theCars = () => {
  return (
    <div className="teambox">
      <img src={teamstruc} alt="Team Structure" className="team" />
    </div>
  )
}

export default theCars