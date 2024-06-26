import { useState } from 'react'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

import styles from '../project/ProjectForm.module.css'

function ServiceForm({ handleSubmit, btnText, projectData }) {
  const [service, setService] = useState({})

  const submit = (e) => {
    e.preventDefault()
    projectData.services.push(service)
    handleSubmit(projectData)
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome"
        name="name"
        placeholder="Insira o nome"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Custo"
        name="cost"
        placeholder="Insira o valor total"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descrição"
        name="description"
        placeholder="Descreva"
        handleOnChange={handleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  )
}

export default ServiceForm