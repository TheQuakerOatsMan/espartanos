//importacion de librerias
import react from 'react'
import Header from './Header'
import Slider from './Slider'
import Componentes from './Componentes';
import Footer from './Footer';

const Pagindex = () => {
return(
    <div className="App">
        <Header/>
        <Slider/>
        <h1>Componentes</h1>
        <Componentes/>
        <Footer/>
    </div>
)}
//exportación de la información
export default Pagindex 
