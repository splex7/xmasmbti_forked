import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';
import Head from "next/head";

export default function ENFJ() {
    const mbti = {
        mbtiName : "ENFJ",
        treeName : "불타는 열정만수르 트리",
        description : [
            "",
            "",
            "",
            "",
            ""
        ],
        link : "/result/ENFJ",
        imgSrc : "/icon/mbti/enfj.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
