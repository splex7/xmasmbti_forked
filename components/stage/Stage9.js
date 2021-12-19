import ReactPlayer from "react-player";
import styles from '@styles/Stage.module.css';

export default function Stage9({storage}) {
    const clicked = storage["sn"][2][0];
    return (
        <>
            <div className={styles.wrapper}>
                <ReactPlayer
                    className={styles.player}
                    url={"https://youtu.be/0u5UvnKlCTA"}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={styles.question}>
                어떤 종교에서는 인류를 구원할 구세주가 태어난 날로 크리스마스를 기념하기도 해요. 초월적인 존재에 대해 어떻게 생각하나요?
            </div>
            <div name={"choice"} className={clicked == 1 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 1, 'N')}>
                세상에는 말로 설명할 수 없는 일들이 많다. 그렇기 때문에 신도 있을 것 같다.
            </div>
            <div name={"choice"} className={clicked == 2 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 2, 'S')}>
                신이 있는지 없는지는 모르겠고 신을 믿어서 마음이 편해지고 현생을 잘 살게 된다면 그걸로 됐다.
            </div>
            <div name={"choice"} className={clicked == 3 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 3, 'S')}>
                나는 내 두눈으로 본 것만 믿는다! 초월적인 존재는 없다.
            </div>
            <div name={"choice"} className={clicked == 4 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 4, 'N')}>
                왠지 없을 거 같다. 그냥 느낌이 그렇다.
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
    storage["sn"][2][0] = seq;
    switch (type) {
        case 'S' :
            storage["sn"][2][1] = -1;
            break;
        case 'N' :
            storage["sn"][2][1] = 1;
            break;
    }
}
