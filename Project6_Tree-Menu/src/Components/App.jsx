import { useState } from 'react'
import './App.css'
import MenuList from './MenuList'
import menus from './data.js'
function App() {
    return(
        <div className="treeContainer">
            <h1 className='sideBarHead'>Slide Bar Menu</h1>
            {/* {console.log(menus)} */}
            <MenuList list={menus}/>
        </div>
    )
}

export default App
