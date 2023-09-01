import Cards from './Cards'
import Footer from './footer'
import { generateNewId } from "./utils"
import { useState,useEffect } from 'react'
import img5 from '/src/assets/Formula1.jpg'
import img6 from '/src/assets/MotoGP.jpg'
import img7 from '/src/assets/Rally.jpg'
import img8 from '/src/assets/Ajedrez.jpg'
import img9 from '/src/assets/Domino.jpg'
import img10 from '/src/assets/Monopoly.jpg'
import img11 from '/src/assets/Basket.jpg'
import img12 from '/src/assets/Futbol.jpg'
import img13 from '/src/assets/Volleyball.jpg'

const cardsD =[
  {
    id:5,
    title: "Formula 1",
    texto:"El Campeonato Mundial de Fórmula 1 de la FIA, más conocido como Fórmula 1, F1 o Fórmula Uno, es la principal competición de automovilismo internacional y el campeonato de deportes de motor más popular y prestigioso del mundo. La entidad que la dirige es la Federación Internacional del Automóvil.",
    image: img5,
    link:"https://www.formula1.com/en/page.what-is-f1.html",
    type:'motor'
  },
  {
    id:6,
    title: "Moto GP",
    texto:"El Campeonato Mundial de Motociclismo pero que popularmente recibe el nombre de la categoría principal de MotoGP, es la máxima competición mundial de motociclismo de velocidad.",
    image: img6,
    link:"https://www.motogp.com/es",
    type:'motor'
  },
  {
    id:7,
    title: "Rally",
    texto:"Un rally​ es una competición automovilística que se disputa en carreteras abiertas al tráfico pero que se cierran especialmente para su celebración. A la parte cerrada al tránsito rodado se le denomina «tramo», que es el lugar donde cada participante compite y que debe completar en el menor tiempo posible. El ganador es aquel que, con la suma de los tiempos de todos los tramos, haya empleado menos para completar la carrera.",
    image: img7,
    link:"https://es.wikipedia.org/wiki/Campeonato_Mundial_de_Rally",
    type:'motor'
  },
  {
    id:8,
    title: "Ajedrez",
    texto:"El ajedrez es un juego de tablero entre dos contrincantes en el que cada uno dispone al inicio de dieciséis piezas móviles que se colocan sobre un tablero​ dividido en sesenta y cuatro casillas o escaques.",
    image: img8,
    link:"https://es.wikipedia.org/wiki/Ajedrez",
    type:'mesa'
  },
  {
    id:9,
    title: "Dominó",
    texto:"El dominó es un juego de mesa en el que se juegan y emplean unas fichas rectangulares, generalmente blancas por la cara y negras por el envés, usualmente hay de diferentes colores, aunque existen muchas variantes.",
    image: img9,
    link:"https://es.wikipedia.org/wiki/Domin%C3%B3",
    type:'mesa'
  },
  {
    id:10,
    title: "Monopoly",
    texto:"Monopoly es un juego de mesa basado en el intercambio y la compraventa de bienes raíces (normalmente, inspirados en los nombres de las calles de una determinada ciudad), hoy es propiedad de la empresa estadounidense Hasbro.",
    image: img10,
    link:"https://es.wikipedia.org/wiki/Monopoly",
    type:'mesa'
  },
  {
    id:11,
    title: "Baloncesto",
    texto:"El baloncesto es un deporte de equipo, jugado entre dos conjuntos de cinco jugadores cada uno en cuatro períodos de cuartos. El objetivo del equipo es anotar puntos introduciendo un balón por la canasta, un aro a 3,05 metros sobre la superficie de la pista de juego del que cuelga una red. La puntuación por cada canasta o cesta es de dos o tres puntos, dependiendo de la posición desde la que se efectúa el tiro a canasta, o de uno, si se trata de un tiro libre por una falta de un jugador contrario. El equipo ganador es el que obtiene el mayor número de puntos.",
    image: img11,
    link:"https://es.wikipedia.org/wiki/Baloncesto",
    type:'equipo'

  },
  {
    id:12,
    title: "Futbol",
    texto:"El fútbol es un deporte de equipo jugado entre dos conjuntos de once jugadores cada uno, mientras los árbitros se ocupan de que las normas se cumplan correctamente. Es, ampliamente, considerado el deporte más popular del mundo, pues lo practican unas 270 millones de personas.",
    image: img12,
    link:"https://es.wikipedia.org/wiki/F%C3%BAtbol",
    type:'equipo'
  },
  {
    id:13,
    title: "Voleibol",
    texto:"El voleibol es un deporte que se juega con una pelota y en el que dos equipos, integrados por seis jugadores cada uno, se enfrentan sobre una área de juego separada por una red central. El objetivo del juego es pasar el balón por encima de la red, logrando que llegue al suelo del campo contrario mientras el equipo adversario intenta impedir simultáneamente que lo consiga, forzándolo a errar en su intento. Surge una fase de ataque en un equipo cuando intenta que el balón toque el suelo del campo contrario mientras que en el otro equipo surge una fase de defensa intentando impedirlo.",
    image: img13,
    link:"https://es.wikipedia.org/wiki/Voleibol",
    type:'equipo'
  }
]

const ContentComponent = () => {
    const [favorites, setFavorites] = useState([]);
    const [selectedType, setSelectedType] = useState('');
    const [cardsData, setCardsData] = useState([]);  
    const [filteredCards, setFilteredCards] = useState([])


    useEffect(() => {
        
        if (localStorage.getItem("cardsData") === null) {
            localStorage.setItem("cardsData",JSON.stringify(cardsD))
            setCardsData(cardsD)
        } else {
            setCardsData(JSON.parse(localStorage.getItem("cardsData")))
        }
    }, [])

    useEffect(() => {
        setFilteredCards(selectedType
            ? cardsData.filter((card) => card?.type === selectedType)
            : cardsData)
    }, [selectedType, cardsData])

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
      };

    
    
    
      

    return (<>
                <div className='container' style={{minHeight:"90vh"}}>
                <select className="form-select" aria-label="Default select example" value={selectedType} onChange={handleTypeChange}>
                    <option value="">Todos los deportes</option>
                    <option value="motor">Motor</option>
                    <option value="mesa">Mesa</option>
                    <option value="equipo">Equipo</option>
                </select>

        <div className='row'>
                    {

                   filteredCards.map(cards=>(
                        <div className='col-md-4 row-md-6' key={cards.id}>
                            <Cards
                            id={cards.id}
                            type={cards.type}
                            title={cards.title} 
                            imageSource={cards.image} 
                            texto={cards.texto} 
                            link={cards.link}
                            isFavorite={favorites.includes(cards.id)}
                            />
                        </div>
                        ))
                    }   
                </div>
    </div>
    <Footer/>
    </>)
    };

    export default ContentComponent 
