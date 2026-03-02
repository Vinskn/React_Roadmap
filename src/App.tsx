import { useState } from 'react'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
        <h1>React Roadmap</h1>

        <div>
            <Link to={'/foundation'}>
                <h2>
                    Foundational React
                </h2>
            </Link>
            <ul>
                <li>Components</li>
                <li>State & Props</li>
                <li>Event Handling</li>
            </ul>

            <Link to={'/intermediate'}>
                <h2>Intermediate React</h2>
            </Link>
            <ul>
                <li>Lifecycle & Hooks</li>
                <li>Conditional Rendering & Lists</li>
                <li>Forms & Controlled Components</li>
                <li>React Router</li>
                <li>Styling</li>
            </ul>

            <h2>Advanced React</h2>
            <ul>
                <li>Context API</li>
                <li>Hooks Deep Dive (useReducer, useCallback)</li>
                <li>Error Boundaries & Suspense</li>
                <li>High-Order Components</li>
                <li>Performance Optimization</li>
            </ul>
        </div>
    </div>
  )
}

export default App
