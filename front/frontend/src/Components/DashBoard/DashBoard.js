import {React,useState, useEffect} from 'react'
import NavBar from '../NavBar/NavBar'
import Card from '../Card/Card' 
import TableCard from '../TableCard/TableCard'
const DashBoard = () => {
  const listsGraph = [{
    title:"Graph1",
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&usqp=CAU"
  },{
    title:"Graph2",
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&usqp=CAU"
  },{
  title:"Graph3",
  src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&usqp=CAU"
  }]

const [AdminLists,setAdminLists] = useState([listsGraph[0],listsGraph[1]]);
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
       currentList={listByRole(localStorage.getItem("Role"))} setAdminLists={setAdminLists}/>}

    </div>
  )
}

export default DashBoard