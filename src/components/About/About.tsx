import styles from './About.module.scss'
import Terminal from '../Terminal/Terminal'
import { useContext, useState } from 'react'
import { RefContext } from '../../store/ref_store'
import { linkedin, github } from '../../assets/social'
import link from '../../assets/link.png'
import useObserveIntersection from '../../hooks/useObserveIntersection'
import { ReactTyped } from "react-typed";

const TEXT = "Hello world! I'm Chloe, a software engineer who never settles for the status quo and constantly strives to identify and solve problems."
 + "<br /><br />I’m passionate about leveraging my math and computer science skills to tackle real-world challenges. When it comes to building a product, I don’t just want to \"build features\"—I want to be able to discover specific challenges and solve them."
 + "<br /><br />That's why in every project I've worked on, I've made it a point to continuously identify areas for improvement from a user experience perspective and address those issues. Whether it's optimizing an algorithm or enhancing a user interface, I’m always looking for ways to make a meaningful impact through my work."

export default function About(){
    const { aboutRef } = useContext(RefContext)
    const [targetRef, isIntersecting] = useObserveIntersection({
        root: null,
        rootMargin: '0px',
        threshold: 0.5, 
    })
    const [isTypeComplete, setIsTypeComplete] = useState(false)

    const handleComplete = ()=>{
        setIsTypeComplete(true)
    }

    return <div ref={aboutRef} className={styles.main}>
        <div className={styles.about} ref={targetRef as React.LegacyRef<HTMLDivElement>}>
            <h2>About</h2>
            {isIntersecting && <ReactTyped strings={[TEXT]} typeSpeed={1} onComplete={handleComplete}/>}
            {isTypeComplete &&
            <menu>
                <a href="https://www.linkedin.com/in/chloe-han-297372237/" target="_blank" style={{backgroundColor: '#2261af80', border: '3px solid #2261af'}}>
                    <img src={link} className={styles.link}/>
                    <img src={linkedin} />
                </a>
                <a href="https://github.com/jh7316" target="_blank" style={{backgroundColor: '#00000040', border: '3px solid #000000'}}>
                    <img src={link} className={styles.link}/>
                    <img src={github} />
                </a>
            </menu>
            }
        
        </div>
        <hr />
        <div className={styles.skills}>
            <h2>Skills</h2>
            <ul>
                <Terminal command='ls /skills/language' items={['Javascript','Typescript','Python','Java','HTML']}/>
                <Terminal command='ls /skills/framework' items={['React.js','Node.js','Express.js','Java Spring Boot','PyTorch','A-Frame(VR)']}/>
                <Terminal command='ls /skills/styling' items={['Vanilla CSS','SCSS','Tailwind CSS']}/>
                <Terminal command='ls /skills/VCS' items={['Git']}/>
            </ul>
        </div>
    </div>
}