import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

const UserContext = createContext()

const Belajar04 = () => {
  const [user, setUser] = useState('selamat datang mughni')

  return (
    <UserContext.Provider value={user}>
      <h1>{`Halo ${user} Semangat`}</h1>
    </UserContext.Provider>
  )
}

export default Belajar04