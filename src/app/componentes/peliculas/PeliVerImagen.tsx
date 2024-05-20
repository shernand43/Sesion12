import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";
import { ARREGLO_PELICULAS } from "../../mocks/Pelicula-mocks";

export const PeliVerImagen = (props: any) => {
  const laPelicula = ARREGLO_PELICULAS.find((peli)=>{
    return peli.codPelicula === Number(props.obj.codPelicula);
  });
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">{laPelicula?.nombrePelicula}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="d-flex justify-content-center">
          <img src={laPelicula?.imagenPeliculaBase64} alt="error" className="maximoTamanoGrande" />
        </div>
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
