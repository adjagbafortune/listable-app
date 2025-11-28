import React, {useState} from 'react'

export const ListableForm = ({addListable}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
      // Empêcher l'action par défaut
        e.preventDefault();
        if (value) {
          // Ajouter l'élément Listable
          addListable(value);
          // Vider le formulaire après la soumission
          setValue('');
        }
      };
  return (
    <form onSubmit={handleSubmit} className="ListableForm"> 
    <input 
      type="text" 
      value={value} 
      onChange={(e) => setValue(e.target.value)} 
      className="listable-input"
      placeholder="Quelle est votre tâche aujourd'hui ?"
    />
    <button type="submit" className='listable-btn'>AJOUTER</button>
  </form>
  )
}