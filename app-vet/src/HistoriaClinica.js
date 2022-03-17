import React, {useState, useEffect} from 'react'
import logo_perro from './imgs/Logo2.png'
import './css/estilos_PerfilM.css';

let filas = [["Carlos Restrepo", "12-02-2022"],
["Gustavo Petro", "12-01-2022"],
["Ivan Duque", "01-01-2022"],
["German Gaviria", "12-02-2021"],
["Julian Garcia", "12-01-2021"]
]

let condiciones = "When NIRCam reaches 120 kelvins (approximately -244 degrees Fahrenheit, or -153 degrees Celsius), Webb’s optics team will be ready to begin meticulously moving the 18 primary mirror segments to form a single mirror surface. The team has selected the star HD 84406 as its target to begin this process. It will be the first object NIRCam “sees” when photons of light hit the instrument’s powered-on detectors. The process will essentially create an image of 18 random, blurry points of light. For the first few weeks of mirror alignment, the team will keep the instrument trained on the star while they make microscopic adjustments to the mirror segments; ultimately that collection of 18 blurry dots will become a focused image of a single star. Cooling of the telescope and instruments will also continue over the next month, with the near-infrared instruments ultimately reaching 37-39 kelvins."
export default function HistoriaClinica(params){
    const [post, getPost] = useState([])
    const url = 'http://localhost:4000/api/mascotas/listar'
    const fetchRegistros = () => {
        fetch(url)
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            getPost(res)
        })
    }
    useEffect( () => {
        fetchRegistros()
    }, [])

    return(
    <div className="main-container">
    <ProfileDog/>
    <Historia/>
    </div>
    )
};
function Historia(params){
    return(
    <div id="tabla-reportes" className="full-width">
        <h3 className='titulo-principal'>Historia Clinica</h3>
        <div className='outer-container'>
            <b className="titulo-seccion"> Condiciones Diagnosticadas</b>
            <p className="inner-content">{condiciones}</p>
        </div>

        <div className="outer-container"><b className="titulo-seccion">Lista de Revisiones</b>
            <table className="full-width inner-content">
                <thead>
                <tr>
                    <th>Veterinario</th>
                    <th>Fecha</th>
                    <th>Ver</th>
                </tr>
                </thead>
                <tbody>
                {filas.map( (currentValue, idx) => {
                    return(
                    <tr  id={idx}>
                    <td>{currentValue[0]}</td>
                    <td>{currentValue[1]}</td>
                    <td><a href='#'>ver</a></td>
                    </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    </div>
    )

}

function ProfileDog(params){
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
    </div>
    </div>
    </main>
    )
}