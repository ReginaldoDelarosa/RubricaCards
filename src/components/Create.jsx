import ContentComponent from "./Content"
import Footer from './footer'
import { useState,useEffect } from 'react'
import { generateNewId } from "./utils"
import img1 from '/src/assets/LK-99.png'
import img2 from '/src/assets/tmnt.jpg'
import img3 from '/src/assets/hoynofio.jpg'
import img4 from '/src/assets/un-platano-revolver.jpg'
import img5 from '/src/assets/Formula1.jpg'
import img6 from '/src/assets/MotoGP.jpg'
import img7 from '/src/assets/Rally.jpg'
import img8 from '/src/assets/Ajedrez.jpg'
import img9 from '/src/assets/Domino.jpg'
import img10 from '/src/assets/Monopoly.jpg'
import img11 from '/src/assets/Basket.jpg'
import img12 from '/src/assets/Futbol.jpg'
import img13 from '/src/assets/Volleyball.jpg'

const selectImages = [
  {
    name:"Imagen 1",
    image: img1,
},
{
    name:"Imagen 2",
    image: img2,
},
{
    name:"Imagen 3",
    image: img3,
},
{
    name:"Imagen 4",
    image: img4,
},
{
    name:"Formula 1",
    image: img5,
},
{
    name:"Moto GP",
    image: img6,
},
{
    name:"Rally",
    image: img7,
},
{
    name:"Ajedrez",
    image: img8,
},
{
    name:"Domino",
    image: img9,
},
{
    name:"Monopoly",
    image: img10,
},
{
    name:"Baloncesto",
    image: img11,
},
{
    name:"Futbol",
    image: img12,
},
{
    name:"Voleibol",
    image: img13,
},
    
]
const CreateComponent = () => {
    const [currentView, setCurrentView] = useState('CREATE');
    const [form, setForm] = useState({
        title:"",
        texto:"",
        type:"mesa",
        image:"/src/assets/LK-99.png"
    });


    const handleInput = (e) => {
        setForm({...form, [e.target.name] : e.target.value })
    }
    const handleCardCreation = (event) => {
        event.preventDefault();
        let currentCards = JSON.parse(localStorage.getItem('cardsData'))
        currentCards = [...currentCards,{...form, id:generateNewId()}]
        localStorage.setItem('cardsData', JSON.stringify(currentCards))
       event.target.reset(); // Limpiar el formulario
      };
      
    
    const handleViewChange = (newView) => {
        setCurrentView(newView);
      };


    
    return(<>
    <form onSubmit={handleCardCreation} style={{minHeight:"90vh"}}>
        <div className="row">
          <div className="col-md-4 row-md-6">
            <label htmlFor="title" className="form-label">Título</label>
            <input type="text" className="form-control" id="title" name="title" value={form.title} onChange={handleInput} placeholder="Título" required />
            <label htmlFor="texto" className="form-label">Contenido</label>
            <textarea className="form-control" id="texto" name="texto" value={form.texto} onChange={handleInput} placeholder="Contenido" required />
            <label htmlFor="type" className="form-label">Tipo Deporte</label>
            <select className="form-select" id="type" name="type" value={form.type} onChange={handleInput} aria-label="Tipo Deporte" required>
              <option value="motor">Motor</option>
              <option value="mesa">Mesa</option>
              <option value="equipo">Equipo</option>
            </select>
            <label htmlFor="type" className="form-label">Imagen</label>
            
            <div className="row">
                <div className="col-md-3">
                    <img src={form.image} alt="imagenCard" style={{maxWidth:"100%"}}/>
                </div>
                <div className="col-md-9">
                <select className="form-select" id="selectedImage" onChange={handleInput} value={form.image} name="image" aria-label="Imagen seleccionada" required>
              {
                selectImages.map((e) => (<option key={e.name} value={e.image}>{e.name}</option>))
              }
            </select>
                </div>
            </div>
            

            <button type="submit" className="btn btn-primary">Crear Card</button>
          </div>
        </div>
      </form>
    {currentView === 'CONTENT' && <ContentComponent />}

    <Footer/>
    </>
        
    )
        
      
    }

export default CreateComponent