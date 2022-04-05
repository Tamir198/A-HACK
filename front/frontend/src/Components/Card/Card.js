import React from 'react'

const Card = ({title,src}) => {
  return (
    <div className='card-item'>
        <div className='app__card-content'>
            <h3>{title}</h3>
            <img className='iframe-card' src={src}></img>

        </div>
    </div>
  )
}

export default Card