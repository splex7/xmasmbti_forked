import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function INFJ() {
    const mbti = {
        mbtiName : "INFJ",
        treeName : "뿌리깊은 소나무 트리",
        description : ["", "", "", "", ""],
        carolSong : {
            name : "",
            reason : ""
        },
        link : "/result/INFJ",
        imgSrc : "/icon/mbti/infj.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
