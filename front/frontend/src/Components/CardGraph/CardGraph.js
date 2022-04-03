import {React,useState} from 'react'

const CardGraph = ({title,href,currentList}) => {
    const [Lists, setLists] = useState(currentList)
    const ShowPic = ()=>{
        // show pic
    }

    const handleCheck =(title) =>{
        currentList = currentList.filter(function(obj){
            return obj.title !== title;
        })
    }


  return (
    <div>
        <div className='card-graph'>
            <div className='app__card-graph'>
                <h3>{title}</h3>
                <img src={href} alt={title} onClick={()=>{ShowPic()}}/>
                <div className="checkbox-Container">
                    <input className='showInput' type="checkbox" id="show" name="Show" onChange={()=>{
                        handleCheck(title)
                        console.log(currentList)
                        setLists(currentList)
                        /* Here work with lists checkbox */
                        console.log(Lists)
                    }} checked={Lists.some(item => item.title == title )}/>
                    <label htmlFor="Show">Show Graph</label>
                </div>             
            </div>
        </div>
    </div>
  )
}

export default CardGraph