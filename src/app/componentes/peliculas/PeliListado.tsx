import { useState } from "react";

import { Pelicula } from "../../modelos/Pelicula";
import { ARREGLO_PELICULAS } from "../../mocks/Pelicula-mocks";
import { ARREGLO_PELICULA_GENERO } from "../../utilidades/dominios/DomGenero";
import { PeliVerImagen } from "./PeliVerImagen";
import { NavLink } from "react-router-dom";

export const PeliListado = () => {
  const [arrPeliculas] = useState<Pelicula[]>(ARREGLO_PELICULAS);
  const [modalShow, setModalShow] = useState <boolean> (false);
  const  [objPeli,setobjPeli]=useState<Pelicula>(new Pelicula(0,"","","","",""));

  const obtenerNombreGenero =(valor: string)=>{
    for(const objGen of ARREGLO_PELICULA_GENERO){
      if (objGen.codGenero==valor) {
        return objGen.nombreGenero;
      }
    }
  }

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-11 mt-4">
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <NavLink to="/">Inicio</NavLink>
        </li>
        <li className="breadcrumb-item">
          <NavLink to="#">Peliculas</NavLink>
        </li>
        <li className="breadcrumb-item active" >
          <NavLink to="#">Listar</NavLink>
        </li>
        </ol>
        </nav>
          <table className="table table-striped table-hover">
            <thead>
              <tr className="table-danger">
                <th style={{ width: "10%" }}>Código</th>
                <th style={{ width: "30%" }}>Nombre</th>
                <th style={{ width: "20%" }}>Género</th>
                <th style={{ width: "30%" }}>Protagonista</th>
                <th style={{ width: "10%" }}>Imágen</th>
              </tr>
            </thead>
            <tbody>
              {arrPeliculas.map((miPeli: Pelicula) => (
                <tr key={miPeli.codPelicula} className="align-middle">
                  <td>{miPeli.codPelicula}</td>
                  <td>{miPeli.nombrePelicula}</td>
                  <td>{obtenerNombreGenero(miPeli.codGeneroPelicula)}</td>
                  <td>{miPeli.protagonistaPelicula}</td>
                  <td>

                    <a href="/#" onClick={(e)=>{e.preventDefault() ;setModalShow(true) ;setobjPeli(miPeli);}}>
                    <img src={miPeli.imagenPeliculaBase64} alt="" className="imagenListado"/>
                    </a>
                    
                    <div className="text-info">{miPeli.imagenPelicula}</div>                                      
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <PeliVerImagen show={modalShow} onHide={() => {setModalShow(false);}} obj={objPeli} />
        </div>
      </div>
    </>
  );
};
