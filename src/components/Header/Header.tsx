import styles from './Header.module.scss'
import { useContext } from 'react'
import { RefContext } from '../../store/ref_store'

export default function Header(){
    const { projectsRef, homeRef, aboutRef, contactRef} = useContext(RefContext)
    const DIC = {
        'Home': homeRef,
        'About': aboutRef,
        'Projects': projectsRef,
        'Contact': contactRef,
    }

    const handleClick=(item:string)=>{
        const targetRef = DIC[item as keyof typeof DIC]       
        if (targetRef?.current) {
            targetRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    }

    return <header className={styles.main}>
        <menu>
            {Object.keys(DIC).map((item)=><li key={item} onClick={()=>handleClick(item)}>{item}</li>)}
        </menu>
    </header>
}