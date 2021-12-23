import Document, {Html, Head, Main, NextScript} from 'next/document'
import {GA_TRACKING_ID} from '../lib/gtag'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return {...initialProps}
    }

    render() {
        return (
            <Html>
                <Head/>
                <title>크리스마스 트리 MBTI</title>
                <link rel="icon" href="/favicon.ico"/>
                <meta property="og:url" content="https://xmas-tree-mbti.netlify.app/" />
                <meta property="og:title" content="크리스마스 트리 MBTI" />
                <meta
                    property="og:description"
                    content="캐롤송으로 알아보는 크리스마스 트리 MBTI"
                />
                <meta name="google-site-verification" content="Usfifz9p-P3Bsy-nRNTuwTW_b-vaUBbKUWQT_Cemq8s" />
                <meta name="naver-site-verification" content="1d7fc1b1fb61c20ab4c416ec8590a87417481e1f" />
                <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                    }}
                />
                <script defer src="https://developers.kakao.com/sdk/js/kakao.min.js"/>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
