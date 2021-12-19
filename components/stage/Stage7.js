import ReactPlayer from "react-player";
import styles from '@styles/Stage.module.css';

export default function Stage7({storage}) {
    const clicked = storage["jp"][1][0];
    return (
        <>
            <div className={styles.wrapper}>
                <ReactPlayer
                    className={styles.player}
                    url={"https://youtu.be/Gqwk7uR1BI8"}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={styles.question}>
                크리스마스 아침이 밝았어요. 때마침 알람이 울려요. 당신의 행동은?
            </div>
            <div name={"choice"} className={clicked == 1 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 1, 'J')}>
                평소처럼 알람을 듣자마자 바로 자리에서 일어난다.
            </div>
            <div name={"choice"} className={clicked == 2 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 2, 'P')}>
                연달아 울리는 알람을 죄다 껐더니 약속 시간에 늦을 듯! 친구야, 우리 조금만 늦게 보자.
            </div>
            <div name={"choice"} className={clicked == 3 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 3, 'P')}>
                잠은 깼지만 말똥한 정신으로 뒹굴뒹굴~ 몇시까지 이러고 있을 거냐고? 이러고 싶을 때까지!
            </div>
            <div name={"choice"} className={clicked == 4 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 4, 'J')}>
                애초에 알람이 울리지 않는다. 오늘 꿀잠 자려고 전날 미리 꺼뒀지~
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
    storage["jp"][1][0] = seq;
    switch (type) {
        case 'J' :
            storage["jp"][1][1] = -1;
            break;
        case 'P' :
            storage["jp"][1][1] = 1;
            break;
    }
}
