import styles from './MLProject1Detail.module.scss'
import { preview_ml } from '../../../assets/preview'

export default function MLProject1Detail(){
    return <div className={styles.main}>
        <img src={preview_ml} alt='main' />
        <p className={styles.caption}>

        </p>
        <ol>
            <li>
                <h3>Summary</h3>
                <p>
                Developed a model to classify gender, age, and mask-wearing status of people in images using a dataset provided by the Naver Connect Foundation.
                </p>
            </li>
            <li>
                <h3>Role</h3>
                <ul>
                    <li>
                    Data EDA
                    </li>
                    <li>
                        Pre-Processing
                        <ul>
                            <li>Oversampling, Downsampling</li>
                            <li>Weighted Random sampling</li>
                        </ul>
                    </li>
                    <li>
                        Modelling
                        <ul>
                            <li>single-head, multi-head, separate model</li>
                            <li>ConvNext model</li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <h3>Result</h3>
                <ul>
                    <li>Won 1st place in the internal Image Classification competition at Naver AI Boostcamp</li>
                </ul>
            </li>
        </ol>
    </div>
}