import React from 'react';

const style={
    border:'2px solid red',
    borderRadius:'10px',
    margin:'1rem',
    padding:'1rem',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    textAlign:'center',
    width: '50rem',
    backgroundColor:'rgba(0,0,0,0.1)'
    

}


function Card(props){
    function handleSingleSelection(getCurrentId,setSelected,selected) {
        console.log(getCurrentId)
        setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    return(<div key={props.id} className="card" onClick={()=>handleSingleSelection(props.id,props.setSelected,props.selected)}>
        <div style={style} className="card">
            <h3>{props.question}</h3>
            <span>+</span>
            {props.selected === props.id ? <div >{props.answer}</div> : null}
        </div>
    </div>)
}

export default Card;

