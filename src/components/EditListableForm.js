import React, {useState} from 'react'

export const EditListableForm = ({editListable, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // Empêcher l'action par défaut
        e.preventDefault();
        // Modifier l'élément Listable
        editListable(value, task.id);
      };
  return (
    
    <form onSubmit={handleSubmit} className="ListableForm">
    <input 
      type="text" 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
      className="listable-input"
      placeholder='Mettre à jour la tâche'
    />
    <button type="submit" className='listable-btn'>Mettre à jour</button>
  </form>
  )
}