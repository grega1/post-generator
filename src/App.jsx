import { Provider } from 'react-redux'
import './App.css'
import PostList from './components/PostList/PostList'
import { store } from './app/store'

function App() {
 
  return (
    <Provider store={store}>
    <main>
     <h1> Post Generator </h1>
     <PostList/>
    </main>
    </Provider>
  )
}

export default App
