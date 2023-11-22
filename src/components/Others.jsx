import React from 'react'

const Others = ({ role, level, languages, tools, handleFilter }) => {

  const handleClick = item => {
    handleFilter(item);
  };
  
  return (
    <div className="sub-detail-2">
      {/* When clicked, grab the content element by using the event-object 'e' and the content as an argument to 'handleClick' function */}
      <p className="role" onClick={e => handleClick(e.target.innerHTML)}>{role}</p>
      <p className="level" onClick={e => handleClick(e.target.innerHTML)}>{level}</p>
      {languages.map((language, index) => <p key={index} className="languages" 
      onClick={e => handleClick(e.target.innerHTML)}>{language}</p>)}
      {tools.map((tool, index) => <p key={index} className="tools" 
      onClick={e => handleClick(e.target.innerHTML)}>{tool}</p>)}
    </div>
  )
}

export default Others