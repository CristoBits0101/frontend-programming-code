import React, { useState, useEffect } from "react"
import "./App.css"

export default function App() {
  // useState.
  const [value, setValue] = useState(0)

  // useEffect.

  return (
    <div>
      <h1>The value is: {value}</h1>
      <button
        onClick={() => {
          setValue(value + 1)
        }}
      >
        Update value
      </button>
    </div>
  )
}
