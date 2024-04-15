import React, { useRef,useContext } from "react";
import CartContext from "./createContext";

const ModalForm = (props) => {
  const cartCtx = useContext(CartContext);
  const titleRef = useRef();
  const discriptionRef = useRef();
  const addToListHandler = () => {
    const title = titleRef.current.value;
    const discription = discriptionRef.current.value;
    const item = {
      id: Math.floor(Math.random() * 10000),
      title: title,
      discription: discription,
    };
    if(title.trim().length>0 && discription.trim().length>0){
      cartCtx.addItem(item);
      props.closeModal();
      titleRef.current.value = "";
      discriptionRef.current.value = "";
    }else {
      alert("Enter Title and Discription");
    }

  };

  return (
    <div>
      <h1>Modal Form</h1>
      <label>Enter Title : </label>
      <input ref={titleRef} type="text"></input>
      <label>Enter Description : </label>
      <input ref={discriptionRef} type="text"></input>
      <button onClick={() => addToListHandler()}>Add To Book</button>
      <button onClick={() => props.closeModal()}>Close</button>
    </div>
  );
};
export default ModalForm;
