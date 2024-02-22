import React, { useState } from 'react'
import '../../assets/Styles/Components/Family/Monki.css'
import FotoMonki from '../../Images/monoDefault.png'
import { NewMonkiForm } from '../../Forms/NewMonkiForm';
import { DeleteMonkiForm} from '../../Forms/DeleteMonkiForm';
import { Modal } from '../../Modals/Modal';
import GetFecha from '../GetFecha';

function Monki({monki, setOpenAlert, setOpcion}) {

    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [openModalDelete, setOpenModalDelete] = useState(false);


    const monkiPersona = monki?monki.persona?monki.persona:null:null;
    const monkiRelacion = monki? monki.relacion? monki.relacion:null:null;

  return (
    <div className='mainbox-monki'>
        <div className='seccion-imagen'>
            <img className='fotoUsuario' 
                src={monkiPersona?monkiPersona.foto?monkiPersona.foto:FotoMonki:FotoMonki} alt='user-foto'/>
        </div>
        <div className='informacion'>
            <div className='opciones'>
                <button className='edit-monki' onClick={()=>{setOpenModalEdit(true)}}>
                 <i className="bi bi-pencil-square"></i>
                </button>
                <button className='delete-monki' onClick={()=>{setOpenModalDelete(true)}}>
                 <i className="bi bi-trash-fill"></i>
                </button>
            </div>
           <p className='informacion-campo-nombre'>{monkiPersona?monkiPersona.nombres?monkiPersona.nombres:'NN':'NN'}</p>
            <div className='datos-usuario'>
                <div className='bloque-label-informacion'>
                    <label className='label-campo'>Relacion:</label>
                    <p className='informacion-campo'>{monkiRelacion?monkiRelacion.descripcion?monkiRelacion.descripcion:"NN":'NN'}</p>
                </div>
                <div className='bloque-label-informacion'>
                    <label className='label-campo'>Hb:</label>
                    <p className='informacion-campo'>{monkiPersona?monkiPersona.fechaNacimiento?GetFecha(monkiPersona.fechaNacimiento):'NN':'NN'}</p>
                </div>
                {monkiPersona?monkiPersona.celular?
                    <div className='bloque-label-informacion'>
                        <label className='label-campo'>Celular:</label>
                        <p className='informacion-campo'>{monkiPersona.celular}</p>
                    </div>:
                    <></>:<></>
                    }
                
                <div className='bloque-label-informacion'>
                    <label className='label-campo'>Pais:</label>
                    <p className='informacion-campo'>{monkiPersona?monkiPersona.nacionalidad?monkiPersona.nacionalidad.descripcion?monkiPersona.nacionalidad.descripcion:'NN':'NN':'NN'}</p>
                </div>
            </div>
        </div>
        {openModalEdit&&
            <Modal>
            <NewMonkiForm setOpenModal={setOpenModalEdit} type='Edit' infoMonki={monki} 
            setOpenAlert={setOpenAlert} setOpcion={setOpcion}/>
            </Modal>
        }
        {openModalDelete&&
            <Modal>
            <DeleteMonkiForm setOpenModalDelete={setOpenModalDelete} 
            monkiId={monki.id}setOpenAlert={setOpenAlert} setOpcion={setOpcion}/>
            </Modal>
        }
    </div>
    
  )
}

export {Monki}