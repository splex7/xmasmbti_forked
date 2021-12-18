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

let mbtiStorage = {
    ie: [[0, 0], [0, 0], [0, 0]],
    sn: [[0, 0], [0, 0], [0, 0]],
    tf: [[0, 0], [0, 0], [0, 0]],
    jp: [[0, 0], [0, 0], [0, 0]]
};

export default function Stage() {
    const [stage, setStage] = useState(1);
    const [storage, setStorage] = useState(mbtiStorage);

    return (
        <div className="container">
            <Head>
                <title>크리스마스 트리 MBTI</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main className={styles.main}>
                <div className={styles.stage}>
                    {stage == 1 && <Stage1 storage = {storage} />}
                    {stage == 2 && <Stage2 storage = {storage}/>}
                    {stage == 3 && <Stage3 storage = {storage}/>}
                    {stage == 4 && <Stage4 storage = {storage}/>}
                    {stage == 5 && <Stage5 storage = {storage}/>}
                    {stage == 6 && <Stage6 storage = {storage}/>}
                    {stage == 7 && <Stage7 storage = {storage}/>}
                    {stage == 8 && <Stage8 storage = {storage}/>}
                    {stage == 9 && <Stage9 storage = {storage}/>}
                    {stage == 10 && <Stage10 storage = {storage}/>}
                    {stage == 11 && <Stage11 storage = {storage}/>}
                    {stage == 12 && <Stage12 storage = {storage}/>}
                </div>
                <div>
                    {1 < stage && stage < 13 && <button className="btn btn-success" onClick={() => setStage(stage - 1)}>이전</button>}
                    {0 < stage && stage < 12 && <button className="btn btn-success" onClick={() => setStage(stage + 1)}>다음</button>}
                </div>
            </main>

            <Footer/>
        </div>
    )
}
