import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ESFP() {
    const mbti = {
        mbtiName : "ESFP",
        treeName : "자유로운 워킹팜 트리",
        description : [
            "ESFP는 걸어다니는 나무 워킹팜처럼 한곳에 안주하기보다 늘 새로운 곳을 찾아떠나요.",
            "기본적으로 사람을 좋아하고 정에 약해서 사람을 좀처럼 내치지 못해요. 당신은 함께 있을 때 즐겁게 해주는 매력적인 사람이에요.",
            "새로운 자극을 계속 추구하고 익숙한 것에는 금방 싫증을 내는 경향이 있어요.",
            "말보다는 행동이 빠르고 충동적인 편이에요. 뒷일은 나중에 생각하다 보니 예기치 못한 상황이 종종 발생해요.",
            "뒤끝이 없어서 서운했던 점도 바로 잊어요. 고민거리도 하루 자고 일어나면 금방 훌훌 털어버려요."
        ],
        link : "/result/ESFP",
        imgSrc : "/icon/mbti/esfp.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
