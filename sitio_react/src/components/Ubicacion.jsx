import React from 'react'
import map from "../images/imagen-ubicacion.jpg"

export const Ubicacion = () => {
  return (
    <>
        <center>
            <div className="container" style={{marginTop:30}}>

            <div className="row">
                <div className="col-lg-15">
                    <h2>Google Maps</h2>
                    <img className="rounded-circle" width="240" height="240" src={map} alt="..." />                    
                    <p>Calle 18a No.19-04 / Acacias-Meta</p>
                    <p><a className="btn btn-secondary" href="# ">Abrir Maps &raquo;</a></p>
                    <img className="card-img-top" src={map} alt="..."/>
                </div>

                </div>

            </div>
        </center>
    </>
  )
}
