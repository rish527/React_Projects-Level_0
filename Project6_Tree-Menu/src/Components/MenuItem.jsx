import { useState } from "react"
import MenuList from "./MenuList"



export default function MenuItem({item}){
    const [displayCurrentChildren, setDisplayCurrentChildren]=useState({})

    function toogleDisplayChild(getCurrentlabel) {
        setDisplayCurrentChildren({
          ...displayCurrentChildren,
          [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
        });
    }
    console.log(displayCurrentChildren);
    return(
        <div className="item">
            <div className="heading">
                <p>{item.label}</p>
                {item && item.children && item.children.length ? (<button onClick={()=>toogleDisplayChild(item.label)}>
                    {
                        displayCurrentChildren[item.label]?<p>-</p>:<p>+</p>
                    }
                </button>):null}
            </div>

            {item && item.children && item.children.length>0 && displayCurrentChildren[item.label]?
                <MenuList list={item.children} />
                :null
            }
        </div>
    )
}