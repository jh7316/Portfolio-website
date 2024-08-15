import styles from './Projects.module.scss'
import Project from './Project/Project.tsx'
import CommandStarter from '../CommandStarter/CommandStarter.tsx'
import { PROJECTS_WEB, PROJECTS_ML } from '../../utils/constants.tsx'
import { useContext } from 'react'
import { RefContext } from '../../store/ref_store.tsx'


export default function Projects(){
    const { projectsRef } = useContext(RefContext)

    return <div ref={projectsRef} className={styles.main}>
        <h2>Projects</h2>
        <div className={styles.projects}>
            <p><CommandStarter /> ls <b style={{color: '#04bc32'}}>/projects/web</b></p>
            <div className={styles.web}>{PROJECTS_WEB.map((item)=><Project key={item.title} {...item}/>)}</div>
            <p><CommandStarter /> ls <b style={{color: '#21f5f6'}}>/projects/ML</b></p>
            <div className={styles.ml}>{PROJECTS_ML.map((item)=><Project key={item.title} {...item}/>)}</div>
        </div>
    </div>
}