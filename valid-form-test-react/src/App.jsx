import React from 'react'
import './index.css'
import SignUpForm from './SignUpForm.jsx'

function App() {
  return (
    <>
      <header className="bg-gray-800 text-white text-center p-4">
        <h1 className="text-2xl font-bold mb-2 text-gray-100 uppercase tracking-wider leading-tight font-sans">Valid Form Test</h1>
      </header>
      <SignUpForm />
      <footer className="bg-gray-800 text-white text-center p-4">
        <p className="text-center text-sm text-gray-100">
          &copy; 2025 <b><a href="https://github.com/anuragsingh6886">Anurag Singh</a></b>. All rights reserved.
        </p>
      </footer>
    </>
  )
}

export default App
