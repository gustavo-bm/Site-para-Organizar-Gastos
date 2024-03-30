import { useNavigate } from 'react-router-dom'

import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

function NewProject() {
  const navigate = useNavigate()

  function createPost(project) {
    // inicializa custo e serviços
    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        navigate('/projects', { message: 'Card criado com sucesso!' })
      })
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Adicionar uma nova despesa</h1>
      <p>Crie seu novo card para depois adicionar os detalhes</p>
      <ProjectForm handleSubmit={createPost} btnText="Adicionar" />
    </div>
  )
}

export default NewProject