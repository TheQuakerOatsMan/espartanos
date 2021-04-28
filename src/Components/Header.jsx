import React from 'react';
import logo from '../img/logo.PNG';
import '../Style/styles.css';
import '../Style/fontello.css';


const Header = () => {
    return ( 
    <div className = "navbar" >
        <a href = "index.html" > < img src = { logo }alt = "logo"/></a> 
        <input type = "checkbox" id = "menu-bar" />
        <label for = "menu-bar" class = "icon-menu" > </label> 
        <div class = "menu-nav" >
        <a href = "#" > Inicio </a> 
        <a href = "#" > Horarios </a> 
        <a href = "#" > Promociones </a> 
        <a href = "#" > Acerca de </a> 
        <a> Registrarse </a> 
        <a> Iniciar Sesión </a> 
        </div> 
        </div>
    )
}

export default Header;