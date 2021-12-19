import ReactPlayer from "react-player";
import styles from '@styles/Stage.module.css';

export default function Stage3({storage}) {
    const clicked = storage["ie"][0][0];
    return (
        <>
            <div className={styles.wrapper}>
                <ReactPlayer
                    className={styles.player}
                    url={"https://youtu.be/sv_cKYrt-Qc"}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={styles.question}>
                당신은 코가 밝은 루돌프! 산타할아버지가 썰매를 끌어달라고 찾아왔어요. 당신의 반응은?
            </div>
            <div name={"choice"} className={clicked == 1 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 1, 'I')}>
                네? 저 아세요?
            </div>
            <div name={"choice"} className={clicked == 2 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 2, 'E')}>
                당신이 그 유명한 산타! 한번쯤 만나보고 싶었어요~
            </div>
            <div name={"choice"} className={clicked == 3 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 3, 'I')}>
                코 때문에 주목받고 싶지 않아! 조심스럽게 거절한다.
            </div>
            <div name={"choice"} className={clicked == 4 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 4, 'E')}>
                함께 썰매를 끌게 될 사슴 파티원들에 대해서 물어본다.
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
    storage["ie"][0][0] = seq;
    switch (type) {
        case 'I' :
            storage["ie"][0][1] = -1;
            break;
        case 'E' :
            storage["ie"][0][1] = 1;
            break;
    }
}
