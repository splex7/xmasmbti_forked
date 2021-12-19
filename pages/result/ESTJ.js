import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ESTJ() {
    const mbti = {
        mbtiName : "ESTJ",
        treeName : "실리에 밝은 카이저 트리",
        description : ["", "", "", "", ""],
        carolSong : {
            name : "",
            reason : ""
        },
        link : "/result/ESTJ",
        imgSrc : "/icon/mbti/estj.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
