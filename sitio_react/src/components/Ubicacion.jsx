import React from 'react'
import ada from "../images/ada_lizbeth.jpeg"
import frco from "../images/francisco_alarcon.jpg"
import adri from "../images/adriana_vecino.jpg"
import ander from "../images/anderson_tognon.jpeg"
import nata from "../images/natalia_soto.jpg"
import jeni from "../images/jennifer_vargas.jpeg"

export const ubicacion = () => {
  return (
    <>
        <center>
            <div className="container" style={{marginTop:20}}>

            <div className="row">
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={ada} alt="..." />
                    <h2>Dra. Ada Lizbeth Goya Goya</h2>
                    <p>Médico general (Medicina estética no invasiva). <br/>Experiencia en atención de niños, adulto yadulto mayor. Se atiende de forma particular vía online y a domicilio.</p>
                    <p><a className="btn btn-secondary" href="# ">Ver Más &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={frco} alt="..."/>
                    <h2>Dr. Francisco Alarcón Alarcón</h2>
                    <p>Atiende a pacientes privados (sin previsión) y pacientes con previsión en esta dirección. <br/>Atiende a pacientes adultos.<br/>Atiende a niños y adultos.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={adri} alt="..."/>
                    <h2>Dra. Adriana Vecino Macri</h2>
                    <p>Soy titulada como Médico Cirujano e hice el Postgrado en Endocrinología y Metabolismo en la Universidad de la República en la República Oriental Uruguay.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={ander} alt="..."/>
                    <h2>Dr. Anderson Tognon Muniz</h2>
                    <p>Medico Brasileño, con titulo convalidado en U de Chile, médico familiar, realizo tratamiento integral tanto para niños como adultos y 3era edad. Consultas domiciliarias a confirmar.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={nata} alt="..."/>
                    <h2>Dra. Natalia Sotomayor Parra</h2>
                    <p>Soy Medico cirujano, Especialista en Nutrición Clínica de la Universidad de Valencia, España. Tengo Postítulos en Obesidad en Universidad de Chile y Federación Mundial de Obesidad.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                <div className="col-lg-4">
                    <img className="rounded-circle" width="140" height="140" src={jeni} alt="..."/>
                    <h2>Dra. Jennifer Vargas Lucero</h2>
                    <p>Más de 10 años de experiencia en atención de pacientes adultos y evaluaciones preventivas. Título de Médico Cirujano, otorgado por la Universidad de Santiago de Chile.</p>
                    <p><a className="btn btn-secondary" href="# ">View details &raquo;</a></p>
                </div>
                </div>

            </div>
        </center>
    </>
  )
}
