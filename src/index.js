import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach( crearTodoHtml );

todoList.todos[0].imprimirClase();

/* const tarea = new Todo('Aprender JavaScript');

todoList.nuevoTodo( tarea );

crearTodoHtml( tarea ); */

/* localStorage.setItem('mi-key', 'abc123');
sessionStorage.setItem('mi-key', 'abc123'); */
/* setTimeout( ()=>{
    localStorage.removeItem('mi-key');
}, 1500 ); */