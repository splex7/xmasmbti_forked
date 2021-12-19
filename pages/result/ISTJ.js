import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ISTJ() {
    const mbti = {
        mbtiName : "ISTJ",
        treeName : "대쪽같은 선비 트리",
        description : [
            "성실하고 책임감이 강한 당신! 주어진 일은 끝까지 해내는 높은 집중력을 지녔어요.",
            "남들과 함께 일하는 것보다 혼자 일하는 걸 선호하고 혼자서 일할 때도 농땡이를 피우는 법이 없어요.",
            "규칙을 잘 지키고 원칙에서 벗어나는 것을 싫어해요. 특히 이랬다 저랬다 일관성이 없는 건 싫어요!",
            "예측가능한 안정적인 환경을 좋아해요. 남들이 쉽게 질리는 일도 잘 버티고 끝까지 완수해버리는 게 당신의 강점!",
            "구조적이고 체계가 잡힌 것이 좋아요. 어떤 물건을 처음 써볼 때 사용설명서부터 꼭 읽어보는 편이에요."
        ],
        link : "/result/ISTJ",
        imgSrc : "/icon/mbti/istj.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
