import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import Componente1 from './Contador'
import { useState,useEffect } from 'react'
import { AiOutlineHeart,AiFillHeart } from "react-icons/ai";
const Cards =(props)=>{

    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        
        setIsFavorite(favorites.includes(props.id));
      }, [props.id]);
  
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        if (isFavorite) {
          const updatedFavorites = favorites.filter((id) => id !== props.id);
          localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
        } else {
          localStorage.setItem('favorites', JSON.stringify([...favorites, props.id]));
        }
      };

    return(
      
        <div className="card text-center" >
            <img src={props.imageSource}></img>
            <div className="card-body">
                <h5 className="card-title">{props.title} </h5>
                
                <p className="card-text">{props.texto}</p>
            </div>
            <a  onClick={toggleFavorite}>
            {isFavorite ? <AiFillHeart />  : <AiOutlineHeart /> }
            </a>
            
        </div>
        
    )
}

export default Cards