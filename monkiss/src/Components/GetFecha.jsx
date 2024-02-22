const GetFecha = (fecha) => {
    // Parsea la fecha en formato JSON
    const fechaNacimiento = new Date(fecha);

    // Ajusta la fecha para obtener la representación en la zona horaria local
    const fechaLocal = new Date(fechaNacimiento.getTime() + fechaNacimiento.getTimezoneOffset() * 60000);

    // Extrae el día, mes y año
    const dia = fechaLocal.getDate();
    const mes = fechaLocal.getMonth() + 1;
    const anio = fechaLocal.getFullYear();

    // Devuelve la fecha en el formato deseado
    return `${anio}-${mes < 10 ? '0' : ''}${mes}-${dia < 10 ? '0' : ''}${dia}`;
};

export default GetFecha;
