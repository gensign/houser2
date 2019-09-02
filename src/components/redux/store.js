// import redux
import { createStore } from 'redux'

// import reducer
import reducer from './reducer'

// export createStore
export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())