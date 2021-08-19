import './styles.css';

import {Todo,TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

//todoList.todos.forEach(todo => crearTodoHtml(todo)); <-Cumple la misma funcion que la linea 9
todoList.todos.forEach(crearTodoHtml); //Solo funciona con 1 argumento

console.log(todoList.todos);
//todoList.todos[0].imprimirClase();
/*const tarea = new Todo('Aprender Javascript');

todoList.nuevoTodo(tarea);
tarea.completado = false;

console.log(todoList);

crearTodoHtml(tarea);

//SessionStorage elimina todo al cerrar el navegador web
//sessionStorage.setItem('mi-key', 'ABC123');
//LocalStorage no posee tiempo de expiración 
//localStorage.setItem('mi-key', 'ABC123');




//Eliminar Storage
//setTimeout(() => {
//    localStorage.removeItem('mi-key');
//}, 1500);
*/