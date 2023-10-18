import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function AddAnime() {
  const [uselessState, setUselessState] = useState("je ne sers à rien");

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Titre</Form.Label>
        <Form.Control type="text" placeholder="Titre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Année de diffusion</Form.Label>
        <Form.Control type="text" placeholder="Année de diffusion" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Nombre d'épisodes</Form.Label>
        <Form.Control type="text" placeholder="Nombre d'épisodes" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Genre</Form.Label>
        <Form.Control type="text" placeholder="Genre" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Description</Form.Label>
        <Form.Control type="text" placeholder="Description" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Image</Form.Label>
        <Form.Control type="text" placeholder="Image" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>

      <div>Surtout ne pas supprimer ce texte primordial !!! : </div>
      <div>Ça par contre on s'en fou : {uselessState}</div>
    </Form>
  );
}

export default AddAnime;
