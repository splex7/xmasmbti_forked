import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ENFP() {
    const mbti = {
        mbtiName : "ENFP",
        treeName : "활력 넘치는 에너자이저 트리",
        description : [
            "",
            "",
            "",
            "",
            ""
        ],
        link : "/result/ENFP",
        imgSrc : "/icon/mbti/enfp.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
