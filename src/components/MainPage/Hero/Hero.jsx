import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { setIsSearching, setSearchTerm } from '../../../store/slices/app.slices'

import image from '../../../assets/images/hero-image.png'

import s from './Hero.module.scss'


const Hero = () => {

    const dispatch= useDispatch()

    useEffect(() => {
        dispatch(setSearchTerm(''))
        dispatch(setIsSearching(false))
    }, [])

    return (
        <div className={s.hero}>
            <div className={s.column}>
                <div className={s.aboutSide}>
                    <h1 className={s.title}>COUNTRIES API</h1>
                    <p className={s.about}>Information about over 250 countries!</p>
                    <div className={s.getStartedButton} style={{cursor: 'pointer'}}>Get started</div>
                </div>
                <div className={s.imageSide}>
                    <div className={s.imageWrapper}>
                        <img className={s.image} src={image} alt='Hero Image'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;