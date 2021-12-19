import Head from "next/head";
import Footer from "@components/Footer";
import React, {useState} from "react";
import {useRouter} from "next/router";
import styles from "@styles/Result.module.css";

export default function Result({mbti}) {
    const router = useRouter();

    const mbtiName = mbti.mbtiName;
    const treeName = mbti.treeName;
    const description = mbti.description;
    const carolSong = mbti.carolSong;
    const link = mbti.link;
    const imgSrc = mbti.imgSrc;
    return (
        <div className="container">
            <Head>
                <title>크리스마스 트리 MBTI</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                <div>
                    <h4>
                        <b>{mbtiName}</b>
                    </h4>
                </div>
                <div>{treeName}</div>
                <div>
                    <img src={imgSrc} width={"250px"}/>
                </div>
                <div className={styles.description}>
                    <b>이런 특징이 있어요.</b>
                    <div>* {description[0]}</div>
                    <div>* {description[1]}</div>
                    <div>* {description[2]}</div>
                    <div>* {description[3]}</div>
                    <div>* {description[4]}</div>
                </div>
                <div>
                    <button className="btn btn-danger" onClick={() => router.push('/')}>처음으로</button>
                    <span>&nbsp;</span>
                    <button className="btn btn-primary" onClick={() => router.push('/result')}>모든 유형 보기</button>
                </div>
            </main>

            <Footer/>
        </div>
    )
}
