import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ISFP() {
    const mbti = {
        mbtiName : "ISFP",
        treeName : "마음이 따뜻한 예술가 트리",
        description : [
            "",
            "",
            "",
            "",
            ""
        ],
        link : "/result/ISFP",
        imgSrc : "/icon/mbti/isfp.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
