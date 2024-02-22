import { createContext, useState } from "react";

const monkiContext = createContext();
function MonkiProvider({children}){
    const [nombre, setNombre] = useState("");
    const [apellidoPaterno, setApellidoPaterno] = useState("");
    const [apellidoMaterno, setApellidoMaterno] = useState("");
    const [pais, setPais] = useState(0);
    const [celular, setCelular] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState(new Date().toISOString().split('T')[0]);
    const [relacion, setRelacion] = useState(0);
    const [foto, setFoto] = useState(null);
    const [nuevoMonki, setNuevoMonki] = useState(false)

    

    //Lista de monkis
    const [monkis, setMonkis] = useState([]);
    

    //variable para filtrar por nombre
    const [textMonkiSearch, setTextMonkiSearch] = useState('');
    
    //Lista filtrada con coincidencias en la cadena de busqueda 
    //Pendiente de mejorar para que permita buscar por nombre o apellido
    const searchedMonkis = monkis.filter(
        (monki) => {
            //Mantenemos busqueda solo por nombre por ahora
            // var cadena = monki.nombre + (monki.apellidoPaterno?' '+monki.apellidoPaterno:'') + (monki.apellidoMaterno?' '+monki.apellidoMaterno:'')
            // console.log(cadena);
            return monki.persona.nombres.toLowerCase().includes(textMonkiSearch.toLowerCase());
        }
    )

    return(
        <monkiContext.Provider 
        value={{
            nombre, setNombre,
            apellidoPaterno, setApellidoPaterno,
            apellidoMaterno, setApellidoMaterno,
            pais, setPais,
            celular, setCelular,
            fechaNacimiento, setFechaNacimiento,
            relacion, setRelacion,
            monkis, setMonkis,
            foto, setFoto,
            textMonkiSearch, setTextMonkiSearch,
            nuevoMonki, setNuevoMonki,
            searchedMonkis,
        }}>
            {children}
        </monkiContext.Provider>
    )
}

export {monkiContext, MonkiProvider}