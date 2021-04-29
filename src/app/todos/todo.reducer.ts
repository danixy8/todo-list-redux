import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const estadoInicial: Todo[] = [
  new Todo('Buscar a Vianney'),
  new Todo('Salir a trotar'),
  new Todo('Leer un libro'),
];

const _crearReducer = createReducer(
  estadoInicial,
  on(actions.crear, (state, {texto}) => [...state, new Todo(texto)]),
  on(actions.toggle, (state, {id}) => {
    return state.map(todo => todo.id === id ? {...todo, completado: !todo.completado} : todo );
  }),
  on(actions.editar, (state, {id, texto}) => {
    return state.map(todo => todo.id === id ? {...todo, texto} : todo );
  }),
  on(actions.eliminar, (state, {id}) => {
    return state.filter(todo => todo.id !== id );
  }),
  on(actions.toggleAll, (state, {toggle}) => {
    return state.map(todo => toggle ? {...todo, completado: true} : {...todo, completado: false} );
  }),
  on(actions.eliminarCompletados, (state) => {
    return state.filter(todo => !todo.completado);
  })
);

export function todoReducer(state: Todo[] | undefined, action: Action): any {
  return _crearReducer(state, action);
}
