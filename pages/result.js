import {useRouter} from "next/router";
import Footer from "@components/Footer";
import styles from "@styles/Result.module.css";
import 'bootstrap/dist/css/bootstrap.css';
import Head from "next/head";

export default function result() {
    const router = useRouter();
    return (
        <>
            <div className="container">
                <Head>
                    <title>크리스마스 트리 MBTI</title>
                    <link rel="icon" href="/favicon.ico"/>
                    <meta property="og:url" content="https://xmas-tree-mbti.netlify.app/" />
                    <meta property="og:title" content="크리스마스 트리 MBTI" />
                    <meta
                        property="og:description"
                        content="캐롤송으로 알아보는 크리스마스 트리 MBTI"
                    />
                </Head>

                <main>
                    <h2>
                        <b>크리스마스 트리 MBTI</b>
                    </h2>
                    <br/>
                    <div className="table-responsive">
                        <table className="table">
                            <tbody>

                                <tr>
                                    <th className={styles.mbti_type_name}>ISTJ</th>
                                    <th className={styles.mbti_type_name}>ISFJ</th>
                                    <th className={styles.mbti_type_name}>INFJ</th>
                                    <th className={styles.mbti_type_name}>INTJ</th>
                                </tr>
                                <tr>
                                    <td>
                                        <div onClick={() => router.push('/result/ISTJ')} className={styles.mbti_type_img}>
                                            <img src={"/icon/mbti/istj.png"} width={"50px"}/>
                                        </div>
                                    </td>
                                    <td>
                                        <div onClick={() => router.push('/result/ISFJ')} className={styles.mbti_type_img}>
                                            <img src={"/icon/mbti/isfj.png"} width={"50px"}/>
                                        </div>
                                    </td>
                                    <td>
                                        <div onClick={() => router.push('/result/INFJ')} className={styles.mbti_type_img}>
                                            <img src={"/icon/mbti/infj.png"} width={"50px"}/>
                                        </div>
                                    </td>
                                    <td>
                                        <div onClick={() => router.push('/result/INTJ')} className={styles.mbti_type_img}>
                                            <img src={"/icon/mbti/intj.png"} width={"50px"}/>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <th className={styles.mbti_type_name}>ISTP</th>
                                    <th className={styles.mbti_type_name}>ISFP</th>
                                    <th className={styles.mbti_type_name}>INFP</th>
                                    <th className={styles.mbti_type_name}>INTP</th>
                                </tr>
                                <tr>
                                    <td>
                                        <div onClick={() => router.push('/result/ISTP')} className={styles.mbti_type_img}>
                                            <img src={"/icon/mbti/istp.png"} width={"50px"}/>
                                        </div>
                                    </td>
                                    <td>
                                        <div onClick={() => router.push('/result/ISFP')} className={styles.mbti_type_img}>
                                            <img src={"/icon/mbti/isfp.png"} width={"50px"}/>
                                        </div>
                                    </td>
                                    <td>
                                        <div onClick={() => router.push('/result/INFP')} className={styles.mbti_type_img}>
                                            <img src={"/icon/mbti/infp.png"} width={"50px"}/>
                                        </div>
                                    </td>
                                    <td>
                                        <div onClick={() => router.push('/result/INTP')} className={styles.mbti_type_img}>
                                            <img src={"/icon/mbti/intp.png"} width={"50px"}/>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <th className={styles.mbti_type_name}>ESTP</th>
                                    <th className={styles.mbti_type_name}>ESFP</th>
                                    <th className={styles.mbti_type_name}>ENFP</th>
                                    <th className={styles.mbti_type_name}>ENTP</th>
                                </tr>
                                <tr>
                                    <td>
                                        <div onClick={() => router.push('/result/ESTP')} className={styles.mbti_type_img}>
                                            <img src={"/icon/mbti/estp.png"} width={"50px"}/>
                                        </div>
                                    </td>
                                    <td>
                                        <div onClick={() => router.push('/result/ESFP')} className={styles.mbti_type_img}>
                                            <img src={"/icon/mbti/esfp.png"} width={"50px"}/>
                                        </div>
                                    </td>
                                    <td>
                                        <div onClick={() => router.push('/result/ENFP')} className={styles.mbti_type_img}>
                                            <img src={"/icon/mbti/enfp.png"} width={"50px"}/>
                                        </div>
                                    </td>
                                    <td>
                                        <div onClick={() => router.push('/result/ENTP')} className={styles.mbti_type_img}>
                                            <img src={"/icon/mbti/entp.png"} width={"50px"}/>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <th className={styles.mbti_type_name}>ESTJ</th>
                                    <th className={styles.mbti_type_name}>ESFJ</th>
                                    <th className={styles.mbti_type_name}>ENFJ</th>
                                    <th className={styles.mbti_type_name}>ENTJ</th>
                                </tr>
                                <tr>
                                    <td>
                                        <div onClick={() => router.push('/result/ESTJ')} className={styles.mbti_type_img}>
                                            <img src={"/icon/mbti/estj.png"} width={"50px"}/>
                                        </div>
                                    </td>
                                    <td>
                                        <div onClick={() => router.push('/result/ESFJ')} className={styles.mbti_type_img}>
                                            <img src={"/icon/mbti/esfj.png"} width={"50px"}/>
                                        </div>
                                    </td>
                                    <td>
                                        <div onClick={() => router.push('/result/ENFJ')} className={styles.mbti_type_img}>
                                            <img src={"/icon/mbti/enfj.png"} width={"50px"}/>
                                        </div>
                                    </td>
                                    <td>
                                        <div onClick={() => router.push('/result/ENTJ')} className={styles.mbti_type_img}>
                                            <img src={"/icon/mbti/entj.png"} width={"50px"}/>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br/>
                    <button className={"btn btn-danger"} onClick={() =>  router.push('/')}>처음으로</button>
                </main>

                <Footer/>
            </div>
        </>
    )
}
