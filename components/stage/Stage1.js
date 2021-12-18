import ReactPlayer from "react-player";
import styles from '@styles/components/Stage.module.css';

export default function Stage1({storage}) {
    return (
        <>
            <div className={styles.wrapper}>
                <ReactPlayer
                    className={styles.player}
                    url={"https://youtu.be/yXQViqx6GMY"}
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={styles.question}>
                친구에게 크리스마스 선물을 하려고 매장에 왔어요. 어떻게 선물을 고를까요?
            </div>
            <div className={styles.choice} onClick={() => recordMbti(storage, 1, 'N')}>
                매장을 둘러보다 이거다! 느낌이 오는 것을 고른다.
            </div>
            <div className={styles.choice} onClick={() => recordMbti(storage, 2, 'S')}>
                선물의 가격, 사이즈, 재질, 실용성 등을 꼼꼼하게 따져본다.
            </div>
            <div className={styles.choice} onClick={() => recordMbti(storage, 3, 'S')}>
                평소에 친구가 좋아했던 것들을 하나씩 되짚어본다.
            </div>
            <div className={styles.choice} onClick={() => recordMbti(storage, 4, 'N')}>
                이 선물을 친구에게 줬을 때 어떻게 될지 머릿속으로 시뮬레이션을 돌려본다.
            </div>
        </>
    )
}

function recordMbti(storage, seq, type) {
    storage["sn"][0][0] = seq;
    switch (type) {
        case 'S' :
            storage["sn"][0][1] = -1;
            break;
        case 'N' :
            storage["sn"][0][1] = 1;
            break;
    }
    console.log(JSON.stringify(storage));
}
