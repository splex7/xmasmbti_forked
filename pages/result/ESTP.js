import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ESTP() {
    const mbti = {
        mbtiName : "ESTP",
        treeName : "도전적인 해결사 트리",
        description : [
            "스릴을 좋아하고 내기를 즐겨요. 겁이 없고 모험을 좋아해서 위험한 행동을 할 때가 종종 있어요.",
            "순발력과 임기응변에 능해서 주어진 문제를 해결하는 능력이 출중해요. 하지만 그만큼 본인이 충동적으로 문제를 만들기도 해요.",
            "쉽게 시작하지만 끝맺는 걸 어려워해요. 그럼에도 계속해서 다시 도전하고 새로운 것을 시도해요. ",
            "여러 사람들과 곧잘 어울려서 가볍게 아는 사람은 많지만 정작 진지하게 마음 주는 사람은 몇 되지 않아요. ",
            "복잡하게 생각하는 것을 싫어하고 단순한 것을 좋아해요. 그래서 고민과 걱정이 적은 편이에요. 무슨 생각을 하는지 모르겠는 사람을 꺼려하고 답답해해요."
        ],
        link : "/result/ESTP",
        imgSrc : "/icon/mbti/estp.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
