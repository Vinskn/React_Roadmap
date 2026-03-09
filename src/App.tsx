import { Link } from 'react-router-dom';

function App() {
  return (
    <div className='p-10'>
        <h1 className='text-5xl font-bold mb-5'>React Roadmap</h1>

        <div>
            <Link to={'/foundation'}>
                <h2 className='text-2xl font-bold mb-2 mt-5 hover:underline hover:underline-offset-5 cursor-pointer'>
                    Foundational React ➡️
                </h2>
            </Link>
            <ul>
                <li>Components</li>
                <li>State & Props</li>
                <li>Event Handling</li>
            </ul>

            <Link to={'/intermediate'}>
                <h2 className='text-2xl font-bold mb-2 mt-5 hover:underline hover:underline-offset-5 cursor-pointer'>Intermediate React ➡️</h2>
            </Link>
            <ul>
                <li>Lifecycle & Hooks</li>
                <li>Conditional Rendering & Lists</li>
                <li>Forms & Controlled Components</li>
                <li>React Router</li>
                <li>Styling</li>
            </ul>

            <Link to={'/advance'}>
                <h2 className='text-2xl font-bold mb-2 mt-5 hover:underline hover:underline-offset-5 cursor-pointer'>Advanced React ➡️</h2>
            </Link>
            <ul>
                <li>Context API</li>
                <li>Hooks Deep Dive (useReducer, useCallback)</li>
                <li>Error Boundaries & Suspense</li>
                <li>High-Order Components</li>
                <li>Performance Optimization</li>
            </ul>

            <Link to={'/redux'}>
                <h2 className='text-2xl font-bold mb-2 mt-5 hover:underline hover:underline-offset-5 cursor-pointer'>Redux ➡️</h2>
            </Link>
        </div>
    </div>
  );
}

export default App;
