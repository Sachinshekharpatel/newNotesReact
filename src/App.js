import React, { useEffect,useRef, useState, useContext } from "react";
import "./App.css";
import ModalForm from "./modalform";
import CartContext from "./createContext";
import ListOfNotes from "./listofNotes";
function App() {
  const [modalShow, setModalShow] = useState(false);
  const cartCtx = useContext(CartContext);
  useEffect(() => {
    console.log(cartCtx.items);
  }, [cartCtx]);

  const openModal = () => {
    setModalShow(true);
  };
  const closeModal = () => {
    setModalShow(false);
  };

  const searchBtnHandler = () => {
    const searchItem = inputRef.current.value;
    cartCtx.searchItem(searchItem);
    
  }
  const inputRef = useRef();
  return (
    <div className="App">
      <h2>NoteBook</h2>
      <div>
        <label>Search Note : </label>
        <input ref= {inputRef}placeholder="Search Note" type="text"></input>
        <button onClick={() => searchBtnHandler()}>Search</button>
      </div>
      <p>Total Notes : {cartCtx.items.length}</p>
      <p>Showing Notes : {cartCtx.items.length}</p>
      <button onClick={() => openModal()}>Add Note</button>
      {modalShow && <ModalForm closeModal={closeModal} />}
      <ListOfNotes></ListOfNotes>
    </div>
  );
}

export default App;
