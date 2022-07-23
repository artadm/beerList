import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useSortedPosts } from '../../hooks/useSortedPosts'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import ItemsReducer, { RootState } from '../../store'
import './Home.scss'

const Home: React.FC = () => {
    const { items, loading } = useTypedSelector(state => state)
    const { fetchItems } = useActions()
    const [filter, setFilter] = useState('')
    const sortedposts = useSortedPosts(items, filter)



    useEffect(() => {
        fetchItems()
    }, [])


    return (
        !loading ?
            <main className='home__container container'>
                <div className="home__search">
                    <input value={filter} onChange={e => setFilter(e.target.value)} type="text" placeholder='Search by the name' />
                </div>
                <div className="home__list">
                    {sortedposts.map(el =>
                        <Link to={`/items/${el.id}`} key={el.id} className="list__item">
                            <div className="list__item-box">
                                <div className="list__item-img">
                                    <img src={el.image_url} alt="" />
                                </div>
                                <div className="list__item-title">
                                    {el.name}
                                </div>
                                <div className="list__item-description">
                                    <p>{el.description}</p>
                                </div>
                            </div>
                        </Link>)}
                </div>
            </main >
            :
            <div className='loading'>Loading...</div>
    )
}

export default Home