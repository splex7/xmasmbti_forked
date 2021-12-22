import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function INTP() {
    const mbti = {
        mbtiName : "INTP",
        treeName : "엉뚱하고 기발한 4차원 트리",
        description : [
            "규칙에 얽매이는 건 싫어요. 여러 가지 가능성을 꿈꾸고 실현할 수 있는 환경을 선호해요. 특히 앞뒤 꽉 막힌 꼰대는 제일 싫어요.",
            "타인에게 관심이 없어요. 하지만 관심 없는 타인도 어떤 부분에서 호기심을 느끼면 확인하고 싶어해요. ",
            "상상력이 풍부해서 남들이 보지 못하는 것을 캐치하는 재능이 있어요. 이런 특징 때문에 대화를 하다가도 갑자기 다른 부분에 꽂혀서 옆길로 샐 때가 많아요.",
            "유행에 관심이 없고 남들이 좀처럼 안 하는 것에 더 관심이 가요. 메이저보다 마이너 장르에 더 끌리는 편이에요.",
            "눈치를 안 보고 솔직해요. 팩폭을 날릴 때가 많고 관심이 없으면 영혼 없는 표정이 자동으로 나와요."
        ],
        link : "/result/INTP",
        imgSrc : "/icon/mbti/intp.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
