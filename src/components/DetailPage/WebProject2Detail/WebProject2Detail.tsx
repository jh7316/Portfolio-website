import styles from './WebProject2Detail.module.scss'
import { preview_web_2 } from '../../../assets/preview'

export default function WebProject2Detail(){
    return <div className={styles.main}>
        <div className={styles.imgWithCaption}>
            <img src={preview_web_2} alt='main'/>
            <p>
                Web application that uses a Map API to allow users to freely add and check locations with public power outlets within New York
            </p>
        </div>
        <ol>
            <li>
                <h3>Project Background</h3>
                <p>
                In New York, a web service that informs the locations of public restrooms in Manhattan has gained significant popularity.
                <br /><br />
                Similarly, given the popularity of spaces for extended laptop use among students, we planned a web service to locate cafes and public places with power outlets in New York.
                <br /><br />
                Since it was my first web project, I learned a lot about backend knowledge as well as the fundamental concepts of web development.
                </p>
            </li>
            <li>
                <h3>
                    Project Details
                </h3>
                <p>BE Development</p>
                <ul>
                    <li>
                        Endpoint design and API implementation using Java Spring Boot
                    </li>
                    <li>
                        Frontend integration with APIs and issue resolution.
                    </li>
                </ul>
            </li>
        </ol>
    </div>
}