import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="GitHub Explorer" />
      <Title>Explore Repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositorio" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/62856604?s=460&v=4"
            alt="Felipe Lima"
          />
          <div>
            <strong>rockeatseat/unform</strong>
            <p>Easy peasy highly scalable reactJS & React Native Forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/62856604?s=460&v=4"
            alt="Felipe Lima"
          />
          <div>
            <strong>rockeatseat/unform</strong>
            <p>Easy peasy highly scalable reactJS & React Native Forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars0.githubusercontent.com/u/62856604?s=460&v=4"
            alt="Felipe Lima"
          />
          <div>
            <strong>rockeatseat/unform</strong>
            <p>Easy peasy highly scalable reactJS & React Native Forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
