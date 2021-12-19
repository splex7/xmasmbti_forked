import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function INTJ() {
    const mbti = {
        mbtiName : "INTJ",
        treeName : "혼자서도 잘 자라는 인공 트리",
        description : ["", "", "", "", ""],
        carolSong : {
            name : "",
            reason : ""
        },
        link : "/result/INTJ",
        imgSrc : "/icon/mbti/intj.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
