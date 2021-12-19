import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ISFJ() {
    const mbti = {
        mbtiName : "ISFJ",
        treeName : "아낌없이 주는 천사 트리",
        description : ["", "", "", "", ""],
        carolSong : {
            name : "",
            reason : ""
        },
        link : "/result/ISFJ",
        imgSrc : "/icon/mbti/isfj.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
