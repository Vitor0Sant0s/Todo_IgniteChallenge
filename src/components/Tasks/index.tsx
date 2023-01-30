import React from 'react';
import { ITodo } from '../../App';

import Task from '../Task';
import styles from './styles.module.css'

import { ClipboardText } from 'phosphor-react'

type Props = {
  data: ITodo[];
  onDeleteTodo: (id: string) => void;
  onFinishTodo: (id: string) => void;
}

const Tasks: React.FC<Props> = ({ data, onDeleteTodo, onFinishTodo }) => {

  if(data.length <= 0){
    return (
      <div className={styles.containerEmpty}>
        <ClipboardText />
        <h3>Você ainda não tem tarefas cadastradas</h3>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {data.map(task => (
        <Task 
          key={task.id}
          data={task}
          onFinishTodo={onFinishTodo}
          onDeleteTodo={onDeleteTodo}
        />
      ))}
    </div>
  );
}

export default Tasks;