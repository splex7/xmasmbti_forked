import ReactPlayer from "react-player";
import styles from '@styles/Stage.module.css';

export default function Stage2({storage}) {
    const clicked = storage["tf"][0][0];
    return (
        <>
            <div className={styles.wrapper}>
                <ReactPlayer
                    className={styles.player}
                    url={"https://youtu.be/E8gmARGvPlI"}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={styles.question}>
                크리스마스에 용기내어 고백을 한 당신! 씁쓸하게도 상대방으로부터 거절을 당했습니다. 당신의 극복 방법은?
            </div>
            <div name={"choice"} className={clicked == 1 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 1, 'F')}>
                세상의 모든 이별 노래가 다 내 얘기 같아! 나를 위로해줄 플레이리스트를 찾아본다.
            </div>
            <div name={"choice"} className={clicked == 2 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 2, 'F')}>
                애인보다는 친구가 짱이지! 내 마음을 알아줄 친구를 만나서 실연의 아픔을 털어놓는다.
            </div>
            <div name={"choice"} className={clicked == 3 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 3, 'T')}>
                음, 그렇군. 나 싫다는 사람 굳이 안 붙잡아~ 한번 귀를 후벼파고 금방 잊는다.
            </div>
            <div name={"choice"} className={clicked == 4 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 4, 'T')}>
                내가 왜 차였을까? 그 사람이 날 거절한 이유가 무엇인지 분석해본다.
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
    storage["tf"][0][0] = seq;
    switch (type) {
        case 'T' :
            storage["tf"][0][1] = -1;
            break;
        case 'F' :
            storage["tf"][0][1] = 1;
            break;
    }
}
