import styles from './Home.module.scss'
import profileImg from '../../assets/profile.png'
import CommandStarter from '../CommandStarter/CommandStarter'
import { Typewriter } from 'react-simple-typewriter'
import { useState, useEffect, useContext } from 'react'
import { RefContext } from '../../store/ref_store'

export default function Home(){
    const [isNameWritten, setIsNameWritten] = useState(false)
    const { homeRef } = useContext(RefContext)

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setIsNameWritten(true)
        },1000)

        return ()=>{
            clearTimeout(timer)
        }
    },[])

    return <div ref={homeRef} className={styles.main}>
        <div className={styles.imgContainer}>
            <img src={profileImg} alt='profile'/>
        </div>
        <p>
            <CommandStarter /> Hi! I'm&nbsp; 
            <b className={styles.name}>
                <Typewriter
                words={["Chloe"]}
                loop={1}
                cursor
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1000}
                />
            </b>,
            <br />
            <CommandStarter /> And I'm a&nbsp;
            <b className={styles.job}>
                {isNameWritten && 
                <Typewriter
                words={["Software Engineer"]}
                loop={1}
                cursor
                typeSpeed={60}
                deleteSpeed={50}
                delaySpeed={1000}
                />}
            </b>.
        </p>
    </div>
}