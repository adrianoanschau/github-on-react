import {AddToDoActionType, RemoveToDoActionType, ToDoActionType} from './types';

export const AddToDoAction = (text: string): AddToDoActionType => ({
  type: ToDoActionType.ADD_TODO,
  text
});

export const RemoveToDoAction = (id: string): RemoveToDoActionType => ({
  type: ToDoActionType.REMOVE_TODO,
  id
});
