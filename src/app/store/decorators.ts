import { AnyAction } from 'redux';

function getState<T>(state: T) {
    return () => state;
}

function setState<T>() {
    return (newState: T) => console.log({ newState });
}

export function State<S = {}>(name: string, initialState: S) {
    return function<T extends {new(...args: any[]):{}}>(constructor: T) {
        const reducers = constructor.prototype.reducers || [];
        return class extends constructor {
            name = name;
            getReducer() {
                return function (state: S = initialState, action: AnyAction): S {
                    if (typeof reducers[action.type] === 'function') {
                        reducers[action.type]({ getState: getState<S>(state), setState: setState<T>() }, action)
                    }
                    return state;
                };
            }
        }
    }
}

interface ActionType {
    (): AnyAction;
}

export function Action(Action: Function) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        if (!target.hasOwnProperty('reducers')) {
            Object.assign(target, { reducers: {} });
        }
        target.reducers[Action().type] = target[propertyKey];
    }
}
