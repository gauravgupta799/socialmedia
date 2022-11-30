import {
    legacy_createStore as createStore,
    applyMiddleware, 
    compose
} from "redux";
import thunk from "redux-thunk";
import reducers from "./Reducers/RootReducer";

function saveToLocalStorage(store){
    try {
        const serializedStore = JSON.stringify(store);
        window.localStorage.setItem("store", serializedStore);
    } catch (error) {
        console.log(error)
    }
}

function loadFromLocalStorage(){
    try {
        const serializedStore = window.localStorage.getItem("store");
        if(serializedStore === null) return undefined;
        return JSON.parse(serializedStore);
    } catch (error) {
        console.log(error)
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedState = loadFromLocalStorage();

const store = createStore(reducers,persistedState, composeEnhancers(applyMiddleware(thunk)));
console.log("store",store)
store.subscribe(()=> saveToLocalStorage(store.getState()));

export default store;
