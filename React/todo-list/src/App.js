import { atom, selector, useRecoilValue } from 'recoil'
import axios from 'axios'

const todoIdState = atom({
  key: 'todoIdState',
  default: 1
})

const todoItemQuery = selector({
  key: 'todoItemQuery',
  get: async ({ get }) => {
    const id = get(todoIdState)
    const res = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)

    return res.data
  }
})

function App() {
  const data = useRecoilValue(todoItemQuery)
  console.log(data)

  return (
    <>
      { data.title }
      { data.id }
    </>
  );
}

export default App;
