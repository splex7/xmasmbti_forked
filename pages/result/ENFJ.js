import Head from 'next/head'
import Footer from '@components/Footer'
import 'bootstrap/dist/css/bootstrap.css';

export default function ENFJ() {
    return (
        <div className="container">
            <Head>
                <title>크리스마스 트리 MBTI</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>

            <main>
                ENFJ
            </main>

            <Footer/>
        </div>
    )
}
