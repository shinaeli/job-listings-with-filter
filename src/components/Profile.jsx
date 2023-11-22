import React from 'react'
import Logo from './Logo'
import MainDetails from './MainDetails'
import Others from './Others'

const Profile = ({ details, handleFilter }) => {
  const {
    company, 
    logo, 
    isNew, 
    featured, 
    position, 
    role, 
    level, 
    postedAt, 
    contract, 
    location, 
    languages, 
    tools} = details;

  return (
    // If 'featured' is true then add a left-border to the profile.
    <div className={featured ? "featured-side-border profile" : "profile"}>
      <div className="sub-detail-1">
        <Logo logo={logo} />
          <MainDetails 
          company={company} 
          isNew={isNew}
          featured={featured} 
          position={position} 
          postedAt={postedAt} 
          contract={contract}
          location={location} />
      </div>
      <Others role={role} level={level} languages={languages} tools={tools} handleFilter={handleFilter} />
    </div>
  )
}

export default Profile