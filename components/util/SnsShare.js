import KakaoShareButton from "@components/util/KakaoShareButton";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    LineShareButton,
    LineIcon,
    TelegramShareButton,
    TelegramIcon
} from 'next-share';
import styles from "@styles/SnsShare.module.css";

function SnsShare({link}) {
    return (
        <div className={styles.shareBody}>
            <div>
                <KakaoShareButton link = {link} />
                <FacebookShareButton
                    url={link}
                    quote={'캐롤송으로 알아보는 크리스마스 트리 MBTI'}
                    hashtag={'#xmas-mbti-tree'}
                >
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton
                    url={link}
                    title={'캐롤송으로 알아보는 크리스마스 트리 MBTI'}
                >
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <LineShareButton
                    url={link}
                    title={'캐롤송으로 알아보는 크리스마스 트리 MBTI'}
                >
                    <LineIcon size={32} round />
                </LineShareButton>
                <TelegramShareButton
                    url={link}
                    title={'캐롤송으로 알아보는 크리스마스 트리 MBTI'}
                >
                    <TelegramIcon size={32} round />
                </TelegramShareButton>
                <CopyToClipboard text={link}>
                    <button className={styles.urlShare} onClick={copyUrl}>URL</button>
                </CopyToClipboard>
            </div>
        </div>
    );
}

function copyUrl() {
    alert("클립보드에 링크를 복사했습니다.");
}

export default SnsShare;
