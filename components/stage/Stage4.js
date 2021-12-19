import ReactPlayer from "react-player";
import styles from '@styles/Stage.module.css';

export default function Stage4({storage}) {
    const clicked = storage["jp"][0][0];
    return (
        <>
            <div className={styles.wrapper}>
                <ReactPlayer
                    className={styles.player}
                    url={"https://youtu.be/w14rSMl35ro"}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={styles.question}>
                당신의 크리스마스 계획은 어떻게 되나요?
            </div>
            <div name={"choice"} className={clicked == 1 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 1, 'P')}>
                음... 그 날이 되어봐야 알지 않을까?
            </div>
            <div name={"choice"} className={clicked == 2 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 2, 'P')}>
                적당히 맛있는 거 먹고 대충 친한 사람들 만나고 있을 듯. 작년 크리스마스 때도 그랬어.
            </div>
            <div name={"choice"} className={clicked == 3 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 3, 'J')}>
                성수기라서 방을 구하기 어려울 수 있어! 최소 세달 전부터 호텔 룸을 알아본다.
            </div>
            <div name={"choice"} className={clicked == 4 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 4, 'J')}>
                크리스마스엔 집콕이 최고! 나를 위한 영화와 시원한 맥주, 맛있는 팝콘을 이미 준비해두었지~
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
    storage["jp"][0][0] = seq;
    switch (type) {
        case 'J' :
            storage["jp"][0][1] = -1;
            break;
        case 'P' :
            storage["jp"][0][1] = 1;
            break;
    }
}
