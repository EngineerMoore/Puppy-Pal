import { puppyList } from './data'
import { useState } from 'react'

function App() {
  console.log(`puppies:`, puppyList)
  const [puppies, setPuppies] = useState(puppyList)
  const [featPupId, setFeatPupId] = useState(null)
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  return (
    <>

      {
        puppies.map((puppy) => {
          
          return <p onClick={()=>{
            setFeatPupId(puppy.id)
          }} key={puppy.id}>{puppy.name}</p>
        })
        
      }
      {
        console.log(featuredPup)
      }
      {
        featPupId && (
          <div>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
      )}

    </>
  )
}

export default App
