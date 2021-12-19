import ReactPlayer from "react-player";
import styles from '@styles/components/Stage.module.css';

export default function Stage10({storage}) {
    const clicked = storage["jp"][2][0];
    return (
        <>
            <div className={styles.wrapper}>
                <ReactPlayer
                    className={styles.player}
                    url={"https://youtu.be/VDmIddF7DfQ"}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={styles.question}>
                크리스마스를 즐겁게 보내고 있는 당신! 무엇으로 기뻐하고 있을까요?
            </div>
            <div name={"choice"} className={clicked == 1 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 1, 'P')}>
                우연히 길을 걷다 들어가게 된 음식점. 찾았다, 내 인생 맛집!
            </div>
            <div name={"choice"} className={clicked == 2 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 2, 'J')}>
                내가 생각한대로 술술 잘 풀려가는 근사한 크리스마스. 모든 게 계획대로야~
            </div>
            <div name={"choice"} className={clicked == 3 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 3, 'P')}>
                크리스마스 파티에서 참여하게 된 뜻밖의 이색 이벤트. 갑작스럽지만 흥미로워~
            </div>
            <div name={"choice"} className={clicked == 4 ? styles.choiced : styles.choice} onClick={() => recordMbti(storage, 4, 'J')}>
                이 추운 날씨에 밖에서 줄 서 있는 사람들. 미리 레스토랑을 예약해둔 멋진 나.
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
    storage["jp"][2][0] = seq;
    switch (type) {
        case 'J' :
            storage["jp"][2][1] = -1;
            break;
        case 'P' :
            storage["jp"][2][1] = 1;
            break;
    }
}
