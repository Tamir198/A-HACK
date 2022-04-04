import {React,useState, useEffect} from 'react'
import NavBar from '../NavBar/NavBar'
import Card from '../Card/Card' 
import TableCard from '../TableCard/TableCard'

import test from "../../assets/test.jpeg"
import test2 from "../../assets/test2.jpeg"
import test3 from "../../assets/test3.jpeg"
import test4 from "../../assets/test4.jpeg"
import test5 from "../../assets/test5.jpeg"


const DashBoard = () => {
  const listsGraph = [{
    title:"Outbound network",
    src: test
  },
  {
    title:"Inbound network",
    src: test2
  },
  {
    title:"Cpu consumption",
    src: test3
  },
  {
    title:"Sales in last month",
    src: test4
  },
  {
    title:"New users last year",
    src: test5
  },

]

const [AdminLists,setAdminLists] = useState(listsGraph);
const [DevLists,setDevLists] = useState([listsGraph[0],listsGraph[1],listsGraph[2]]);
const [DevopsLists,setDevopsLists] = useState([listsGraph[0],listsGraph[1]])
const [AnylastLists,setAnylastLists] = useState([listsGraph[0],listsGraph[1]])

  const [ShowGraph, setShowGraph] = useState(false);
  
  const listsNames =  {
    "Admin":AdminLists,
    "Dev":DevLists,
    "Devops":DevopsLists,
    "AnylastDev":AnylastLists
  }


  useEffect(() => {
    console.log("Admin list changes")
    console.dir(AdminLists)
  }, [AdminLists])
  
 
  const listByRole = (role) => {
    return listsNames[role];
  }
  
  return (
    <div>
      <h1 className='centered'>Developers Interface</h1>
      {localStorage.getItem("Role") == "Admin" && 
      <>
        <NavBar/>
        <button className='editBtn' onClick={()=>{setShowGraph(true)}}>Edit Shown Graph</button>

      </>
    }

      <div className='card-section'>
        {console.log(listByRole(localStorage.getItem("Role")))}
        {listByRole(localStorage.getItem("Role")).map((object,index)=>(
          <Card key={index} title={object.title} src={object.src}></Card>
        ))} 
       

      </div>
      {ShowGraph && <TableCard listsGraph={listsGraph} numberOfGraph={listsGraph.length}
       currentList={listByRole(localStorage.getItem("Role"))} setAdminLists={setAdminLists} setShowGraph={setShowGraph}/>}

    </div>
  )
}

export default DashBoard