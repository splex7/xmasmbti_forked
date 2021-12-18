import ReactPlayer from "react-player";
import styles from '@styles/components/Stage.module.css';

export default function Stage6({storage}) {
    const clicked = storage["tf"][1][0];
    return (
        <>
            <div className={styles.wrapper}>
                <ReactPlayer
                    className={styles.player}
                    url={"https://youtu.be/##"}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={styles.question}>
                문제6
            </div>
            <div name={"choice"} className={clicked == 1 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 1, 'F')}>
                문항1
            </div>
            <div name={"choice"} className={clicked == 2 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 2, 'T')}>
                문항2
            </div>
            <div name={"choice"} className={clicked == 3 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 3, 'F')}>
                문항3
            </div>
            <div name={"choice"} className={clicked == 4 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 4, 'T')}>
                문항3
            </div>
        </>
    )
}

function recordMbti(storage, seq, type) {
    /* 클릭한 문항 CSS 적용 */
    let target = document.getElementsByName("choice");
    for(let i=0; i<target.length; i++) {
        target[i].className = styles.choice;
    }
    target[seq-1].className = styles.choiced;

    /* 클릭한 문항 저장 */
    storage["tf"][1][0] = seq;
    switch (type) {
        case 'T' :
            storage["tf"][1][1] = -1;
            break;
        case 'F' :
            storage["tf"][1][1] = 1;
            break;
    }
}
