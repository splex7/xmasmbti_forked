import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function INFJ() {
    const mbti = {
        mbtiName : "INFJ",
        treeName : "뿌리깊은 소나무 트리",
        description : [
            "나만의 신념이 있고 내가 생각하는 이상적인 세상의 모습이 있어요. 종종 유토피아를 꿈꿔요.",
            "하지만 이런 INFJ들에게 세상은 가혹해요. 인류애를 잃게 만드는 온갖 범죄자들과 끔찍한 폭력을 뉴스에서 접할 때마다 괴로워져요.",
            "그럼에도 일회용품 사용을 줄이거나 억울한 피해자를 위한 청원에 동참하는 등 내가 지향하는 이상을 끊임없이 실천하고자 해요.",
            "평소에는 타인에게 친절한 편이지만 신념을 건드리는 사람에게는 차갑게 식어버려요.",
            "은근히 낯가림이 심하고 혼자만의 시간이 꼭 필요해요. 혼자 있을 때 이런저런 망상에 잠기곤 해요."
        ],
        link : "/result/INFJ",
        imgSrc : "/icon/mbti/infj.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
