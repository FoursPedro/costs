import { useNavigate } from 'react-router-dom'
import { Axios } from '../../services/configAxios'
import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

function NewProject(){

    const navigate = useNavigate()

    function createPost(project){
        // initialize cost and services
        project.cost = 0
        project.services = []
          
        Axios.post('/projects', project)
        .then(console.log("deu certo"))
        .then((response) => {
          navigate('/projects', {state: {message:'Projeto criado com sucesso!'}})
        })
    }
    
    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )
}
export default NewProject