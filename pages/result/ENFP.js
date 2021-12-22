import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ENFP() {
    const mbti = {
        mbtiName : "ENFP",
        treeName : "활력 넘치는 에너자이저 트리",
        description : [
            "열정적이고 활력이 넘쳐요. 에너지가 풍부해서 하고 싶은 일이 생기면 무엇이든 척척 해내요.",
            "단순반복적인 일에 쉽게 지루해해요. 새로운 것을 좋아하고 새로운 사람을 만나는 것도 좋아해요.",
            "다른 사람들을 즐겁게 해주는 분위기 메이커에요. 리액션이 좋고 공감도 잘해줘요. 칭찬에 약하고 관심받는 것을 좋아해요.",
            "답답한 건 질색이에요. 아무도 나서는 사람이 없으면 조금 손해를 보더라도 답답해서 그냥 내가 나서요.",
            "하고 싶은 일들이 많아서 시작부터 하는데 마무리를 못 해요. 어느 하나에 꽂혀서 열심히 몰두하다가도 어느새 질려서 그만두게 돼요."
        ],
        link : "/result/ENFP",
        imgSrc : "/icon/mbti/enfp.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
