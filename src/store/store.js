import { createStore, combineReducers} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import completedTasksReducer from "./reducers/CompletedTasks.reducer.js";
import notCompletedTasksReducer from './reducers/notCompletedTasks.reducer.js'

const rootReducer = combineReducers({
    notCompletedTasks: notCompletedTasksReducer,
    completedTasks: completedTasksReducer,
})

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer)

const persistor = persistStore(store)

export { store, persistor };