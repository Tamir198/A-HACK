import React from 'react'
import CardGraph from '../CardGraph/CardGraph'

const TableCard = ({listsGraph,numberOfGraph,currentList,setListName,setAdminLists}) => {
  return (
    <div className='items-Graph'>
        {listsGraph.map((object,index)=>{
            console.log(object)   
        return <CardGraph title={object.title} href={object.src} currentList={currentList} setListName={setListName} key={index} setAdminLists={setAdminLists} ></CardGraph>
        })}
    </div>
  )
}

export default TableCard