import React from 'react'

const Card = ({title}) => {
  return (
    <div className='card-item'>
        <div className='app__card-content'>
            <h3>{title}</h3>
            <iframe className='iframe-card' src="https://www.youtube.com/embed/owsfdh4gxyc"></iframe>

        </div>
    </div>
  )
}

export default Card