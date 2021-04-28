//importacion de librerias
import react from 'react'
import logo from '../img/sparta.png'
let Register = () => {
return(
    <div className="cajaB">
            <img src={logo} className="img-fluid"/>
            <div>
                <h2>Nuevo cliente</h2>
            </div>
            <form action="">
            <div>
                <label htmlFor="us">Nombre:</label>
                <input type="text" className="formC" name="us" id="us"/>
            </div>
            <div>
                <label htmlFor="us">Usuario:</label>
                <input type="text" className="formC" name="us" id="us"/>
            </div>
            <div>
                <label htmlFor="us">Contraseña:</label>
                <input type="text" className="formC" name="us" id="us"/>
            </div>
            <div>
                <label htmlFor="pass">Correo:</label>
                <input type="text" className="formC" name="pass" id="pass"/>
            </div>
            <button type="submit" className="btn btn-primary">
                Registrar
            </button>
            <button type="submit" className="btn btn-danger">
                Cancelar
            </button>
            </form>
    </div>
)}
//exportación de la información
export default Register 