import React from 'react'

let filas = [["Carlos Restrepo", "12-02-2022"],
["Gustavo Petro", "12-01-2022"],
["Ivan Duque", "01-01-2022"],
["German Gaviria", "12-02-2021"],
["Julian Garcia", "12-01-2021"]
]

let condiciones = "When NIRCam reaches 120 kelvins (approximately -244 degrees Fahrenheit, or -153 degrees Celsius), Webb’s optics team will be ready to begin meticulously moving the 18 primary mirror segments to form a single mirror surface. The team has selected the star HD 84406 as its target to begin this process. It will be the first object NIRCam “sees” when photons of light hit the instrument’s powered-on detectors. The process will essentially create an image of 18 random, blurry points of light. For the first few weeks of mirror alignment, the team will keep the instrument trained on the star while they make microscopic adjustments to the mirror segments; ultimately that collection of 18 blurry dots will become a focused image of a single star. Cooling of the telescope and instruments will also continue over the next month, with the near-infrared instruments ultimately reaching 37-39 kelvins."
export default function HistoriaClinica(){

        return(
        <div id="tabla-reportes" className="full-width">
            <h3 className='titulo'>Historia Clinica</h3>
            <div className='condiciones'>
                <b className="titulo-condiciones"> Condiciones Diagnosticadas</b>
                <p className="text-condiciones">{condiciones}</p>
            </div>

            <div><p>Lista de Revisiones</p>
                <table className="full-width">
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

function agregarRegistro(){
    {filas.forEach( (currentValue) => {
        {console.log(currentValue)}
        <tr>
        <td>{currentValue[0]}</td>
        <td>{currentValue[1]}</td>
        <td><button>ver</button></td>
        </tr>
    })}
}