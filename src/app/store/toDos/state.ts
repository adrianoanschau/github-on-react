import uuid from 'uuid';
import {ToDoActions, ToDoActionType, ToDosState} from './types';
import {Action, State} from '../decorators';
import {AddToDoAction, RemoveToDoAction} from './actions';

const initialState: ToDosState = {
    list: new Map(),
};

export default function toDosState(state = initialState, action: ToDoActions): ToDosState {
    const newList = new Map(state.list);
    switch(action.type) {
        case ToDoActionType.ADD_TODO:
            newList.set(uuid.v4(), action.text);
            break;
        case ToDoActionType.REMOVE_TODO:
            newList.delete(action.id);
            break;
    }
    return {
        ...state,
        list: newList
    };
}

@State<ToDosState>('toDos', initialState)
export class ToDoState {
    @Action(AddToDoAction)
    addToDo({ getState, setState }: any, { text }: any) {
        const prevState = getState();
        const newList = new Map(prevState.list);
        newList.set(uuid.v4(), text);
        setState({ list: newList });
    }

    @Action(RemoveToDoAction)
    removeToDo(context: any) {
        console.log({ context });
    }
}
