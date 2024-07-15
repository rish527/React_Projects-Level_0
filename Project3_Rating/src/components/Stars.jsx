import {FaStar} from 'react-icons/fa'
import React from 'react'
import './star.css'
export default function  Start({num=5}){
    const [rating,setRating]=React.useState(0);
    const [hover,setHover]=React.useState(0);

    function handleClick(currentIndex){
        console.log(currentIndex);
        setRating(currentIndex);
    }

    function handleMouseEnter(currentIndex){
        // console.log(currentIndex);
        setHover(currentIndex);
    }
    function handleMouseExit(currentIndex){
        // console.log(currentIndex);
        setHover(0);
    }

    return (
        <div className="container">
            <div className="star-rating">
            {[...Array(num)].map(
                (_,index)=>{
                    index+=1;
                    return <FaStar 
                        key={index}
                        className={index<=(hover||rating)?'active':null}
                    
                        onClick={()=>handleClick(index)}
                        onMouseMove={()=>handleMouseEnter(index)}
                        onMouseLeave={()=>handleMouseExit(index)}
                        size={30}
                    />
                }
            )}
        </div>
        
        <div className="rating">
            <p>Your Ratings: {rating}/{num}</p>
        </div>
       
        </div>
    )
}