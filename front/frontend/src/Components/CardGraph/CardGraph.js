import React from 'react'

const CardGraph = ({title,href}) => {
    const ShowPic = ()=>{
        // show pic
        
    }
  return (
    <div>
        
        <div className='card-graph'>
            <div className='app__card-graph'>
                <h3>{title}</h3>
                <img src={href} alt={title} onClick={()=>{ShowPic()}}/>
                <div className="checkbox-Container">
                    <input className='showInput' type="checkbox" id="show" name="Show" />
                    <label for="Show">Show Graph</label>
                </div>
                    
             
            </div>
        </div>
    </div>
  )
}

export default CardGraph