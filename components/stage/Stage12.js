import ReactPlayer from "react-player";
import styles from '@styles/components/Stage.module.css';

export default function Stage12({storage}) {
    const clicked = storage["tf"][2][0];
    return (
        <>
            <div className={styles.wrapper}>
                <ReactPlayer
                    className={styles.player}
                    url={"https://youtu.be/nlR0MkrRklg"}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={styles.question}>
                이 감정을 붙들고 있으면 나만 손해인 걸 알지만 내 마음대로 안 될 때가 있죠. 그럴 때 당신은 어떻게 행동하나요?
            </div>
            <div name={"choice"} className={clicked == 1 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 1, 'F')}>
                어차피 내 마음대로 안 될 거면 지금 느끼는 이 감정에 충실하고 몰입해버리자!
            </div>
            <div name={"choice"} className={clicked == 2 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 2, 'T')}>
                미련한 감정을 붙들고 있는 스스로에게 납득할 수 없다. 이 감정을 놓기 위해 보다 더 건설적인 뭔가를 해봐야지.
            </div>
            <div name={"choice"} className={clicked == 3 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 3, 'F')}>
                감정이 내 마음대로 되면 감정이겠어? 나도 이러고 싶지 않은 걸 어떡하라고.
            </div>
            <div name={"choice"} className={clicked == 4 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 4, 'T')}>
                나만 손해인 감정을 왜 붙들고 있지? 나는 그런 적이 없어서 이해가 안 간다.
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
    storage["tf"][2][0] = seq;
    switch (type) {
        case 'T' :
            storage["tf"][2][1] = -1;
            break;
        case 'F' :
            storage["tf"][2][1] = 1;
            break;
    }
}
