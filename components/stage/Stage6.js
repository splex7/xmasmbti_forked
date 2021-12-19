import ReactPlayer from "react-player";
import styles from '@styles/components/Stage.module.css';

export default function Stage6({storage}) {
    const clicked = storage["tf"][1][0];
    return (
        <>
            <div className={styles.wrapper}>
                <ReactPlayer
                    className={styles.player}
                    url={"https://youtu.be/CKenxQ5yRKE"}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={styles.question}>
                메리크리스마스~ 친구에게 크리스마스 카드를 받았어요. 뭐라고 적혀있었을까요?
            </div>
            <div name={"choice"} className={clicked == 1 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 1, 'F')}>
                넌 참 좋은 사람이야. 네가 있어서 항상 힘이 나! 행복한 크리스마스 보내~
            </div>
            <div name={"choice"} className={clicked == 2 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 2, 'T')}>
                넌 참 멋진 사람이야. 네가 있어서 옆에서 나도 자극받아! 뜻깊은 크리스마스 보내~
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
