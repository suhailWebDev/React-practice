import React, { useState } from "react";
import todo from "../images/todo.svg";

export const TodoList = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const[toggleSubmit,setToggleSubmit]=useState(true);
  const[isEditItem,setIsEditItem]=useState(null);
  const addItem = () => {
    if (!inputData) {
        alert('Please Fill the Data')
    }else if(inputData && !toggleSubmit){
        setItems(
            items.map((elem)=>{
                if(elem.id===isEditItem){
                    return {...elem,name:inputData}
                }
                return elem;
            })
        )
        setToggleSubmit(true);
        setInputData("");
        setIsEditItem(null);
    }else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((elem) => {
      return index !== elem.id;
    });
    setItems(updatedItems);
  };

  const removeAll = () => {
    setItems([]);
  };

  const editItem = (id) => {
    setToggleSubmit(false);
    let newEditItem=items.find((elem)=>{
        return elem.id===id
    });
    setInputData(newEditItem.name);
    setIsEditItem(id);
  };

  return (
    <div className="main-div">
      <div className="child-div">
        <figure>
          <img src={todo} alt="todo logo" />
          <figcaption>Add Your List Here✌️</figcaption>
        </figure>
        <div className="addItems">
          <input
            type="text"
            placeholder="✍️ Add Items..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
          {toggleSubmit?  <i
            className="fa fa-plus add-btn"
            title="Add Item"
            onClick={addItem}
          ></i>:<i
            className="fa fa-edit add-btn"
            title="Update Item"
            onClick={addItem}
          ></i>}
        </div>
        <div className="showItems">
          {items.map((elem) => {
            return (
              <div className="eachItem" key={elem.id}>
                <h3>{elem.name}</h3>
                <div className="todo-btn">
                  <i
                    className="far fa-edit add-btn"
                    title="Edit Item"
                    onClick={() => editItem(elem.id)}
                  ></i>
                  <i
                    className="far fa-trash-alt add-btn"
                    title="Delete Item"
                    onClick={() => deleteItem(elem.id)}
                  ></i>
                </div>
              </div>
            );
          })}
        </div>
        {/* {clear all button} */}
        <div className="showItems">
          <button
            className="btn effect04"
            data-sm-link-text="Remove All"
            onClick={removeAll}
          >
            <span>CHECK LIST</span>
          </button>
        </div>
      </div>
    </div>
  );
};
