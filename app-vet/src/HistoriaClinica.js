import React from 'react'

export default function HistoriaClinica(){
    return(
        <div className="col-md-8">
        <div className="full-width">
            <p className='titulo'>Historia Clinica</p>
            <div className='col-m4 hc_box'>
                <p> Condiciones Diagnosticadas</p>
                <p>Texto aca</p>
            </div>

            <div><p>Lista de Revisiones</p>
                <table className="full-width">
                    <tr>
                        <th>Veterinario</th>
                        <th>Fecha</th>
                        <th>Descripcion</th>
                    </tr>
                    <tr>
                        <td>Carlos Restrepo</td>
                        <td>12-02-2022</td>
                        <td><button className="boton-ver">Ver</button></td>
                    </tr>
                </table>
            </div>
         </div>
        </div>
    )
}

function agregarRegistro(){

}