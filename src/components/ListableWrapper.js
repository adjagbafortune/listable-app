import React, { useState } from "react";
import { Listable } from "./Listable"; 
import { ListableForm } from "./ListableForm";
import { v4 as uuidv4 } from "uuid";
import { EditListableForm } from "./EditListableForm";

export const ListableWrapper = () => {
    const [listables, setListables] = useState([]);

    const addListable = (listable) => {
        setListables([
          ...listables,
          { id: uuidv4(), task: listable, completed: false, isEditing: false },
        ]);
    }

    const deleteListable = (id) => setListables(listables.filter((listable) => listable.id !== id));

    const toggleComplete = (id) => {
        setListables(
          listables.map((listable) =>
            listable.id === id ? { ...listable, completed: !listable.completed } : listable
          )
        );
    }

    const editListable = (id) => {
        setListables(
          listables.map((listable) =>
            listable.id === id ? { ...listable, isEditing: !listable.isEditing } : listable
          )
        );
    }

    const editItem = (task, id) => {
        setListables(
          listables.map((listable) =>
            listable.id === id ? { ...listable, task, isEditing: !listable.isEditing } : listable
          )
        );
    };

    return (
        <div className="ListableWrapper">
          <h1>🛡️ Listable App</h1><br></br>
          <h2>FAITES AVANCER LES CHOSES !</h2>
          <ListableForm addListable={addListable} /> 
          {listables.map((listable) =>
            listable.isEditing ? (
              <EditListableForm editListable={editItem} task={listable} key={listable.id} /> 
            ) : (
              <Listable
                key={listable.id}
                task={listable}
                deleteListable={deleteListable}
                editListable={editListable}
                toggleComplete={toggleComplete}
              />
            )
          )}
        </div>
    );
};