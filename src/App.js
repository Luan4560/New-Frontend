import React, {useState, useEffect} from 'react';
import Header from './components/Header'
import './App.css'

import api from './service/api'

const App = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('/projects').then(response => {
      console.log(response)
      setProjects(response.data)
    })
  }, [])

 async function handleAddProject () {
    // setProjects([...projects, `Novo Projeto ${Date.now()}`])
   const response = await api.post('projects', {
      title: `Novo Projeto ${Date.now()}`,
      owner: "Luan Nascimento"
    })
    const project = response.data;
    setProjects([...projects, project])

    console.log(projects)
  }

  return(
    <> 
       <Header title="Projetos"/>
       <ul>
         {projects.map((item) => (
           <li key={item.id}>{item.title}</li>
         ))}
       </ul>

       <button type="button" onClick={ handleAddProject}>Adicionar projeto</button>
    </>

  ) 
} 

export default App;