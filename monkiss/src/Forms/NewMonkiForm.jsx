import React, { useContext, useEffect, useRef, useState } from 'react'
import '../assets/Styles/Forms/NewMonkiForm.css'
import MonkiLogo from '../Images/monoForm.png'
import MonkiDefault from '../Images/monoDefault.png'
import LogoEliminar from '../Images/boton-eliminar.png'
import { monkiContext } from '../Context/monkiContext'
import GetFecha from '../Components/GetFecha'
import { axiosGetNacionalidades, axiosGetRelaciones, axiosPostMonkiPerUser, axiosUpdateMonki } from '../Api/Monki'

function NewMonkiForm({setOpenModal, type, setOpenAlert, infoMonki=null, setOpcion}) {

  //traigo las variables para poder almacenar la informacion
  const {
    nombre, setNombre,
    apellidoPaterno, setApellidoPaterno,
    apellidoMaterno, setApellidoMaterno,
    pais, setPais,
    celular, setCelular,
    fechaNacimiento, setFechaNacimiento,
    relacion, setRelacion,
    foto, setFoto,
    nuevoMonki, setNuevoMonki
  } = useContext(monkiContext)

  const [modalAbierto, setModalAbierto] = useState(true);


  const onSubmit = (event) =>{
    event.preventDefault();

    if(type=='Edit' && infoMonki){
      var monki = {
        id:infoMonki.id,
        idPersona:infoMonki.idPersona?infoMonki.idPersona:null,
        idRelacion:relacion?relacion:1,
        idPrincipal:1,
        persona:{
          id:infoMonki.idPersona?infoMonki.idPersona:null,
          nombres:nombre,
          apellidoPaterno:apellidoPaterno,
          apellidoMaterno:apellidoMaterno,
          pais:pais,
          celular:celular,
          fechaNacimiento:fechaNacimiento,
          foto:foto,
          idNacionalidad:pais?pais:1
        }
      }
      //llamar al servicio que actualiza
      axiosUpdateMonki(monki)
      .then((response)=>{
        setNuevoMonki(!nuevoMonki);
        setOpcion(2);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
    else{
      var monki = {
        idRelacion:relacion?relacion:1,
        idPrincipal:1,
        persona:{
          nombres:nombre,
          apellidoPaterno:apellidoPaterno,
          apellidoMaterno:apellidoMaterno,
          celular:celular,
          fechaNacimiento:fechaNacimiento,
          foto:foto,
          idNacionalidad:pais?pais:1
        }
      }
      //llamar al servicio que lo sube a la base de datos
      axiosPostMonkiPerUser(monki)
      .then((response)=>{
        setNuevoMonki(!nuevoMonki);
        setOpcion(1);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
    
    setOpenAlert(true);
    closeModal();
  }

  

  const closeModal = () =>{
    setNombre(null);
    setApellidoPaterno(null);
    setApellidoMaterno(null);
    setPais(null);
    setCelular(null);
    setFechaNacimiento(new Date().toISOString().split('T')[0]);
    setRelacion(null);

    setModalAbierto(false);

    setOpenModal(false);
    //Se cierra el modal
    // setTimeout(function() {
    // }, 490);
    
  }

  useEffect(()=>{
    if(type=='Edit' && infoMonki){
      const monki = infoMonki?infoMonki.persona?infoMonki.persona:null:null;
      const paisMonki = monki?monki.nacionalidad:null;
      const relacionMonki = infoMonki? infoMonki.relacion?infoMonki.relacion:null:null;
      if(monki){
        setNombre(monki.nombres);
        setApellidoPaterno(monki.apellidoPaterno);
        setApellidoMaterno(monki.apellidoMaterno);
        setCelular(monki.celular);
        setFechaNacimiento(GetFecha(monki.fechaNacimiento));
      }
      var paisId = paisMonki && paisMonki.id?paisMonki.id:1;
      setPais(paisId);
      var relacionId = relacionMonki && relacionMonki.id?relacionMonki.id:1
      setRelacion(relacionId);
    }
    else{
      setNombre(null);
      setApellidoPaterno(null);
      setApellidoMaterno(null);
      //var paisId = nacionalidades && nacionalidades[0].id?nacionalidades[0].id:1
      setPais(1);
      //var relacionId = relaciones && nacionalidades[0].id?relaciones[0].id:1
      setRelacion(1);
      setCelular(null);
      setFechaNacimiento(new Date().toISOString().split('T')[0]);
      setFoto('');
    }
  },[])

  const inputRef = useRef(null);

  const handleImageClick = () => {
    inputRef.current.click();
  }

  const handleImageChange = async (event) =>{
    const file = event.target.files[0];
    setFoto(file);
  }


  const handleDateChange = (event) => {
    const dateValue = event.target.value;
    setFechaNacimiento(dateValue);
  };

  const [nacionalidades, setNacionalidades] = useState([]);
  const [relaciones, setRelaciones] = useState([]);

  useEffect(()=>{
    //Se llena la data  de los combos

    //Relaciones
    axiosGetRelaciones()
    .then((response)=>{
      setRelaciones(response.data);
    })
    .catch((error)=>{
      console.error(error);
    })

    //Nacionalidades
    axiosGetNacionalidades()
    .then((response)=>{
      setNacionalidades(response.data);
    })
    .catch((error)=>{
      console.error(error);
    }) 
  },[])
  

  const handleSelectChangePais = (event) => {
    event.persist();
    const selectedValue = event.target.value;
    setPais(selectedValue);
  };

  const handleSelectChangeRelacion = (event) => {
    event.persist();
    const selectedValue = event.target.value;
    setRelacion(selectedValue);
  };

  return (
    <div className={`mainbox-monkiForm ${modalAbierto?'':'animacion-cerrar'}`}>
        <form className='newMonkiForm' onSubmit={onSubmit}>
          <button className='btn-cerrar' type='button' onClick={closeModal}>
            <img className='logo-cerrar'
              src={LogoEliminar} alt='btn-cerrar'/>
          </button>
            <img className='monki-logo' 
              src={MonkiLogo} alt='monkis-durmiendo'/>
            <p className='nombre-monkiFormulario'>{type=='New'? 'NUEVO MONKI' : 'EDITAR MONKI'}</p>
            <p className='descripcion-monkiFormulario'>Ingresar los detalles del nuevo miembro de la monkifamilia</p>
            <div className='bloque-datos'>
              <div className='bloque-imagen' > 
                <div className='cuadro-foto'onClick={handleImageClick}>
                  {
                    foto?
                    <img className='foto-usuario' src={URL.createObjectURL(foto)}
                                      alt='user pic'/>
                    :
                    <img className='foto-default' src={MonkiDefault}
                                      alt='foto default'/>
                  }
                </div>
                <button className='btn-subirFoto' type='button' onClick={handleImageClick}>
                  Subir Foto
                  <input className='add-image' type='file' ref={inputRef}
                    onChange={handleImageChange} style={{display:'none'}}/>
                </button>
              </div>
              <div className='bloque-informacion'>
                <div className='nuevaFila'>
                  <div className='label-textarea'>
                    <label className='label-monkiFormulario'>Nombres</label>
                    <textarea className='textarea-monkiFormulario' placeholder='Isai'
                    defaultValue={nombre?nombre:null} 
                    onChange={(event) => {setNombre(event.target.value)}}/>
                  </div>
                  <div className='label-textarea'>
                    <label className='label-monkiFormulario'>Apellido Paterno</label>
                    <textarea className='textarea-monkiFormulario'placeholder='Bravo'
                    defaultValue={apellidoPaterno?apellidoPaterno:null} 
                    onChange={(event) => {setApellidoPaterno(event.target.value)}}/>
                  </div>
                </div>
                <div className='nuevaFila'>
                  <div className='label-textarea'>
                    <label className='label-monkiFormulario'>Apellido Materno</label>
                    <textarea className='textarea-monkiFormulario' placeholder='Sierra'
                    defaultValue={apellidoMaterno?apellidoMaterno:null} 
                    onChange={(event) => {setApellidoMaterno(event.target.value)}}/>
                  </div>
                  <div className='label-textarea'>
                    <label className='label-monkiFormulario'>Pais</label>
                    <select
                      className='input-monkiFormulario'
                      id="comboBoxPais"
                      value={pais}
                      onChange={handleSelectChangePais}
                    >
                      {nacionalidades.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.descripcion}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className='nuevaFila'>
                  <div className='label-textarea'>
                    <label className='label-monkiFormulario'>Celular</label>
                    <textarea className='textarea-monkiFormulario' placeholder='934869864'
                    defaultValue={celular?celular:null}
                    onChange={(event) => {setCelular(event.target.value)}}/>
                  </div>
                  <div className='label-textarea'>
                    <label className='label-monkiFormulario'>Fecha de nacimiento</label>
                    <input
                      className='input-monkiFormulario'
                      type="date"
                      id="calendarInput"
                      value={fechaNacimiento}
                      onChange={handleDateChange}
                    />
                    {/* <textarea className='textarea-monkiFormulario'placeholder='14/03/2002'
                    defaultValue={fechaNacimiento?GetFecha(fechaNacimiento):null} 
                    onChange={(event) => {setFechaNacimiento(event.target.value)}}/> */}
                  </div>
                </div>
                <div className='nuevaFila'>
                  <div className='label-textarea'>
                    <label className='label-monkiFormulario'>Relacion</label>
                    <select
                      className='input-monkiFormulario'
                      id="comboBoxRelacion"
                      value={relacion}
                      onChange={handleSelectChangeRelacion}
                    >
                      {relaciones.map((option) => (
                        <option key={option.id} value={option.id}>
                          {option.descripcion}
                        </option>
                      ))}
                    </select>
                    {/* <textarea className='textarea-monkiFormulario' placeholder='Monkinovio'
                    defaultValue={relacion?relacion:null} 
                    onChange={(event) => {setRelacion(event.target.value)}}/> */}
                  </div>
                </div>
                <div className='opciones'>
                  <button className='add-monki' type='submit'>{type=='New'?'Crear Monki':'Actualizar'}</button>
                  <button className='cancel-monki' type='button' onClick={closeModal}>Cancelar</button>
                </div>
              </div>
            </div>
        </form>
    </div>
  )
}

export {NewMonkiForm}