import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';
import Head from "next/head";

export default function ENFJ() {
    const mbti = {
        mbtiName : "ENFJ",
        treeName : "불타는 열정만수르 트리",
        description : [
            "사람을 좋아하고 남에게 잘 맞춰줘서 주위로부터 호감을 얻는 편이에요. 정에 약해서 손해를 보기도 해요.",
            "하고 싶은 게 많고 야망이 강해요. 끊임없이 목표를 세우고 목표가 생기면 거침없이 추진해요.",
            "칭찬에 약하고 다른 사람의 인정을 받으면 힘이 나요. 다른 사람은 나를 어떻게 생각할지 종종 의식해요.",
            "누군가는 해야 하지만 다들 꺼리는 일이 있으면 자원해서 도맡아해요. 타인에게 선뜻 도움을 베풀지만, 남이 원치 않은 도움을 베풀어 오해를 사기도 해요.",
            "남에게는 너그럽지만 스스로에게는 가차없어요. 스스로 기대치에 미치지 못했을 때 크게 자책하고 괴로워해요."
        ],
        link : "/result/ENFJ",
        imgSrc : "/icon/mbti/enfj.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
