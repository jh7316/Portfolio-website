import styles from './Terminal.module.scss'
import CommandStarter from '../CommandStarter/CommandStarter'

type propType = {
    command: string,
    items: string[],
}

export default function Terminal({command, items}: propType):React.ReactElement{
    return <div className={styles.main}>
        <div className={styles.topBar}>
            <div /><div /><div />
        </div>
        <div className={styles.content}>
            <p><CommandStarter />{command}</p>
            <ul>
                {items.map((item)=><li key={item}>{item}</li>)}
            </ul>
        </div>
    </div>
}