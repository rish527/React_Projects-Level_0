import React from 'react';
import data from '../data';
import Card from './Card';
 
const style={
    // width:'20rem',
    display:'flex',
    // flexWrap:'wrap',
    flexDirection:'column',
    gap:'.5rem',
    justifyContent:'center',
    alignItems:'center'
}


function App(){
    const [selected, setSelected] = React.useState(null);
    
    

    function createCards(dataItem){
        return <Card key={dataItem.id} id={dataItem.id} question={dataItem.question} answer={dataItem.answer} selected={selected} setSelected={setSelected} />
    }

    return(
        <div style={style} className='Container'>
            <h1>AccordionUisng React</h1>
            {data && data.length>0 ?
                data.map(createCards):(<div>No data found !</div>)
            }
        </div>
    )
}

export default App;