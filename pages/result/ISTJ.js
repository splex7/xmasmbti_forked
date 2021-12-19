import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ISTJ() {
    const mbti = {
        mbtiName : "ISTJ",
        treeName : "대쪽같은 선비 트리",
        description : ["", "", "", "", ""],
        carolSong : {
            name : "",
            reason : ""
        },
        link : "/result/ISTJ",
        imgSrc : "/icon/mbti/istj.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
