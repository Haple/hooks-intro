import React, { useState } from 'react';

function App() {
  const [techs, setTech] = useState([
    'ReactJS',
    'React Native',
    'NodeJS',
    'React Hooks',
  ]);
  const [newTech, setNewTech] = useState('');
  function handleSubmit(e) {
    e.preventDefault();
    setTech([...techs, newTech]);
    setNewTech('');
  }
  return (
    <>
      <ul>
        {techs.map(tech => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <form>
        <input
          placeholder="Nova tecnologia"
          type="text"
          value={newTech}
          onChange={e => setNewTech(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>
          Adicionar
        </button>
      </form>
    </>
  );
}

export default App;
