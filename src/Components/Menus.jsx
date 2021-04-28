//importación de librerias
import React from 'react'
import {Link} from "react-router-dom";
//despliegue de información
const Menus = () => {
    return(
       <div>
           <ul>
               <li><Link to={'./Pagindex'}>Inicio</Link></li>
               <li><Link to={'./Registros'}>Adminstración</Link></li>
               <li><Link to={'./Login'}>Login</Link></li>
               <li><Link to={'./Register'}>Registro</Link></li>
           </ul>
       </div> 
    )
}
//exportación de la información
export default Menus