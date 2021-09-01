const redux = require('redux');
const createStore = redux.createStore;
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger();
const applyMiddleware = redux.applyMiddleware;
const combineReducers = redux.combineReducers;

//actions 
const ADD_SUBSCRIBER = 'ADD_SUBSCRIBER';
const ADD_VIEWCOUNT = 'ADD_VIEWCOUNT';

const addSubscriber = () => {
    return {
        type: ADD_SUBSCRIBER
    }
}
const addViewCount = () => {
    return {
        type: ADD_VIEWCOUNT
    }
}


//reducer
const subscriberState = {
    subcribers: 365
}

const subscribereducer = (state= subscriberState, action) => {
    switch(action.type){
        case ADD_SUBSCRIBER:
            return{
                ...state,
                subcribers: state.subcribers + 1
            }
        default: return state;
    }
}

const viewState = {
    viewCount : 100
}
const viewReducer = (state= viewState, action) => {
    switch(action.type){
        case ADD_VIEWCOUNT:
            return{
                ...state,
                viewCount: state.viewCount +1
            }
        default: return state

    }
}   

const rootReducer = combineReducers({
    view : viewReducer,
    subscriber: subscribereducer
})

//store 
const store = createStore(rootReducer, applyMiddleware(logger));

// store.subscribe(() => {
//     console.log('subscribe ==>>', store.getState())
// })

store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addSubscriber());
store.dispatch(addViewCount());
store.dispatch(addViewCount());
store.dispatch(addViewCount());

