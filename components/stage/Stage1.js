import {Component} from "react";
import styles from '@styles/components/Stage.module.css'

class Stage1 extends Component {
    render() {
        return (
            <>
                <div className={styles.question}>
                    <div className={styles.choose}>선택지1</div>
                    <div className={styles.choose}>선택지2</div>
                    <div className={styles.choose}>선택지3</div>
                    <div className={styles.choose}>선택지4</div>
                </div>
            </>
        )
    }
}

export default Stage1;
