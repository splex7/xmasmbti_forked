import React, { useState } from 'react';
import Head from 'next/head'
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
import styles from '@styles/components/Stage.module.css'
import 'bootstrap/dist/css/bootstrap.css';

export default function Stage() {
    const [stage, setStage] = useState(1);

    return (
        <div className="container">
            <Head>
                <title>크리스마스 트리 MBTI</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <div className={styles.stage}>
                    {stage == 1 && <Stage1/>}
                    {stage == 2 && <Stage2/>}
                    {stage == 3 && <Stage3/>}
                    {stage == 4 && <Stage4/>}
                    {stage == 5 && <Stage5/>}
                    {stage == 6 && <Stage6/>}
                    {stage == 7 && <Stage7/>}
                    {stage == 8 && <Stage8/>}
                    {stage == 9 && <Stage9/>}
                    {stage == 10 && <Stage10/>}
                    {stage == 11 && <Stage11/>}
                    {stage == 12 && <Stage12/>}
                </div>
                {1 < stage && stage < 13 && <button className="btn btn-success float-left" onClick={() => setStage(stage - 1)}>이전</button>}
                {0 < stage && stage < 12 && <button className="btn btn-success float-right" onClick={() => setStage(stage + 1)}>다음</button>}
            </main>

            <Footer/>
        </div>
    )
}
