import React,{useContext,useEffect} from "react";
import CartContext from "./createContext";
const ContextProvider = (props) => {
  const [list, setList] = React.useState([]);
  const apiUrl = "https://react-project-ftshekhar-default-rtdb.europe-west1.firebasedatabase.app/notes.json";
  useEffect(() => {
    fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
        if (data !== null) {
            const dataArray = [];
          
            for (let key in data) {
              if (data.hasOwnProperty(key)) {
                dataArray.push({
                  key: key,
                  ...data[key]
                });
              }
            }
          
            setList(dataArray);
          }else {
            setList([]);
          }

      }

    ).catch(error => {
      console.error('There was a problem with the GET request:', error);
    });
 },[])
  const addItemHandler = (item) => {
    setList([...list, item]);
    fetch("https://react-project-ftshekhar-default-rtdb.europe-west1.firebasedatabase.app/notes.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
  };
  const removeItemHandler = (item) => {
    const newList = list.filter((item1) => item1.id !== item.id);
    fetch(  `https://react-project-ftshekhar-default-rtdb.europe-west1.firebasedatabase.app/notes/${item.key}.json`, {
      method: "DELETE",
    })
    setList(newList);
  };

const searchItemHandler = (item) => {
  console.log(item)
  const newList = list.filter((item1) => item1.title === item);
  setList(newList);
}

  const contextCart = {
    items: list,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    searchItem: searchItemHandler,
  };
  return <CartContext.Provider value={contextCart}> {props.children}</CartContext.Provider>;
};

export default ContextProvider;
