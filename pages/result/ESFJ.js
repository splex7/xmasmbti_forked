import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ESFJ() {
    const mbti = {
        mbtiName : "ESFJ",
        treeName : "인기있는 마당발 트리",
        description : [
            "사람을 좋아하고 남을 잘 챙겨요. 스트레스가 생기면 사람을 만나서 푸는 편이에요. ",
            "고민상담을 잘 들어줘요. 남의 얘기에 공감을 잘 해주고 리액션도 좋아요. 나랑 잘 안 맞는 사람도 웬만하면 나쁘지 않게 잘 지내요.",
            "시간 약속을 잘 지키고 약속 장소에는 여유 있게 도착해요. 다른 사람과의 약속은 어떻게든 지키려고 해요.",
            "이해할 수 없는 일은 억지로 이해하려고 노력하기보다 그런가보다 받아들여요. 단순 암기에 능하고 복잡하게 생각하는 것을 싫어해요. ",
            "동정심이 많아서 남을 잘 도와줘요. 정작 자신은 웬만큼 힘들어도 도움을 요청하기보다 힘든 티도 내지 않고 참아버려요."
        ],
        link : "/result/ESFJ",
        imgSrc : "/icon/mbti/esfj.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
