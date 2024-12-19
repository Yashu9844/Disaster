// import './App.css'
import { SignInButton, SignedIn, SignedOut, UserButton, useAuth, useUser } from '@clerk/clerk-react'
import { useState } from 'react'

function App() {
  const { getToken } = useAuth()
  const { user } = useUser() // Access user details
  const [data, setData] = useState({})

  async function callProtectedAuthRequired() {
    const token = await getToken()
    const res = await fetch('http://localhost:3000/protected-auth-required', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const json = await res.json()
    setData(json)
  }

  async function callProtectedAuthOptional() {
    const token = await getToken()
    const res = await fetch('http://localhost:3000/protected-auth-optional', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    const json = await res.json()
    setData(json)
  }

  return (
    <>
      <p>Hello World!</p>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
        <h2>Phone Number:</h2>
        <p>{user?.phoneNumbers?.[0]?.phoneNumber || "Phone number not available"}</p>
        <button onClick={callProtectedAuthRequired}>Call /protected-auth-required</button>
        <button onClick={callProtectedAuthOptional}>Call /protected-auth-optional</button>
        <h1>Data from API:</h1>
        <p>{JSON.stringify(data, null, 2)}</p>
      </SignedIn>
    </>
  )
}

export default App
