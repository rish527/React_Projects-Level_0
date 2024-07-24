import React, {useEffect, useState} from 'react'
import Card from './Card'
import './LoadingPlate.css'

export default function LoadingPlate(){
    
    const [count,setCount]=useState(0);
    const [data,setData]=useState([]);
    const [loading,setLoading]=useState(false);
    const [disableButton, setDisableButton] = useState(false);


    async function getData(){
        try {
            setLoading(true);
            const response=await fetch(`https://dummyjson.com/products?limit=12&skip=${count==0?0:count*12}`);
            const dat=await response.json();
            
            if(dat && dat.products && dat.products.length){
                setData((prevData)=>[...prevData, ...dat.products]);
                setLoading(false);
            }
            console.log(data);
        } catch (e) {
            console.log(e);
            setLoading(false);
            return(<div className='error'>Error in Loading Data...</div>);
        }
    }

    useEffect(()=>{
        getData();
        // console.log(data);
    },[count]);

    useEffect(() => {
        if (data && data.length >= 50) setDisableButton(true);
    }, [data]);

    if(loading==true){
        return <div className="loading">Loading...</div>
    }

    return(
        <div className="container">
            <div className="products">
                {data.map((item)=>(
                    <Card key={item.id} image={item.thumbnail} name={item.title} />
                ))}
            </div>
            <div className="button">
                <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More</button>
            </div>
            {disableButton ? <p>You have reached to Final products</p> : null}
        </div>
    )

}