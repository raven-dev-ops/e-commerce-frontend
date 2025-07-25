'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CartClient() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userName, setUserName] = useState<string | null>(null)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      setIsLoggedIn(true)
      // Optionally, fetch user name from API or global store here
      setUserName('User') 
    } else {
      setIsLoggedIn(false)
      setUserName(null)
    }
  }, [])

  const redirectToLogin = () => {
    router.push('/auth/login')
  }

  return (
    <div>
      <h1>Your Cart</h1>
      {isLoggedIn ? (
        <p>Welcome, {userName || 'User'}!</p>
      ) : (
        <>
          <p>Please log in to view your cart.</p>
          <button
            onClick={redirectToLogin}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
          >
            Go to Login
          </button>
        </>
      )}
    </div>
  )
}
