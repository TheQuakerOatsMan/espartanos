//importacion de librerias
import {useState} from 'react'
import logo from '../img/sparta.png'
const op1 = ["Todas", "Vencidas", "Proximas a vencer"]
const op2 = ["Historial", "Todos los pagos", "Vencidos","Proximas a vencer"]
const op3 = ["Todos","Activos","Inactivos"]
const opg = ["Enviar correo de pago","Nuevo pago","Nuevo cliente"]

const RenderOp1 = nop =>{
  const val=nop
  const Op1 = op =>(
    <span key={op} className="list-group-item list-group-item-action 
    border-0 pl-5">{op}
        <span className="lista"></span></span>

  )
  return val.map(Op1)
}
const RenderOpG = () =>{
  const OpG = gen =>(
      <button className="list-group-item list-group-item-action border-0 d-flex 
      justify-content-between align-items-center boton">
          <div>
            <span className=""></span>
            <span class="ml-2" key={gen}>{gen}</span>
          </div>
          <span class="small"></span>
      </button>
  )
  return opg.map(OpG)
}

const Registros = () => {
  const [show,setShow] = useState(false)
  const [showP,setShowP] = useState(false)
  const [showL,setShowL] = useState(false)
  const [showPa,setShowPa] = useState(false)
  const [showIn,setShowIn] = useState(false)
return(
    <div className="container-fluid">
      <div className="row">
      <div className="col-md-3 col-lg-2 px-0 panelOp">
        <img src={logo} alt="" className="img-fluid"/>
      <h3>Tablero</h3>
      <button class="boton list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center" onClick={()=>setShow(!show)}>
          <div>
            <span class=""></span>
            <span class="ml-2">Clientes</span>
          </div>
          <span class="small"></span>
      </button>
      <div class="collapse" style={show ?{display:"block"}:{display:'none'}}>
          <div class="list-group">
            {RenderOp1(op1)}
          </div>
      </div>

      <button class="boton list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center"
       onClick={()=>setShowP(!showP)}>
          <div>
            <span class=""></span>
            <span class="ml-2">Pagos</span>
          </div>
          <span class="small"></span>
      </button>
      <div class="collapse" style={showP ?{display:"block"}:{display:'none'}}>
          <div className="list-group">
            {RenderOp1(op2)}
          </div>
      </div>
      <button class="boton list-group-item list-group-item-action border-0 d-flex justify-content-between align-items-center" 
      onClick={()=>setShowIn(!showIn)}>
          <div>
            <span class=""></span>
            <span class="ml-2">Instructores</span>
          </div>
          <span class="small"></span>
      </button>
      <div class="collapse" style={showIn ?{display:"block"}:{display:'none'}}>
          <div class="list-group">
            {RenderOp1(op3)}
          </div>
      </div>
      <h3>Opciones</h3>
      {RenderOpG()}
      </div>
      <div className="col-md-9 col-lg-10 ml-md-auto px-0 PM">
          <nav class="w-100 d-flex px-4 py-2 mb-4 shadow-sm bg-danger">
              <button class="btn py-0 d-lg-none" id="open-sidebar">
                  <span class="text-primary h3">Comando</span>
              </button>
              <div class="dropdown ml-auto">
                  <button class="btn py-0 d-flex align-items-center" id="logout-dropdown"
                      onClick={()=>setShowL(!showL)}>
                      <span class="text-light">Edgar Blas</span>
                      <span class="ml-1 mb-2 small flec">&rarr;</span>
                  </button>
              <div class="dropdown-menu dropdown-menu-right border-0 shadow-sm" 
              aria-labelledby="logout-dropdown" style={showL ?{display:"block"}:{display:'none'}}>
                    <span class="dropdown-item">Cerrar Sesión</span>
                    <span class="dropdown-item">Configuración</span>
              </div>
            </div>
          </nav>
          <div className="container">
            <div className="row">
            <div className="card p-4">
              <button className="Card-Op flec" onClick={()=>setShowPa(!showPa)}>&rarr;</button>
              <p className="card-title">Nombre del usuario</p>
              <hr/>
              <span className="card-text">No. Cliente:</span>
              <span className="card-text">Pago prox:</span>
              <span className="card-text">Tipo plan:</span>
              <button className="button-transparent">Ver detalles..</button>
            </div>
            </div>
            <div className="row">
               <div className="panelControl" style={showPa ?{display:"block"}:{display:'none'}}>
                  <li className="pItem"><span>Ver historial</span></li>
                  <li className="pItem"><span>Editar campos</span></li>
                  <li className="pItem"><span>Nuevo pago</span></li>
                  <li className="pItem"><span>Eliminar</span></li>
                </div>
            </div>
          </div>
      </div> 
      </div>
    </div>
)}
//exportación de la información
export default Registros 