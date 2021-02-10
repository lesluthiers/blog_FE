import React, { useState } from 'react'

function App(): JSX.Element {
  const [message, setMessage] = useState(false)

  return (
    <div className="container mx-auto mt-5">
      <button
        onClick={() => setMessage(!message)}
        className="btn btn-blue btn-blue:hover"
      >
        Button
      </button>
      <div className="container mt-5">
        {message && <text>Hello Les luthiers team!</text>}
      </div>
    </div>
  )
}

export default App
