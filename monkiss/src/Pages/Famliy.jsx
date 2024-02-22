import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../Components/Navbar'
import { NewMonkiForm } from '../Forms/NewMonkiForm'
import { MonkiList } from '../Components/Family/MonkiList'
import { Monki } from '../Components/Family/Monki'
import '../assets/Styles/Pages/Family.css'
import { Modal } from '../Modals/Modal'
import { MonkiSearch } from '../Components/Family/MonkiSearch'
import { monkiContext } from '../Context/monkiContext'
import {axiosGetMonkisPerUser} from  '../Api/Monki.js'
import { Empty } from '../Components/Family/Empty'
import { Loading } from '../Components/Family/Loading.jsx'
import { Alert } from '../Modals/Alert.jsx'
import { Change } from '../Alerts/Change.jsx'

function Famliy() {
  const [openModalNew, setOpenModalNew] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [open, setOpen] = useState(true);
  const [opcion, setOpcion] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const {monkis, setMonkis,
  textMonkiSearch, setTextMonkiSearch,
  nuevoMonki, setNuevoMonki,
  searchedMonkis
  } = useContext(monkiContext);

  useEffect(()=>{
    //Llamado al API que recupera los monkis
    setIsLoading(true);
    setError(false);
    axiosGetMonkisPerUser(1)
    .then((response) => {
      setMonkis(response.data);
      setIsLoading(false);
    })
    .catch((error)=>{
      setError(true);
      console.error(error);
    })
  },[nuevoMonki])

  useEffect(()=>{
    if(openAlert){
      setTimeout(function(){
        setOpenAlert(false);
      },3000)
    }
  },[openAlert])

  return (
    
    <div className='family-main'>
      {!isLoading?
        <>
        <MonkiSearch setOpenModalNew={setOpenModalNew} textMonkiSearch={textMonkiSearch}
        setTextMonkiSearch={setTextMonkiSearch}/>
        <MonkiList>
          {searchedMonkis.length>0?
          searchedMonkis.map((monki)=>(
            <Monki key={monki.id} monki={monki} setOpenAlert={setOpenAlert} 
            open={open} setOpen={setOpen} setOpcion={setOpcion}/>
            ))
          :
          <Empty/>
          }
        </MonkiList>
        {openModalNew&&
          <Modal>
            <NewMonkiForm setOpenModal={setOpenModalNew} type='New'
              setOpenAlert={setOpenAlert} setOpcion={setOpcion}/>
          </Modal>
        }
        {
          openAlert && 
          <Alert>
            <Change setOpenAlert={setOpenAlert} opcion={opcion}/>
          </Alert>
        }
        </>
        :
        <Loading/>
      }
    </div>
  )
}

export {Famliy}