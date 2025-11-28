import React, {useState, useEffect} from 'react'
// Mise à jour des imports
import { ListableForm } from './ListableForm'
import { v4 as uuidv4 } from 'uuid';
import { Listable } from './Listable';
import { EditListableForm } from './EditListableForm';
uuidv4();

export const ListableWrapperLocalStorage = () => {
    const [listables, setListables] = useState([])

    useEffect(() => {
        const savedListables = JSON.parse(localStorage.getItem('listables')) || [];
        setListables(savedListables);
    }, []);

    const addListable = listable => {
        const newListables = [...listables, {id: uuidv4(), task: listable, completed: false, isEditing: false}];
        setListables(newListables);
        localStorage.setItem('listables', JSON.stringify(newListables));
    }

    const toggleComplete = id => {
        const newListables = listables.map(listable => listable.id === id ? {...listable, completed: !listable.completed} : listable);
        setListables(newListables);
        localStorage.setItem('listables', JSON.stringify(newListables));
    }

    const deleteListable = id => {
        const newListables = listables.filter(listable => listable.id !== id);
        setListables(newListables);
        localStorage.setItem('listables', JSON.stringify(newListables));
    }

    const editListable = id => {
        setListables(listables.map(listable => listable.id === id ? {...listable, isEditing: !listable.isEditing} : listable))
    }

    const editItem = (task, id) => {
        const newListables = listables.map(listable => listable.id === id ? {...listable, task, isEditing: !listable.isEditing} : listable);
        setListables(newListables);
        localStorage.setItem('listables', JSON.stringify(newListables));
    }
    
  return (
    <div className='ListableWrapper'>
        <h1>FAITES AVANCER LES CHOSES !</h1> 
        <ListableForm addListable={addListable} /> 
        {listables.map((listable, index) => ( 
            listable.isEditing ? (
                <EditListableForm editListable={editItem} task={listable} key={index} /> 
            ) : (
                <Listable 
                  task={listable} 
                  key={index} 
                  toggleComplete={toggleComplete} 
                  deleteListable={deleteListable} 
                  editListable={editListable} 
                />
            )
        ))}
    </div>
  )
}