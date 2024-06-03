// import { useState } from "react";

const ToDoLists = (props) => {
  // const [editInput, setEditInput] = useState("");
  // const [addInEdit, setAddInEdit] = useState({
  //   show: false
  // });

  // const EditItem = () => {
  //   console.log("edit");
  //   setAddInEdit({ show: true });
  // };
  // const funEditUpdate = (event) => {
  //   setEditInput(event.target.value.trim());
  // };
  return (
    <>
      <div className="todo_style">
        <button
          className={props.classNameDelete}
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          X
        </button>
        <li className={props.className}>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoLists;