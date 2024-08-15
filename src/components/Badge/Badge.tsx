import styles from './Badge.module.scss'

type propType={
    children: React.ReactNode,
    link?: string,
    color?: string,
}

export default function Badge({children, link, color}: propType): React.ReactElement{
    const isGithub = link && link.includes('github')
    let hexColor = color || '#3F1311'
    if(link){
        hexColor = '#DDDDDD'
        if(isGithub) hexColor = '#000000'
    }

    return <div className={styles.main} style={{color: hexColor, backgroundColor: hexColor+'30',border: '3px solid '+hexColor}}>
        {link ?  <a href={link} target="_blank" onClick={(e)=>{e.stopPropagation()}} style={{color: hexColor}}>🔗 {children}</a> : children}
    </div>
}