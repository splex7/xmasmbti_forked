import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ENTJ() {
    const mbti = {
        mbtiName : "ENTJ",
        treeName : "앞서가는 리더 트리",
        description : [
            "",
            "",
            "",
            "",
            ""
        ],
        link : "/result/INFJ",
        imgSrc : "/icon/mbti/entj.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
