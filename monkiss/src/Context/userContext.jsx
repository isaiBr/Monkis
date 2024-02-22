import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';

const userContext = createContext();
function UserProvider({children}) {

    const {item:user, saveItem:saveUser} = useLocalStorage('USER_V1', null);
    const [actividades, setActividades] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    useEffect(()=>{
      setActividades([
        {
          id:1,
          titulo:'PRIMERO',
          descripcion:'Este es una prueba de ejemplo',
          update:'04-01-2024'
        },
        {
          id:2,
          titulo:'PRIMERO',
          descripcion:'Otra Este es una prueba de ejemplo',
          update:'04-01-2024'
        },
        {
          id:3,
          titulo:'PRIMERO',
          descripcion:'Este es una prueba de ejemplo',
          update:'04-01-2024'
        },
        {
          id:4,
          titulo:'PRIMERO',
          descripcion:'Este es una prueba de ejemplo',
          update:'04-01-2024'
        },
        {
          id:5,
          titulo:'PRIMERO',
          descripcion:'Este es una prueba de ejemplo',
          update:'04-01-2024'
        },
        {
          id:6,
          titulo:'PRIMERO',
          descripcion:'Este es una prueba de ejemplo',
          update:'04-01-2024'
        },
        {
          id:7,
          titulo:'PRIMERO',
          descripcion:'Este es una prueba de ejemplo',
          update:'04-01-2024'
        },
        {
          id:8,
          titulo:'PRIMERO',
          descripcion:'Este es una prueba de ejemplo',
          update:'04-01-2024'
        },
      ])
    },[])

    const searchedActivities = actividades.filter(
      (actividad) =>{
        return actividad.descripcion.toLowerCase().includes(searchValue.toLowerCase());
      }
    )

    const [short, setShort] = useState(false);
    const changeSize = () =>{
        console.log('hola');
        setShort(!short);
    }

    const navigate = useNavigate();
    //Funciones para inicio y cierre de sesion
    const login = () =>{
        saveUser({
          id:1,
          name: 'Majecita',
          roles:['user']
        })
        navigate('/user/home');
    }
    const logout = () =>{
        saveUser(null)
        navigate('/');
    }

  return (
    <userContext.Provider
        value={{
            user,
            saveUser,
            login,
            logout,
            actividades,
            searchValue,
            setSearchValue,
            searchedActivities,
            short, setShort,
            changeSize
        }}
    >
        {children}
    </userContext.Provider>
  )
}

export {userContext, UserProvider}