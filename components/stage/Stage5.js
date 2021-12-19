import ReactPlayer from "react-player";
import styles from '@styles/components/Stage.module.css';

export default function Stage5({storage}) {
    const clicked = storage["ie"][1][0];
    return (
        <>
            <div className={styles.wrapper}>
                <ReactPlayer
                    className={styles.player}
                    url={"https://youtu.be/cgpUjbp9ALk"}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={styles.question}>
                눈 내리는 화이트 크리스마스에요! 창 밖에 내리는 눈을 본 당신은?
            </div>
            <div name={"choice"} className={clicked == 1 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 1, 'E')}>
                얼른 눈 내리는 사진을 찍고 친구들에게 카톡을 보내서 이 소식을 신속하게 공유한다.
            </div>
            <div name={"choice"} className={clicked == 2 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 2, 'I')}>
                눈 내리는 사진을 여러장 찍고 찍은 사진들을 감상한다. 주변 사람들에게 연락은 패스~
            </div>
            <div name={"choice"} className={clicked == 3 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 3, 'I')}>
                보기만 해도 추워. 집에서 귤이나 까먹어야지~
            </div>
            <div name={"choice"} className={clicked == 4 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 4, 'E')}>
                롱패딩을 챙겨입고 친구와 통화하면서 후다닥 밖으로 나간다.
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
    storage["ie"][1][0] = seq;
    switch (type) {
        case 'I' :
            storage["ie"][1][1] = -1;
            break;
        case 'E' :
            storage["ie"][1][1] = 1;
            break;
    }
}
