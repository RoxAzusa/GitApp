import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../assets/css/style.css';

const defaultValues = {
    name: "",
    years: "",
    nbEpisodes: "",
    description: "",
    gender: "",
    image: ""
};


function AddAnime() {
    const [ anime, setAnime ] = useState('');
    const [inputs, setInputs] = useState(defaultValues);
    const navigate = useNavigate();

    const formSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/animes/add", {
                title: inputs.title,
                description: inputs.description,
                years: inputs.years,
                nbEpisodes: inputs.nbEpisodes,
                gender: inputs.gender,
                image: inputs.image
            },
            )
            .then((res) => {
                if (res.serie) {
                  setAnime([...anime, res.serie]);
                  setInputs(defaultValues);
                }
            })
            .catch((err) => {
                console.log("Unable to add serie:", err);
            });
            navigate('/');
            window.alert('Anime ajouté avec succès !')
    };

  return (
    <section>
    <h2>Ajouter à la base de données</h2>
    <form method="POST" onSubmit={formSubmit} className='form-container'>
    <Box
      sx={{
        '& > :not(style)': { 
          m: 1, 
          width: '25ch', 
          display: 'flex', 
          flexDirection: 'column',
          margin: 'auto',
          
          },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        id="outlined-basic" 
        label="Titre" 
        variant="outlined" 
        type="text" 
        className="form-input"
        required 
        onInput={(e) => setInputs({...inputs, name: e.target.value})}
      />
      <div className='form_input_data'>
        <label htmlFor="select-years" style={{display: 'none'}}>Choisir une année</label>
          <select
              id="select-years"
              className='select-form'
              name="years"
              required
              onChange={e => setInputs({ ...inputs, years: e.target.value })}
              value={inputs.years}
          >
            <option value="" >Choisir une année</option>
                {Array.from({ length: new Date().getFullYear() - 1990 + 1 }, (_, i) => i + 1990).reverse().map(year => (
                <option 
                  key={year} 
                  value={year}
                >
                  {year}
                </option>
            ))}
          </select>
      </div>
      <TextField 
        id="outlined-basic" 
        label="Nombre d'épisodes" 
        variant="outlined" 
        type="number" 
        required 
        className="form-input" 
        onInput={(e) => setInputs({...inputs, nbEpisodes: e.target.value})}
        style={{marginTop: '4vh'}}
      />
      <TextField 
        id="outlined-basic" 
        label="Genre" 
        variant="outlined" 
        type="text" 
        required 
        className="form-input" 
        onInput={(e) => setInputs({...inputs, gender: e.target.value})} 
        style={{marginTop: '4vh'}}
      />
      <TextField 
        id="outlined-basic" 
        label="Description" 
        variant="outlined" 
        type="text" 
        required 
        className="form-input" 
        onInput={(e) => setInputs({...inputs, description: e.target.value})} 
        style={{marginTop: '4vh'}}
      />
      <TextField 
        id="outlined-basic" 
        label="Image" 
        variant="outlined" 
        type="text" 
        required 
        className="form-input" 
        onInput={(e) => setInputs({...inputs, image: e.target.value})}
        style={{marginTop: '4vh'}}
      />
    </Box>
    <Button variant="contained" type="submit" style={{margin: '4vh auto'}}>
        Submit
      </Button>
    </form>

              
    </section>

  );
}

export default AddAnime;
