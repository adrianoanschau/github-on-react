export enum ToDoActionType {
    ADD_TODO = '[TODO] ADD',
    REMOVE_TODO = '[TODO] REMOVE',
}

export type AddToDoActionType = {
    type: ToDoActionType.ADD_TODO,
    text: string,
}

export type RemoveToDoActionType = {
    type: ToDoActionType.REMOVE_TODO,
    id: string,
}

export type ToDoActions = AddToDoActionType & RemoveToDoActionType;

export type ToDoList = Map<string, string>;

export type ToDosState = {
    list: ToDoList;
}
