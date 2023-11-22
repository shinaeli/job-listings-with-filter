import React from 'react'
import Profile from './Profile'

const ProfileList = ({ data, handleFilter }) => {
  return (
    <div>
        {data.map(item => {
            return <Profile key={item.id} details={item} handleFilter={handleFilter} />
        })}
    </div>
  )
}

export default ProfileList