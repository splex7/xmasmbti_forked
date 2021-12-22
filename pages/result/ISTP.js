import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ISTP() {
    const mbti = {
        mbtiName : "ISTP",
        treeName : "만사가 귀찮은 재간둥이 트리",
        description : [
            "귀찮은 게 너~무 싫어요. 쓸데없는 곳에 에너지 쓰는 건 극혐이에요.",
            "일을 할 때 덜 귀찮은 방향으로 하는 것을 선호해요. 가성비 있게 노력을 적게 들여서 노력 대비 최선의 결과를 얻고자 해요.",
            "손재주가 좋아서 도구를 잘 다뤄요. 효율 끝판왕답게 도구를 쓸 때도 최대한 힘을 덜 들이고 도구의 쓰임새에 맞게 잘 활용해요.",
            "다른 사람의 말에 좀처럼 공감을 잘 못하는 편이고 소모적인 인간관계를 싫어해요. 남에게 관심이 없고 마음에 없는 빈말도 못해요.",
            "인내심이 부족해서 마라톤에는 약하지만 단거리 달리기에는 강해요. 벼락치기에 능하고 임기응변이 좋아요."
        ],
        link : "/result/ISTP",
        imgSrc : "/icon/mbti/istp.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
