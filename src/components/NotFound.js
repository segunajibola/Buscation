import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="text-center p-24 bg-gray-100 dark:bg-gray-700 dark:text-white">
            <h2 className='font-bold text-2xl'>Ooooops!, we are so sorry. 🙇‍♀️</h2>
            <p className='font-bold text-xl'>This page cannot be found.</p>
            <p className='font-bold text-base mt-10'>Click <Link to="/" className='text-blue-500 underline'>here</Link> to go back to the homepage....Thanks!</p>
        </div>
    )
}

export default NotFound
