import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function INFP() {
    const mbti = {
        mbtiName : "INFP",
        treeName : "상상하고 꿈꾸는 내적관종 트리",
        description : [
            "",
            "",
            "",
            "",
            ""
        ],
        link : "/result/INFP",
        imgSrc : "/icon/mbti/infp.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
