import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ESTJ() {
    const mbti = {
        mbtiName : "ESTJ",
        treeName : "실리에 밝은 카이저 트리",
        description : [
            "부지런하고 자기관리에 능해요. 뜬구름 잡는 얘기에 관심이 없고 목표 의식이 강해서 현실적인 목표를 세워서 달성해요.",
            "조직에서 리더 역할을 자주 맡고 곧잘 해내요. 일 못하고 공사 구분 못하는 사람은 제일 싫어요.",
            "내가 계획한대로 되지 않을 때 엄청 스트레스 받아요. 나만의 철칙과 룰이 있고 상식적으로 예측할 수 있는 범위 안에서 일이 진행되는 걸 선호해요.",
            "실리에 밝아서 경제 관념이 좋아요. 물건을 살 때도 충동적으로 구매하기보다 꼭 필요한 물건만 사려고 해요.",
            "목표를 세우고 지시하고 결정하는 일을 잘하지만 타인의 감정을 배려하는 것에는 서툴어요. "
        ],
        link : "/result/ESTJ",
        imgSrc : "/icon/mbti/estj.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
