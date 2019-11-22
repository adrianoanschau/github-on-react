import React, {useState} from 'react';
import {Dispatch, bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {AppState} from './store';
import {AddToDoAction, RemoveToDoAction} from './store/toDos/actions';
import {ToDoList} from './store/toDos/types';
import './App.scss';

const mapState = (state: AppState) => ({
    list: state.toDos.list
});

const mapDispatch = (dispatch: Dispatch) => bindActionCreators({
    AddToDo: AddToDoAction,
    RemoveToDo: RemoveToDoAction
}, dispatch);

interface AppProps {
    list: ToDoList;
    AddToDo: typeof AddToDoAction;
    RemoveToDo: typeof RemoveToDoAction;
}

const App: React.FC<AppProps> = ({ list, AddToDo, RemoveToDo }) => {

    const [value, setValue] = useState('');

  return (
    <div className="App">
        <p>App React!</p>
        <p><input type="text" value={value} onChange={(e) => setValue(e.target.value)}/></p>
        <p><button onClick={() => AddToDo(value)}>Add TODO!</button></p>
        {Array.from(list.keys()).map(key => <p><button onClick={() => RemoveToDo(key)}>{list.get(key)}</button></p>)}
    </div>
  );
};

export default connect(mapState, mapDispatch)(App);
