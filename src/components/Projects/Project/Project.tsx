import styles from './Project.module.scss'
import DetailModal from '../DetailModal/DetailModal'
import Badge from '../../Badge/Badge'
import { ROLE_BADGE_COLORS, TECH_STACK_BADGE_COLORS } from '../../../utils/constants'
import { github } from '../../../assets/social'
import {useState, useRef, useEffect} from 'react'

type propType = {
    preview: string,
    title: string,
    description: string,
    githubLink: string,
    role: string[],
    techStack: string[],
    teamSize: number,
    serviceLink?: string,
    period: string,
    detail: React.ReactNode
}

export default function Project({preview, title, description, githubLink, role, techStack, teamSize, serviceLink, period, detail}: propType): React.ReactElement{
    const [isOpen,setIsOpen] = useState(false)
    const [buttonSpec, setButtonSpec] = useState({top: 0, left: 0, width: 0, height: 0})
    const previewRef = useRef<HTMLDivElement>(null)

    const closeModal = ()=>{
        setIsOpen(false)
    }


    const handleClick = ()=>{
        if(previewRef?.current){
            const rect = previewRef.current.getBoundingClientRect()
            setButtonSpec({ top: rect.top, left: rect.left, width: rect.width, height: rect.height })
            setIsOpen(true)
        }
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup function to reset overflow when the component unmounts or modal is closed
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);
    
    return <>
    <div className={styles.main} ref={previewRef} onClick={handleClick}>
        <img src={preview} alt='preview' />
        <div className={styles.text}>
            <h3>{title}</h3>
            <div className={styles.links}>
                {serviceLink && <Badge link={serviceLink}>link</Badge>}
                <Badge link={githubLink}><img src={github}/></Badge>
            </div>
            <p>{description}</p>
            <table>
                <tr>
                    <th>Role</th>
                    <td className={styles.list}>
                        {role.map((item, key)=><Badge key={item} color={ROLE_BADGE_COLORS[key]}>{item}</Badge>)}
                    </td>
                </tr>
                <tr>
                    <th>Tech Stack</th>
                    <td className={styles.list}>
                        {techStack.map((item, key)=><Badge key={item} color={TECH_STACK_BADGE_COLORS[key]}>{item}</Badge>)}
                    </td>
                </tr>
                <tr>
                    <th>Team Size</th>
                    <td> &nbsp;{teamSize}</td>
                </tr>
                <tr>
                    <th>Period</th>
                    <td>{period}</td>
                </tr>
            </table>
        </div>
    </div>
    {
        isOpen && <DetailModal buttonSpec={buttonSpec} closeModal={closeModal}>
            {detail}
        </DetailModal>
    }
    </>
}