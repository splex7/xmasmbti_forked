import {useEffect} from "react";
import styles from "@styles/SnsShare.module.css";

function KakaoShareButton({link}) {

    useEffect(() => {
        if (window.Kakao) {
            if (!window.Kakao.isInitialized()) {
                window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
            }
        }
    }, []);

    const shareInKakako = () => {
        const { Kakao } = window;
        Kakao.Link.sendScrap({
            requestUrl: link,
        });
    };

    return (
      <>
          <div onClick={shareInKakako} className={styles.kakaoBtn}>
              <img src={"/icon/sns/kakao.png"} className={styles.kakaoBtnImg} />
          </div>
      </>
    );
}

export default KakaoShareButton;
