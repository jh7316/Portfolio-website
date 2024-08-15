import styles from './DetailModal.module.scss'

type propType = {
    buttonSpec: {
        top: number,
        left: number,
        width: number,
        height: number
    },
    children: React.ReactNode,
    closeModal: ()=>void
}

export default function DetailModal({children, buttonSpec, closeModal}: propType): React.ReactElement{
    const stopClose = (e: React.MouseEvent)=>{
        e.stopPropagation()
    }

    return <div className={styles.bg} onClick={closeModal}>
        <div className={styles.main} style={{...buttonSpec}} onClick={stopClose}>
            {children}
        </div>
    </div>
}