import React from 'react'
import { UserContext } from './components/UserContext'
import { Provider } from 'react'
import { RouterProvider } from 'react-router-dom'
import Routes from './components/Router'
import { useState } from 'react'

const App = () => {
    const [user,setuser]=useState("");

  return (
    <div>
        <UserContext.Provider value={[user,setuser]}>
    <RouterProvider router={Routes}></RouterProvider></UserContext.Provider>
    </div>
  )
}

export default App