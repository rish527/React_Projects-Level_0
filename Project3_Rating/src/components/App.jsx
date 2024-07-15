import React from 'react'
import Stars from './Stars'
import './star.css'
const stl = {
    padding: '1rem',

    height:'93vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    
};
export default function App(){
    return(
        <div style={stl}  className="box">
                <Stars />
        </div>
    );
}