import styles from './Contact.module.scss'
import { useContext } from 'react'
import { RefContext } from '../../store/ref_store'

export default function Contact(){
    const { contactRef } = useContext(RefContext)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const name = formData.get('name') || ''
        const subject = formData.get('subject') || ''
        const comment = formData.get('comment') || ''

        const aTag = document.createElement('a');
        aTag.setAttribute('href',  `mailto:chloehan@gmail.com?subject=${subject}&body=${'From '+name+'%0A%0A'+comment}`);
        aTag.setAttribute('target', '_blank');
        aTag.setAttribute('rel', 'noopener noreferrer'); // Security best practice
        aTag.textContent = '';

        aTag.click();

    }

    return <div ref={contactRef} className={styles.main}>
        <h2>Contact Me</h2>
        <p>
            For any comments, questions, or coffee chats! Also open to starting cool projects.
            <br />Or a straight shot to my inbox: <b>chloehan0736@gmail.com</b>
        </p>
        <form action="#" method="post" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input type="text" id="name" name="name" placeholder='YOUR NAME' required />

            <label>Subject:</label>
            <input type="text" id="subject" name="subject" placeholder='SUBJECT' required />

            <label>Comment:</label>
            <textarea id="comment" name="comment" required></textarea>

            <button type='submit'>Submit</button>
        </form>
    </div>
}