import React from 'react';
import {Title} from './styles'
import { Container, Form, SubmitButton } from './styles'
import { FaGithubAlt, FaPlus} from 'react-icons/fa'


function Main() {
    return(
    <Container>
        <h1>
            <FaGithubAlt/>
            Repositórios
        </h1>

        <Form onSubmit={() => {}}>
            <input
             type="text"
             placeholder="Adicionar Repositório"></input>
        </Form>

        <SubmitButton disabled>
            <FaPlus color="#FFF" size={14}/>
        </SubmitButton>
    </Container>
    )
}

export default Main;
