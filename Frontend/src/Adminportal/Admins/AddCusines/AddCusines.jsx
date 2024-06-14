import React from "react";
import { useState } from "react";
import ToDoLists from "./ToDoList";
import EnterItem from "./InputItem";
import './cusineStyle.css'
const AddCusines = (props) => {
  const [item, setItem] = useState("");
  const [itemArr, setItemArr] = useState([]);

  const itemValue = (event) => {
    setItem(event.target.value);
  };

  const ChangeValue = () => {
    if (item !== "") {
      setItemArr([...itemArr, item]);
      setItem("");
    }
  };

  const deletitem = (id) => {
    console.log("delete");
    setItemArr((preValu) => {
      return preValu.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  const updateItem = (id, editValue) => {
    // console.log(id);
    // console.log(editValue);
    if (editValue !== "") {
      setItemArr((preValu) => {
        preValu[id] = editValue;
        return [...preValu];
      });
    }
  };
  const handleOnconfirm = (e) => {
    props.a([...itemArr]);
    console.log("Cusine has been added");
  };

  return (
    <>
      <div id="main">
        <div className="center_div">
          <br />
          <h1>{props.title}</h1>
          <br />
          <EnterItem
            id="task"
            type="string"
            placeholder="Add a Item"
            value={item}
            onChange={itemValue}
          />
          <div className="Buttons">
            <button id="btn" onClick={ChangeValue}>
              Add
            </button>
            <button onClick={handleOnconfirm}>Confirm</button>
          </div>
          <ol className="ListStyle">
            {itemArr.map((itemCur, index) => {
              return (
                <ToDoLists
                  className="list"
                  classNameDelete="delete"
                  classNameEdit="edit"
                  key={index}
                  id={index}
                  text={itemCur}
                  onSelect={deletitem}
                  onEdit={updateItem}
                />
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default AddCusines;
