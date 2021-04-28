//importacion de librerias
import react from 'react'
import logo from '../img/sparta.png'
let Login = () => {
return(
    <div className="cajaB">
            <img src={logo} className="img-fluid"/>
            <div>
                <h2>Inicio de Sesión</h2>
            </div>
            <form action="">
            <div>
                <label htmlFor="us">Usuario:</label>
                <input type="text" className="formC" name="us" id="us"/>
            </div>
            <div>
                <label htmlFor="pass">Contraseña:</label>
                <input type="text" className="formC" name="pass" id="pass"/>
            </div>
            <button type="submit" className="btn btn-primary">
                Iniciar Sesión
            </button>
            <div class="email">
                <span className="text-danger btn-link">Olvido su contraseña</span>
            </div>
            </form>
    </div>
)}
//exportación de la información
export default Login 