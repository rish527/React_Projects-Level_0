import React from 'react';
import Slider from './Slider';
import Slider2 from './Slider2';


function App() {
  return(
    <div className="hero">
      <h1>Image Slider</h1>
      <Slider url="https://picsum.photos/v2/list?pages=2" limit="10"  />
    </div>
    
  )
}

export default App;
