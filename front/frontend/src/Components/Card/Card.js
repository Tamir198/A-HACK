import React from 'react'

const Card = ({title,src}) => {
  return (
    <div className='card-item'>
        <div className='app__card-content'>
            <h3>{title}</h3>
            <iframe className='iframe-card' src={src}></iframe>

        </div>
    </div>
  )
}

export default Card