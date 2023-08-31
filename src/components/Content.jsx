import Cards from './Cards'
import { generateNewId } from "./utils"
import { useState,useEffect } from 'react'
import img1 from '/src/assets/LK-99.png'
import img2 from '/src/assets/tmnt.jpg'
import img3 from '/src/assets/hoynofio.jpg'
import img4 from '/src/assets/un-platano-revolver.jpg'
import img5 from '/src/assets/abuelaTactica.jpg'
import img6 from '/src/assets/ratas-696x438.png'

const cardsD =[
  {
    id:5,
    title: "LK-99|",
    texto:"es un compuesto policristalino negro-grisáceo, obtenido mediante el dopaje de apatito de plomo con cobre. Un equipo de la Universidad de Corea liderado por Sukbae Lee (이석배) y Ji-Hoon Kim (김지훈) comenzó a evaluar este material como un posible superconductor a partir de 1999.  ",
    image: img1,
    link:"https://es.wikipedia.org/wiki/LK-99",
    type:'motor'
  },
  {
    id:6,
    title: "LK-99|",
    texto:"es un compuesto policristalino negro-grisáceo, obtenido mediante el dopaje de apatito de plomo con cobre. Un equipo de la Universidad de Corea liderado por Sukbae Lee (이석배) y Ji-Hoon Kim (김지훈) comenzó a evaluar este material como un posible superconductor a partir de 1999.  ",
    image: img1,
    link:"https://es.wikipedia.org/wiki/LK-99",
    type:'motor'
  },
  {
    id:7,
    title: "LK-99|",
    texto:"es un compuesto policristalino negro-grisáceo, obtenido mediante el dopaje de apatito de plomo con cobre. Un equipo de la Universidad de Corea liderado por Sukbae Lee (이석배) y Ji-Hoon Kim (김지훈) comenzó a evaluar este material como un posible superconductor a partir de 1999.  ",
    image: img1,
    link:"https://es.wikipedia.org/wiki/LK-99",
    type:'motor'
  },
  {
    id:8,
    title: "¿Cuál es la Tortuga Ninja más fuerte?|",
    texto:"Las Tortugas Ninja llevan entre nosotros desde 1984, con el cómic de Kevin Eastman y Peter Laird que fue concebido como un producto independiente de tirada limitada.",
    image: img2,
    link:"https://vandal.elespanol.com/noticia/r21747/cual-es-la-tortuga-ninja-mas-fuerte-leonardo-responde-al-dilema-39-anos-despues",
    type:'mesa'
  },
  {
    id:9,
    title: "¿Cuál es la Tortuga Ninja más fuerte?|",
    texto:"Las Tortugas Ninja llevan entre nosotros desde 1984, con el cómic de Kevin Eastman y Peter Laird que fue concebido como un producto independiente de tirada limitada.",
    image: img2,
    link:"https://vandal.elespanol.com/noticia/r21747/cual-es-la-tortuga-ninja-mas-fuerte-leonardo-responde-al-dilema-39-anos-despues",
    type:'mesa'
  },
  {
    id:10,
    title: "¿Cuál es la Tortuga Ninja más fuerte?|",
    texto:"Las Tortugas Ninja llevan entre nosotros desde 1984, con el cómic de Kevin Eastman y Peter Laird que fue concebido como un producto independiente de tirada limitada.",
    image: img2,
    link:"https://vandal.elespanol.com/noticia/r21747/cual-es-la-tortuga-ninja-mas-fuerte-leonardo-responde-al-dilema-39-anos-despues",
    type:'mesa'
  },
  {
    id:11,
    title: "Hoy no fio mañana si|",
    texto:"Muchos son los comercios que lucen un cartel en el que reza el siguiente mensaje ‘Hoy no se fía, mañana sí’ (o alguno similar) en el que se advierte a los clientes que en aquel establecimiento hay que pagar en el acto lo comprado o consumido y no se puede dejar a deber.",
    image: img3,
    link:"https://blogs.20minutos.es/yaestaellistoquetodolosabe/de-donde-surge-la-expresion-hoy-no-se-fia-manana-si/",
    type:'equipo'

  },
  {
    id:12,
    title: "Hoy no fio mañana si|",
    texto:"Muchos son los comercios que lucen un cartel en el que reza el siguiente mensaje ‘Hoy no se fía, mañana sí’ (o alguno similar) en el que se advierte a los clientes que en aquel establecimiento hay que pagar en el acto lo comprado o consumido y no se puede dejar a deber.",
    image: img3,
    link:"https://blogs.20minutos.es/yaestaellistoquetodolosabe/de-donde-surge-la-expresion-hoy-no-se-fia-manana-si/",
    type:'equipo'
  },
  {
    id:13,
    title: "Hoy no fio mañana si|",
    texto:"Muchos son los comercios que lucen un cartel en el que reza el siguiente mensaje ‘Hoy no se fía, mañana sí’ (o alguno similar) en el que se advierte a los clientes que en aquel establecimiento hay que pagar en el acto lo comprado o consumido y no se puede dejar a deber.",
    image: img3,
    link:"https://blogs.20minutos.es/yaestaellistoquetodolosabe/de-donde-surge-la-expresion-hoy-no-se-fia-manana-si/",
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
                <div className='container'>
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
    </>)
    };

    export default ContentComponent 