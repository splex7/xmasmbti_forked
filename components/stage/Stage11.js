import ReactPlayer from "react-player";
import styles from '@styles/Stage.module.css';

export default function Stage11({storage}) {
    const clicked = storage["ie"][2][0];
    return (
        <>
            <div className={styles.wrapper}>
                <ReactPlayer
                    className={styles.player}
                    url={"https://youtu.be/uwFD6dCV82w"}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={styles.question}>
                즐거운 크리스마스를 보내기 위해 다음 중 당신에게 가장 필요한 것은 무엇인가요?
            </div>
            <div name={"choice"} className={clicked == 1 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 1, 'E')}>
                사랑하는 가족
            </div>
            <div name={"choice"} className={clicked == 2 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 2, 'E')}>
                소중한 친구들
            </div>
            <div name={"choice"} className={clicked == 3 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 3, 'I')}>
                나와 취미와 관심사가 비슷한 사람
            </div>
            <div name={"choice"} className={clicked == 4 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 4, 'I')}>
                혼자만의 시간
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
    storage["ie"][2][0] = seq;
    switch (type) {
        case 'I' :
            storage["ie"][2][1] = -1;
            break;
        case 'E' :
            storage["ie"][2][1] = 1;
            break;
    }
}
