import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ISFP() {
    const mbti = {
        mbtiName : "ISFP",
        treeName : "마음이 따뜻한 예술가 트리",
        description : [
            "분위기를 잘 읽고 공감 능력이 높아서 주변 사람들의 이야기를 잘 들어줘요.",
            "성품이 온화하고 침착해서 갑작스러운 일이 생겨도 쉽게 흥분하지 않아요. 여유있는 모습이 남들에게는 행동이 느린 것으로 비춰지기도 해요.",
            "불편한 게 있으면 맞서싸우기보다 피해가는 편이에요. 치열하게 경쟁해서 쟁취하는 것보다 소소한 현재의 행복에 더 만족해요.",
            "기본적으로 미적인 안목이 있어요. 다른 사람들과 함께 있으면 양보할 때가 많지만 혼자 있을 때 비로소 내 취향을 만끽해요.",
            "계획을 세워서 미리 대비하는 것에 서툴어요. 당장의 즐거움에 더 집중하는 것을 좋아해요."
        ],
        link : "/result/ISFP",
        imgSrc : "/icon/mbti/isfp.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
