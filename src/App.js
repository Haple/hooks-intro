import React, { useState, useEffect } from 'react';

function App() {
  const [techs, setTechs] = useState([
    'ReactJS',
    'React Native',
    'NodeJS',
    'React Hooks',
  ]);

  const [newTech, setNewTech] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setTechs([...techs, newTech]);
    setNewTech('');
  }

  useEffect(() => {
    const storedTechs = localStorage.getItem('techs');
    if (storedTechs) setTechs(JSON.parse(storedTechs));
  }, []);

  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

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
