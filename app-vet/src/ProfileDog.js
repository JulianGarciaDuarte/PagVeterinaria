import React from 'react'
import './css/estilos_PerfilM.css'
import logo_perro from './imgs/Logo2.png'

export default function ProfileDog(){
    return (
    <main className="principal">
    <div className="container-fluid">

        <div className="row">
            
            <div className="card p-4 " style={{width:"450px"}}>

            <div className=" image d-flex flex-column justify-content-center align-items-center" > <button className="btn btn-secondary" style={{width:"200px", height: "200px"}}> <img src= {logo_perro} height="200" width="200" /></button>


                <span className="name mt-3">Fredo Godofredo</span> <span className="idd">@ElFredo</span>
                <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="idd1">Oxc4c16a645_b21a</span> <span><i className="fa fa-copy"></i></span> </div>
                <div className="d-flex flex-row justify-content-center align-items-center mt-3"> <span className="number">1069 <span className="follow">Followers</span></span> 
                </div>
                <div className=" d-flex mt-2"> <button className="btn1 btn-dark">Edit Profile</button> </div>
                <div className="text mt-3"> <span>The dog is a pet animal. A dog has sharp teeth so that it can eat flesh very easily, it has four legs, two ears, two eyes, a tail, a mouth, and a nose. It is a very clever animal and is very useful in catching thieves. It runs very fast, barks loudly and attacks the strangers. </span> </div>
                <div className="gap-3 mt-3 icons d-flex flex-row justify-content-center align-items-center"> <span><i className="fa fa-twitter"></i></span> <span><i className="fa fa-facebook-f"></i></span> <span><i className="fa fa-instagram"></i></span> <span><i className="fa fa-linkedin"></i></span> </div>
                <div className=" px-2 rounded mt-4 date "> <span className="join">Joined May,2021</span> </div>
            </div>
        </div>



        

        <div className="col-md-4">
        <div className="medio">
            
            <img src="./imgs/Camioneta1- Toyota RAV4.jpg" style={{width: "100%", height: "100%"}}/>
            
        </div>
        </div>  



        <div className="col-md-4">
        <div className="derecha">

            <div className="nombres">
            <h3> Ficha Tecnica</h3>

            </div>

            <div className="cuerpo">
            <p>Con su potente presencia y un diseño sofisticado, este vehículo inspira a la
            aventura. Su énfasis en la parrilla robusta aumenta la aerodinámica del
            vehículo y su capacidad de refrigeración del motor, sus faros han sido diseñados
            en contraste con la parrilla dando una apariencia de elegancia y sofisticación.
            Sus líneas exteriores le dan mayor realce de elegancia y look deportivo.</p>
            </div>
            <div className="comprar">
            <h2>COMPRAR</h2>
            <button><i className="fas fa-dollar-sign"></i>105.000.000</button>
            </div>
        </div>
        </div>
    </div>
    </div>
    </main>
    )
}