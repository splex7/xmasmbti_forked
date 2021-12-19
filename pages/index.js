import Head from 'next/head'
import Main from '@components/Main'
import Footer from '@components/Footer'
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
    return (
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
                <meta property="og:image" content="thumbnail.png" />
            </Head>

            <main>
                <Main/>
            </main>

            <Footer/>
        </div>
    )
}
