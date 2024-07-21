import { useState, useEffect } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import './slider.css';

function Slider({url,limit}){
    const [isLoading, setIsLoading]=useState(false);
    const [images, setImages]=useState([]);
    const [error, setError]=useState(null);
    const [currentSlide, setCurrentSlide]=useState(0);

    async function getImages(getUrl) {
        try {
            setIsLoading(true);
            const response = await fetch(`${getUrl}&limit=${limit}`);
            const data = await response.json();
            setImages(data);
            setIsLoading(false); // Ensure loading state is set to false after setting images
            console.log(response);
        } catch (e) {
            setIsLoading(false);
            console.log(e);
            setError(e);
        }
    }

    useEffect(() => {
        if (url !== "") {
            getImages(url);
        }
    }, [url]);

    console.log(images);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    function handleLeft(){
        setCurrentSlide(currentSlide==0?images.length-1:currentSlide-1);
    }
    function handleRight(){
        setCurrentSlide(currentSlide==(images.length-1)?0:currentSlide+1);
    }



    return(
        <div className="container">
            <BsArrowLeftCircleFill onClick={handleLeft} className='arrow left-arrow' />
            {
                images.map((imageDetail, index)=>{
                    return(
                        <img  key={imageDetail.id} src={imageDetail.download_url} alt="" className={currentSlide===index?'current-image':" hide-current-image"}  />
                    )
                })
            }
            <BsArrowRightCircleFill onClick={handleRight} className='arrow right-arrow' />
            <span className="circle-indicators">
                {images && images.length
                    ?images.map((_,index)=>(
                        <button
                            key={index}
                            className={currentSlide==index?'current-indicator':'current-indicator inactive-indicator'}
                            onClick={()=>setCurrentSlide(index)}
                        ></button>
                    ))
                    :null
                }
            </span>
        </div>
    )

    
}

export default Slider;

