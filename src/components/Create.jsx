import ContentComponent from "./Content"
import { useState,useEffect } from 'react'
import { generateNewId } from "./utils"
import img1 from '/src/assets/LK-99.png'
import img2 from '/src/assets/tmnt.jpg'
import img3 from '/src/assets/hoynofio.jpg'
import img4 from '/src/assets/un-platano-revolver.jpg'
import img5 from '/src/assets/abuelaTactica.jpg'
import img6 from '/src/assets/ratas-696x438.png'

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
        name:"Imagen 5",
        image: img5,
    },
    {
        name:"Imagen 6",
        image: img6,
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
    <form onSubmit={handleCardCreation}>
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
    </>
        
    )
        
      
    }

export default CreateComponent