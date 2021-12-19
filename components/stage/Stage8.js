import ReactPlayer from "react-player";
import styles from '@styles/Stage.module.css';

export default function Stage8({storage}) {
    const clicked = storage["sn"][1][0];
    return (
        <>
            <div className={styles.wrapper}>
                <ReactPlayer
                    className={styles.player}
                    url={"https://youtu.be/sYd7QKruz9k"}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={styles.question}>
                좋아하는 사람과 쭉 친구로 지내다가 크리스마스에 고백할까 고민 중인 당신의 절친! 어떤 조언을 해줄까요?
            </div>
            <div name={"choice"} className={clicked == 1 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 1, 'N')}>
                촉이 왔다 왔어! 왠지 잘 될 듯? 오늘은 크리스마스잖아~
            </div>
            <div name={"choice"} className={clicked == 2 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 2, 'S')}>
                차일까봐 계속 걱정하는 것도 시간낭비! 다른 생각은 그만하고 그냥 고백만 생각해.
            </div>
            <div name={"choice"} className={clicked == 3 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 3, 'S')}>
                평소 익숙하지 않고 예측하지 못했던 일은 사람을 불편하게 할 수 있어. 좀 더 신중해야 할 듯.
            </div>
            <div name={"choice"} className={clicked == 4 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 4, 'N')}>
                차이면 그 친구랑 어떡하려고 그래. 어쩌면 이런 일, 저런 일, 그런 일이 생길 수도 있을 듯.
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
    storage["sn"][1][0] = seq;
    switch (type) {
        case 'S' :
            storage["sn"][1][1] = -1;
            break;
        case 'N' :
            storage["sn"][1][1] = 1;
            break;
    }
}
