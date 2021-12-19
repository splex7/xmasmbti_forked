import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ISTP() {
    const mbti = {
        mbtiName : "ISTP",
        treeName : "만사가 귀찮은 재간둥이 트리",
        description : [
            "",
            "",
            "",
            "",
            ""
        ],
        link : "/result/ISTP",
        imgSrc : "/icon/mbti/istp.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
