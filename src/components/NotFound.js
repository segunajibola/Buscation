import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="text-center text-indigo-500">
            <h2 className='font-bold text-2xl'>Ooooops!, we are so sorry. 🙇‍♀️</h2>
            <p className='font-bold text-xl'>This page cannot be found.</p>
            <p>Click <Link to="/">here</Link> to go back to the homepage.... Thanks!</p>
        </div>
    )
}

export default NotFound
