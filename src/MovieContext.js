import {createContext, useState, useEffect} from 'react'

const FeedBackContext = createContext()

export const MovieProvider = ({children}) => {

    const [isLoading, setLoading] = useState(true)

    useEffect(() => {

    }, [])

    //Fetch a Movie

    const fetchFeedBack = async () => {
        const response = await fetch(`/movie`)
        const data = await response.json()
        setLoading(false)
    }

    const [feedBackEdit, setFeedBackEdit] = useState({
        item: {},
        edit: false
    })

    //Add Movie
    const addMovie = async (newMovie) => {

        const response = await fetch('/movie', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMovie)
        })

        const data = await response.json()
        setFeedBack([data, ...movie])
    }

    //Delete Movie
    const deleteMovie = async (id) => {
        if (window.confirm('Are you sure you want to delete ?')) {

            await fetch(`/movie/${id}`, {'method': 'DELETE'})

            setFeedBack(movie.filter((item) => item.id !== id))
        }
    }

    //Edit movie
    const editMovie = (item) => {
        setFeedBackEdit({
            item,
            edit: true
        })
    }

    //Update movie item

    const updateMovie = async (id, updateItem) => {
        const response = await fetch(`/movie/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
        const data = await response.json()

        setFeedBack(movie.map((item) => item.id === id ? {...item, ...data} : item))
    }

    return <FeedBackContext.Provider value={{
        movie,
        deleteMovie,
        addMovie,
        editMovie,
        feedBackEdit,
        updateMovie,
        isLoading
    }}>
        {children}
    </FeedBackContext.Provider>
}

export default FeedBackContext