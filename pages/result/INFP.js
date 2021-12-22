import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function INFP() {
    const mbti = {
        mbtiName : "INFP",
        treeName : "상상하고 꿈꾸는 내적관종 트리",
        description : [
            "호기심이 많고 판타지 세계관에 흥미를 느껴요. 탄탄한 서사를 접하면 감동받고 이야기 속 캐릭터 간 관계성에 과몰입해요.",
            "갈등은 피해갈 수 있을 때까지 회피하는 편이고 다른 사람에게 피해주는 것을 정말 싫어해요. 남에게 모진 말을 잘 못해요.",
            "다른 사람이 나에게 관심이 없으면 서운해요. 하지만 막상 나에게 관심이 오면 부담을 느껴요.",
            "남의 시선을 많이 의식해요. 친구들을 만나고 집에 와서 내 행동을 성찰하고 후회할 때가 많아요.",
            "하기 싫은 일은 미룰 수 있을 때까지 미뤄요. 마트에 장을 보러 갈 때도 사야 하는 것을 정리해서 가기보다 일단 마트에 가서 그 자리에서 끌리는 것을 골라요."
        ],
        link : "/result/INFP",
        imgSrc : "/icon/mbti/infp.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
