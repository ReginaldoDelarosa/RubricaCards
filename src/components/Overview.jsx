import Cards from './Cards'
import { useState,useEffect } from 'react'
import img1 from '/src/assets/LK-99.png'
import img2 from '/src/assets/tmnt.jpg'
import img3 from '/src/assets/hoynofio.jpg'
import img4 from '/src/assets/un-platano-revolver.jpg'
import img5 from '/src/assets/abuelaTactica.jpg'
import img6 from '/src/assets/ratas-696x438.png'

const cardsC =[
  {
    id:1,
    title: "LK-99|",
    texto:"es un compuesto policristalino negro-grisáceo, obtenido mediante el dopaje de apatito de plomo con cobre. Un equipo de la Universidad de Corea liderado por Sukbae Lee (이석배) y Ji-Hoon Kim (김지훈) comenzó a evaluar este material como un posible superconductor a partir de 1999.  ",
    image: img1,
    link:"https://es.wikipedia.org/wiki/LK-99"
  },
  {
    id:2,
    title: "¿Cuál es la Tortuga Ninja más fuerte?|",
    texto:"Las Tortugas Ninja llevan entre nosotros desde 1984, con el cómic de Kevin Eastman y Peter Laird que fue concebido como un producto independiente de tirada limitada.",
    image: img2,
    link:"https://vandal.elespanol.com/noticia/r21747/cual-es-la-tortuga-ninja-mas-fuerte-leonardo-responde-al-dilema-39-anos-despues"
  },
  {
    id:3,
    title: "Hoy no fio mañana si|",
    texto:"Muchos son los comercios que lucen un cartel en el que reza el siguiente mensaje ‘Hoy no se fía, mañana sí’ (o alguno similar) en el que se advierte a los clientes que en aquel establecimiento hay que pagar en el acto lo comprado o consumido y no se puede dejar a deber.",
    image: img3,
    link:"https://blogs.20minutos.es/yaestaellistoquetodolosabe/de-donde-surge-la-expresion-hoy-no-se-fia-manana-si/"
  },
  {
    id:4,
    title: "Ladrón intentó robar con un banano|",
    texto:"La inseguridad en el país está fuera de control y los delincuentes acuden a diferentes alternativas para cometer sus robos, aunque estas se tornen extrañas para algunas personas. En una nueva modalidad utilizada por los ladrones, un delincuente intentó perpetrar un robo en una barbería con un elemento que pretendía hacer pasar por un revolver.",
    image: img4,
    link:"https://www.infobae.com/colombia/2023/07/12/video-ladron-intento-robar-con-un-banano-a-los-clientes-de-una-barberia/"
  }
]
const OverviewComponent = () => {

    const [favorites, setFavorites] = useState([]);
    
    
  
  return( <>
    <div className='container' style={{minHeight:"90vh"}}>
        <div className='row'>
                    {

                    cardsC.map(cards=>(
                        <div className='col-md-3 row-md-6' key={cards.id}>
                            <Cards
                            id={cards.id}
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
       <footer>        
        <div className='container-fluid'>
            <div className='row bg-secondary text-white'>
                    <div className="col-xs-12 col-md-6 col-lg-3">
                        <p className='h3'>Columna</p>                            
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-3">
                        <p >Columna</p>                            
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-3">
                        <p>Columna</p>                    
                    </div>
                    <div className="col-xs-12 col-md-6 col-lg-3">
                        <p>Columna</p>                            
                    </div>
            </div>
        </div>
        </footer>                 
      
  </>
  )
  };

  export default OverviewComponent