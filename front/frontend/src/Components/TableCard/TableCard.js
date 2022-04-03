import React from 'react'
import CardGraph from '../CardGraph/CardGraph'

const TableCard = ({listsGraph,numberOfGraph}) => {
    
  return (
    <div className='items-Graph'>
        {listsGraph.map((object,index)=>{
            console.log(object)   
        return <CardGraph title={object.title} href={object.src} key={index}></CardGraph>
        })}
    </div>
  )
}

export default TableCard