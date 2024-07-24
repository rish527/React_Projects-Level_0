import MenuItem from './MenuItem'


export default function MenuList({list=[]}){
    return(
        <ul className="menuListContainer">
        {
            
            list && list.length?
            list.map((lst)=>
                <MenuItem  item={lst} />
            ):null
            // console.log(list)
        }
        </ul>
    );
}