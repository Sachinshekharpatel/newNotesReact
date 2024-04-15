import React,{useContext, useEffect} from "react";
import CartContext from "./createContext";


const ListOfNotes = (props) => {

    const cartCtx = useContext(CartContext);
    const list = cartCtx.items;
 useEffect(() => {
   console.log(list);
 },[cartCtx])

    return (
        <div>
            List Of Notes
            <div style={{display:"flex",flexDirection:"row"}}>
            {list.map((item)=>{
                return (
                    <div style={{border:"1px solid black",margin:"10px", padding : "10px"}} key={item.id}>
                       <p>{item.title}</p>
                       <p>{item.discription}</p>
                       <button onClick={() => cartCtx.removeItem(item)}>Remove</button>
                    </div>
                    
                )
            })}
            </div>
        </div>
    );
}

export default ListOfNotes