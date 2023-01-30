import React, { FormEvent, useCallback, useEffect, useState } from 'react'
import Header from './components/Header'
import styles from './App.module.css'
import { PlusCircle } from 'phosphor-react'
import Tasks from './components/Tasks'


export interface ITodo {
  id: string;
  finished: boolean;
  text: string
}

function App() {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState<ITodo[]>([])

  const finishedTodos = todos.filter(todo => todo.finished === true).length

  function handleCreateTodo(event: FormEvent<HTMLFormElement>){
    event.preventDefault()
    const teste = { id: crypto.randomUUID(), text: todo, finished: false }

    setTodos(state => [...state, teste])
    setTodo('')
  }

  function deleteTodo(id:string){
    const nextTodos = todos.filter(todo => todo.id !== id)
    setTodos(nextTodos)
  }

  function finishTodo(id: string){
    const nextTodos = todos.map(todo => todo.id === id ? {...todo, finished: !todo.finished} : todo)
    setTodos(nextTodos)
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <form onSubmit={handleCreateTodo}>
          <input 
            id="todo"
            type="text" 
            name="todo" 
            required
            value={todo}
            className={styles.input} 
            onChange={(e) => { setTodo(e.target.value) }}
          />
          <button className={styles.button}>
            Criar
            <PlusCircle size={22} />
          </button>
        </form>

        <div className={styles.tasks}>
          <div className={styles.taskStatus}>
            <div>
              <span className={styles.tasksStatusCreated}>Tarefas criadas</span>
              <span className={styles.tasksStatusQtd}>{todos.length}</span>
            </div>
            <div>
              <span className={styles.tasksStatusFinish}>Concluidas</span>
              <span className={styles.tasksStatusQtd}>{finishedTodos} de {todos.length}</span>
            </div>
          </div>
          <Tasks 
            data={todos} 
            onDeleteTodo={deleteTodo} 
            onFinishTodo={finishTodo}
          />
        </div>
      </div>
    </>
  )
}

export default App
