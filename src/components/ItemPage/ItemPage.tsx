import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { IBeer } from '../../modal/IBeer'
import './ItemPage.scss'


const ItemPage: React.FC = () => {
    const { id } = useParams()
    const { fetchCurrentItem } = useActions()
    const { item, loading } = useTypedSelector(state => state)
    useEffect(() => {
        fetchCurrentItem(Number(id))
    }, [])


    return (
        !loading ?
            <div className="item__container container">
                <div className='item'>
                    <div className="item__img">
                        <img src={item.image_url} alt="" />
                    </div>
                    <div className="item__content">
                        <h1 className="item__title">{item.name}</h1>
                        <div className="item__tagline">{item.tagline}</div>
                        <div className="item__description">
                            <h2>Description</h2>
                            <p>
                                {item.description}
                            </p>
                        </div>
                        <div className="item__foodpair">
                            <h2>Food Pairing</h2>
                            <ul>
                                {item.food_pairing.map(pair =>
                                    <li key={pair}>{pair}</li>
                                )}
                            </ul>
                        </div>
                        <Link to='/' className="item__btn">
                            Go back
                        </Link>
                    </div>
                </div>
            </div>
            :
            <div className="loading"></div>
    )
}

export default ItemPage