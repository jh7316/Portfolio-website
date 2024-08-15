import styles from './Footer.module.scss'
import CommandStarter from '../CommandStarter/CommandStarter'
import { useContext } from 'react'
import { RefContext } from '../../store/ref_store'

export default function Footer(){
    const { homeRef } = useContext(RefContext)

    const handleClick=()=>{
        if(homeRef?.current) homeRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    return <div className={styles.main}>
        <button onClick={handleClick}>Back To Top</button>
        <p><CommandStarter /> Designed by Chloe Han 2024</p>
    </div>
}