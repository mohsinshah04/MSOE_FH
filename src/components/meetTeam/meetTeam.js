import React from 'react'
import './meetTeam.css'
import teamstruc from "../../assets/LeadershipFlowchart.png"

const meetTeam = () => {
  return (
    <div className="teambox">
      <img src={teamstruc} alt="Team Structure" className="team" />
    </div>
  )
}

export default meetTeam