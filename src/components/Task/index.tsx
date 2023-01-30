import React, { useCallback, useEffect, useState } from 'react';
import styles from './styles.module.css'
import { Trash } from 'phosphor-react';
import { ITodo } from '../../App';

type Props = {
  data: ITodo;
  onDeleteTodo: (id: string) => void;
  onFinishTodo: (id: string) => void;
}

const Task: React.FC<Props> = ({ data, onDeleteTodo, onFinishTodo }) => {

  const [checked, setChecked] = useState(false)
  const handleClick = () => {
    setChecked(!checked)
    onFinishTodo(data.id)
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <input
          type="checkbox"
          name="finishTodo" 
          id="finishTodo" 
          className='
          w-8
          h-8
          rounded-full
          bg-transparent
          cursor-pointer
          border-2
        border-blue-light
          outline-none
          focus:bg-transparent
          focus:border-none
          focus:outline-none
          focus:ring-0
          focus:ring-offset-transparent
        checked:focus:bg-purple-dark
        checked:bg-purple-dark
          checked:border-none
          checked:outline-none
        checked:hover:bg-purple-dark
        checked:focus:hover:bg-purple-light
          '
          onClick={handleClick} 
          defaultChecked={checked}
        />
        <p className={data.finished ? styles.finishedTodo : ''}>{data.text}</p>
      </div>
      <button onClick={() => onDeleteTodo(data.id)}>
        <Trash size={22}/>
      </button>
    </div>
  );
}

export default Task;