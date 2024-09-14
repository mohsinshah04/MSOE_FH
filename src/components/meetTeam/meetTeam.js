import React from 'react'
import './meetTeam.css'
import teamstruc from "../../assets/TeamFlowchart2025_08-19-24.png"

const meetTeam = () => {
  return (
    <div className="teambox">
      <img src={teamstruc} alt="Team Structure" className="team" />
    </div>
  )
}

export default meetTeam