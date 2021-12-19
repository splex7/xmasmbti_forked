import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ESFP() {
    const mbti = {
        mbtiName : "ESFP",
        treeName : "자유로운 워킹팜 트리",
        description : ["", "", "", "", ""],
        carolSong : {
            name : "",
            reason : ""
        },
        link : "/result/ESFP",
        imgSrc : "/icon/mbti/esfp.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
