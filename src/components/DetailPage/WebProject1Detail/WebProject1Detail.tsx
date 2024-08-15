import styles from './WebProject1Detail.module.scss'
import { preview_web_1 } from '../../../assets/preview'

export default function WebProject1Detail(){
    return <div className={styles.main}>
        <div className={styles.imgWithCaption}>
            <img src={preview_web_1} alt='main'/>
            <p>
            Interactive forest environment implemented on the web using A-Frame based on Three.js.
            It allows users to freely explore the forest and interact with animals that respond to user inputs.
            </p>
        </div>
        <ol>
            <li>
                <h3>Demo Video</h3>
                <iframe width="420" height="315"
                src="https://www.youtube.com/embed/WICuLq7G3ZQ">
                </iframe>
            </li>
            <li>
                <h3>Project Background</h3>
                <p>
                While taking an Interactive Computing course during college, I learned about A-Frame, a library for implementing web-based VR.
                Given that traditional VR often requires specialized equipment or games, which can limit accessibility, I became interested in web-based VR that allows for easy and accessible experiences from anywhere.
                <br /><br />
                This led me to design a VR forest environment that can be experienced on the web using A-Frame.
                </p>
            </li>
            <li>
                <h3>Project Detail</h3>
                <ul>
                    <li>
                    Implementation of the Perlin Noise Algorithm for creating hills
                    </li>
                    <li>
                    Implementation of collision detection logic between objects and interaction with animals
                    </li>
                    <li>
                    To address rendering issues caused by large 3D assets, objects such as rocks, trees, and clouds were replaced with basic geometric shapes.
                    </li>
                </ul>
            </li>
        </ol>
        
    </div>
}