import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ISFJ() {
    const mbti = {
        mbtiName : "ISFJ",
        treeName : "아낌없이 주는 천사 트리",
        description : [
            "다른 사람의 얘기를 잘 들어주고 타인의 감정에 공감하는 능력이 뛰어나요. 주변인들에게 상담을 많이 해주는 편이에요.",
            "싫은 소리를 잘 못해요. 남에게 싫은 소리를 들었을 때도 싫은 티를 안 내고 속으로 삭혀요.",
            "불편한 상황을 정말 싫어해서 애초부터 불편한 상황이 생기지 않도록 굉장히 노력해요. ",
            "기본적으로 타인에게 친절한 성격이지만 보이지 않게 자신만의 선이 있어요. 선 넘는 사람은 극혐이에요.",
            "계획 세우는 것을 좋아하고 중요한 것은 잊어버리지 않도록 꼼꼼하게 메모해요."
        ],
        link : "/result/ISFJ",
        imgSrc : "/icon/mbti/isfj.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
