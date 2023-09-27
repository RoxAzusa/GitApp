import Button from 'react-bootstrap/Button';

function AddAnime() {
  return (
    <section>
      <div className="group-form" >
        <label className="form-label">Titre</label>
        <input type="text" placeholder="Titre" className="form-input"/>
      </div>
      <div className="group-form">
        <label className="form-label">Année de diffusion</label>
        <input type="text" placeholder="Année de diffusion" className="form-input"/>
      </div>
      <div className="group-form" >
        <label className="form-label">Nombre d'épisodes</label>
        <input type="text" placeholder="Nombre d'épisodes" className="form-input"/>
      </div>
      <div className="group-form" >
        <label className="form-label">Genre</label>
        <input type="text" placeholder="Genre" className="form-input"/>
      </div>
      <div className="group-form" >
        <label className="form-label">Description</label>
        <input type="text" placeholder="Description" className="form-input"/>
      </div>
      <div className="group-form" >
        <label className="form-label">Image</label>
        <input type="text" placeholder="Image" className="form-input"/>
      </div>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </section>
  );
}

export default AddAnime;