import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ENTP() {
    const mbti = {
        mbtiName : "ENTP",
        treeName : "말빨 쎈 청산유수 트리",
        description : [
            "",
            "",
            "",
            "",
            ""
        ],
        link : "/result/ENTP",
        imgSrc : "/icon/mbti/entp.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
