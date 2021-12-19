import {useRouter} from 'next/router'
import styles from "@styles/Main.module.css";

export default function Main() {
    const router = useRouter();
    return (
        <>
            <div className={styles.main}>
                <h6>캐롤송으로 알아보는</h6>
                <h3 className="title"><b>크리스마스 트리 MBTI</b></h3>
                <img src={"/icon/carol.png"} className={styles.icon}/><br/>

                <button type={"button"} className={"btn btn-danger"} onClick={() => router.push('/stage')}>시작하기</button>
                <span>&nbsp;</span>
                <button type={"button"} className={"btn btn-primary"} onClick={() => router.push('/result')}>모든 유형 보기</button>
            </div>
        </>
    )
}
