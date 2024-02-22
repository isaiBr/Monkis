import React, { useContext, useState } from 'react'
import { Navbar } from '../Components/Navbar'
import {ActivitySearch} from '../Components/Planner/ActivitySearch'
import { ActivityList } from '../Components/Planner/ActivityList'
import { Activity } from '../Components/Planner/Activity'
import { ButtonAdd } from '../Components/Planner/ButtonAdd'
import { Modal } from '../Modals/Modal'
import '../assets/Styles/Pages/Planner.css'
import { NewActivityForm } from '../Forms/NewActivityForm'
import { userContext } from '../Context/userContext'

function Planner() {
  const [openModal, setOpenModal] = useState(false);
  const {
    searchedActivities
  }= useContext(userContext);

  return (
    <div className='planner-main'>
        <ActivitySearch/>
        <ActivityList>
            {searchedActivities.map((actividad) => (
                <Activity key={actividad.id} actividad={actividad}/>
            ))}
        </ActivityList>
        <ButtonAdd setOpenModal={setOpenModal}/>
        {openModal && (
        <Modal>
          <NewActivityForm setOpenModal={setOpenModal}/>
        </Modal>
        )}
    </div>
  )
}

export {Planner}