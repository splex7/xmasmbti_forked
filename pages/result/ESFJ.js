import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ESFJ() {
    const mbti = {
        mbtiName : "ESFJ",
        treeName : "인기있는 마당발 트리",
        description : ["", "", "", "", ""],
        carolSong : {
            name : "",
            reason : ""
        },
        link : "/result/ESFJ",
        imgSrc : "/icon/mbti/esfj.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
