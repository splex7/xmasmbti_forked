import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ESTP() {
    const mbti = {
        mbtiName : "ESTP",
        treeName : "도전적인 해결사 트리",
        description : [
            "",
            "",
            "",
            "",
            ""
        ],
        link : "/result/ESTP",
        imgSrc : "/icon/mbti/estp.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
