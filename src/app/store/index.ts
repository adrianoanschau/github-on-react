import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import toDosState, { ToDoState } from './toDos/state';
import {ToDosState} from './toDos/types';

const todoReducer: any = new ToDoState();

console.log(todoReducer);

const rootReducer = combineReducers({
    [todoReducer.name]: todoReducer.getReducer(),
});

export type AppState = {
    toDos: ToDosState
};

export default function (preloadedState = {}) {
    return createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware));
}
