import styles from './WebProject3Detail.module.scss'
import { logo,figma, architecture,servicePic1,servicePic2 } from '../../../assets/WebProject3'

export default function WebProject3Detail(){
    return <div className={styles.main}>
        <div className={styles.imgWithCaption}>
            <img src={logo} alt='logo' />
            <p>
            "Oh My Assistant" is a generative AI service designed to assist webtoon and illustration artists.
            It learns each artist's unique drawing style to transform realistic images into their specific style and offers a service to change the poses of characters within webtoons.
            </p>
        </div>
        <ol>
            <li>
                <h3>Project Background: Purpose and Expected outcomes</h3>
                <p>
                The poor working conditions of comic artists in Korea have been a chronic issue in the industry.
                Due to tight deadlines compared to the assigned workload and the lack of guaranteed breaks, many artists suffer from deteriorating mental and physical health.
                <br /><br />
                We aim to address these issues through our project.
                <br /><br />
                We tackle time-consuming, repetitive tasks like background illustration and character pose changes using generative AI.
                Specifically, for background illustration, the AI learns each artist's unique drawing style, generating more natural images through a personalized AI model.
                This service not only enhances the quality of the final work but also improves production efficiency.
                </p>
            </li>
            <li>
                <h3>Project Details</h3>
                <ul className={styles.details}>
                    <li><b>Summary</b>
                        <div className={styles.images}>
                            <div className={styles.imgWithCaption}>
                                <img src={servicePic1} />
                                <p className={styles.caption}>Image Transfer Page</p>
                            </div>
                            <div className={styles.imgWithCaption}>
                                <img src={servicePic2} />
                                <p className={styles.caption}>Asset List Page</p>
                            </div>
                        </div>
                        <ul>
                            <li>An AI service that trains models to learn customized drawing styles and generate comic images, providing assistance to comic artists.</li>
                            <li>In addition to image generation, the service implements features for storing and managing the generated images as assets on the web.</li>
                            <li>The service learns and manages unique art styles and assets for each comic, considering variations in genre, characters, and style.</li>
                        </ul>
                    </li>
                    <li><b>Service Architecture</b>
                        <div className={styles.imgWithCaption}>
                            <img src={architecture} alt='architecture' />
                            <p className={styles.caption}>To reduce interdependencies within services, the web and model server were separated.</p>
                        </div>
                    </li>
                    <li><b>UI/UX Design</b>
                        <ul>
                            <li>
                                UI/UX design and user flow refinement using Figma
                                <img src={figma} alt='figma' />
                            </li>
                        </ul>
                    </li>
                    <li><b>FE Development</b>
                        <ul>
                            <li>
                                Implementing a multi-page application using React Router
                                <ul>
                                    <li>
                                        Implementation of following pages:
                                        <ul>
                                            <li>Sign up/Log in</li>
                                            <li>Reference Image upload for model training</li>
                                            <li>Image generation</li>
                                            <li>Character Pose generation</li>
                                            <li>Assets</li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                UX improvements were made including separating assets by background/character, providing options for types of generative models based on preferences, and saving multiple images per source image.
                            </li>
                            <li>
                            Reduced inconvenience from long training times by enabling background model training, allowing users to navigate to other pages simultaneously.
                            </li>
                            <li>
                            Optimized rendering through caching using React Query.
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
        </ol>
    </div>
}