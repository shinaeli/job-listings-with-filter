import React from 'react'

const MainDetails = ({ company, isNew, featured, position, postedAt, contract, location }) => {
  return (
    <div className="main-details">
      <div className="sub-span-1">
        <span className="company">{company}</span>
        {isNew && <span className="isNew">NEW!</span>}
        {featured && <span className="featured">FEATURED</span>}
      </div>
      <h2 className="position">{position}</h2>
      <div className="sub-span-2">
        <span className="postedAt">{postedAt}</span>
        <span className="contract">{contract}</span>
        <span className="location">{location}</span>
      </div>
    </div>
  )
}

export default MainDetails