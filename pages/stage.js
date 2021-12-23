import React, { useState } from 'react';
import Footer from '@components/Footer'
import Stage1 from "@components/stage/Stage1";
import Stage2 from "@components/stage/Stage2";
import Stage3 from "@components/stage/Stage3";
import Stage4 from "@components/stage/Stage4";
import Stage5 from "@components/stage/Stage5";
import Stage6 from "@components/stage/Stage6";
import Stage7 from "@components/stage/Stage7";
import Stage8 from "@components/stage/Stage8";
import Stage9 from "@components/stage/Stage9";
import Stage10 from "@components/stage/Stage10";
import Stage11 from "@components/stage/Stage11";
import Stage12 from "@components/stage/Stage12";
import styles from '@styles/Stage.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import {useRouter} from "next/router";

let mbtiStorage = {
    ie: [[0, 0], [0, 0], [0, 0]],
    sn: [[0, 0], [0, 0], [0, 0]],
    tf: [[0, 0], [0, 0], [0, 0]],
    jp: [[0, 0], [0, 0], [0, 0]]
};

export default function Stage() {
    const [stage, setStage] = useState(1);
    const [storage, setStorage] = useState(mbtiStorage);
    const router = useRouter();
    return (
        <div className="container">
            <main>
                <div className={styles.stage}>
                    {stage == 1 && <Stage1 storage={storage}/>}
                    {stage == 2 && <Stage2 storage={storage}/>}
                    {stage == 3 && <Stage3 storage={storage}/>}
                    {stage == 4 && <Stage4 storage={storage}/>}
                    {stage == 5 && <Stage5 storage={storage}/>}
                    {stage == 6 && <Stage6 storage={storage}/>}
                    {stage == 7 && <Stage7 storage={storage}/>}
                    {stage == 8 && <Stage8 storage={storage}/>}
                    {stage == 9 && <Stage9 storage={storage}/>}
                    {stage == 10 && <Stage10 storage={storage}/>}
                    {stage == 11 && <Stage11 storage={storage}/>}
                    {stage == 12 && <Stage12 storage={storage}/>}
                </div>
                <div className={styles.btn_border}>
                    {stage == 1 && <button className="btn btn-danger" onClick={() => router.push('/')}>처음으로</button>}
                    {1 < stage && stage < 13 && <button className="btn btn-success" onClick={() => setStage(stage - 1)}>이전</button>}
                    <span>&nbsp;&nbsp;&nbsp;</span>
                    {0 < stage && stage < 12 && <button className="btn btn-success" onClick={() => setStage(stage + 1)}>다음</button>}
                    {stage && stage == 12 && <button className="btn btn-primary" onClick={() => viewResult(router)}>결과보기</button>}
                    <div className={styles.btn_bottom}></div>
                </div>
            </main>

            <Footer/>
        </div>
    )
}

function viewResult(router) {
    /* 체크 안 한 부분 있는지 검사 */
    let ie = mbtiStorage["ie"];
    let sn = mbtiStorage["sn"];
    let tf = mbtiStorage["tf"];
    let jp = mbtiStorage["jp"];

    for(let i=0; i<ie.length; i++) {
       if(ie[i][0] == 0 || sn[i][0] == 0 || tf[i][0] == 0 || jp[i][0] == 0) {
           alert("체크하지 않은 문항이 있습니다. 이전 단계로 돌아가서 확인해주세요!");
           return;
       }
    }

    /* 결과 산출 및 결과 페이지 이동 */
    let result = '';

    let sumIE = 0;
    let sumSN = 0;
    let sumTF = 0;
    let sumJP = 0;
    for(let i=0; i<ie.length; i++) {
        sumIE += ie[i][1];
        sumSN += sn[i][1];
        sumTF += tf[i][1];
        sumJP += jp[i][1];
    }

    if(sumIE < 0) {
        result += 'I';
    } else {
        result += 'E';
    }
    if(sumSN < 0) {
        result += 'S';
    } else {
        result += 'N';
    }
    if(sumTF < 0) {
        result += 'T';
    } else {
        result += 'F';
    }
    if(sumJP < 0) {
        result += 'J';
    } else {
        result += 'P';
    }
    router.push('/result/' + result)
}
