import React from 'react'
import './App.css'
const Componente1 =(props)=>{
    return(
    <>  
        <div className='Container2' >
            <div className="card text-center row-md-5 col-md-5" >
            <div className="card-body">
                <h5 className="card-title">Contador</h5>
                <h6>{props.contador}</h6>
            </div>
            <button className="btn btn-dark " onClick={()=>props.setCount(e=>e+1)}>Aumentar</button>
            <button className="btn btn-dark " onClick={()=>props.setCount(e=>e-1)}>Disminuir</button>
            <button className="btn btn-dark " onClick={()=>props.setCount(e=>e=0)}>resetear</button>

        </div>
        </div>
    
    </>
    )
}

export default Componente1