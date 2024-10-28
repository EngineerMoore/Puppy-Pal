import { puppyList } from './data'
import { useState } from 'react'

function App() {
  console.log(`puppies:`, puppyList)
  const [puppies, setPuppies] = useState(puppyList)
  return (
    <>
      {
        puppies.map((puppy) => {
          return <p key={puppy.id}>{puppy.name}</p>
        })
      }
    </>
  )
}

export default App
