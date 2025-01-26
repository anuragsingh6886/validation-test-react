import React from 'react'
import './index.css'
import SignUpForm from './SignUpForm.jsx'

function App() {
  return (
    <>
      <header className="bg-gray-800 text-white text-center p-4 flex md:flex-row flex-col md:items-start md:space-x-4 md:space-y-0 space-y-4 justify-between items-center">
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-2 text-gray-100 uppercase tracking-wider leading-tight font-sans">Valid Form Test</h1>
          <p className="text-center text-sm text-gray-200 pt-2 md:pt-0"> - A simple form validation using React</p>
        </div>
        <div className="mb-4">
          <p className="text-center text-sm text-gray-100">
            <b><a href="https://github.com/anuragsingh6886">Get Code @GitHub</a></b>
          </p>
        </div>
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
