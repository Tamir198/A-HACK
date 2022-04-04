import React from 'react'
import CardGraph from '../CardGraph/CardGraph'

const TableCard = ({listsGraph,numberOfGraph,currentList,setListName,setAdminLists,setShowGraph}) => {
  const CloseTabGraph = ()=>{
    //close ListGraph X 
    setShowGraph(false)
    }
  return (
    <div className='items-Graph'>
      <button className='x-btn' onClick={()=>{CloseTabGraph()}}>X</button>
        {listsGraph.map((object,index)=>{
            console.log(object)   
        return <CardGraph title={object.title} href={object.src} currentList={currentList} setListName={setListName} key={index} setAdminLists={setAdminLists} ></CardGraph>
        })}
    </div>
  )
}

export default TableCard