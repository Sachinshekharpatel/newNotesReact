import React, { useEffect,useRef, useState, useContext } from "react";
import "./App.css";
import ModalForm from "./modalform";
import CartContext from "./createContext";
import ListOfNotes from "./listofNotes";
import SearchList from "./searchItemList";
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
        <input onChange={() => searchBtnHandler()} ref= {inputRef}placeholder="Search Note" type="text"></input>
      </div>
      <p>Total Notes : {cartCtx.items.length}</p>
      <p>Showing Notes : {cartCtx.searchTotalItems.length}</p>
      <button onClick={() => openModal()}>Add Note</button>
      {modalShow && <ModalForm closeModal={closeModal} />}
       <p>List Of Notes</p>
      {cartCtx.searchTotalItems.length === 0 && inputRef.current.value.length === 0 && <ListOfNotes></ListOfNotes>}
      {cartCtx.searchTotalItems.length > 0 && <SearchList></SearchList>}
      {cartCtx.searchTotalItems.length === 0 && inputRef.current.value.length > 0 && <h2>No Item Found</h2>}
    </div>
  );
}

export default App;
