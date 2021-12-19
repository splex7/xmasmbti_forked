import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function INTJ() {
    const mbti = {
        mbtiName : "INTJ",
        treeName : "혼자서도 잘 자라는 인공 트리",
        description : [
            "혼자 있는 걸 좋아해요. 다른 사람들과 함께 있으면 기가 빨리고 집에 가고 싶어져요.",
            "놀랍도록 남에게 관심이 없어요. MBTI도 내 것만 딱 챙겨보고 끝! 남의 것은 궁금하지도 않아요.",
            "그러면서도 관심분야에 있어서는 평소 찾을 수 없었던 열정과 집착을 보이기도 해요. ",
            "정에 휘둘리지 않는 편이에요. 납득이 가지 않으면 좀처럼 움직이지 않아요. 반대로 납득이 가면 쉽게 수긍해요.",
            "마음에 드는 영화를 보고 나면 여운이 오래 가요. 작품 해석을 다방면으로 찾아보는 편이에요."
        ],
        link : "/result/INTJ",
        imgSrc : "/icon/mbti/intj.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
