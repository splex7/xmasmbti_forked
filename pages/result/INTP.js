import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function INTP() {
    const mbti = {
        mbtiName : "INTP",
        treeName : "엉뚱하고 기발한 4차원 트리",
        description : ["", "", "", "", ""],
        carolSong : {
            name : "",
            reason : ""
        },
        link : "/result/INTP",
        imgSrc : "/icon/mbti/intp.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
