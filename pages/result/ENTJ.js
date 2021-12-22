import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ENTJ() {
    const mbti = {
        mbtiName : "ENTJ",
        treeName : "앞서가는 리더 트리",
        description : [
            "미래지향적인 비전을 꿈꾸며 조직 구성원들에게 방향을 제시하는 리더에요. 세세한 디테일보다는 큰 그림을 그리며 일을 추진해요.",
            "활동적이고 사람들과 잘 어울리지만 동시에 굉장히 독립적인 사람이에요. 간섭을 굉장히 싫어하고 내 일은 내가 알아서 해요.",
            "어려운 일을 만나면 좌절하기보다 신선한 자극으로 받아들이고 극복해요. 단순반복적인 일보다 변화무쌍한 일에 더 매력을 느껴요.",
            "사람들과 같이 있을 때와 혼자 있을 때 모습이 달라요. 혼자 있을 때는 늘어지고 망상도 많이 해요.",
            "일을 할 때 완벽하게 처리하는 것을 추구해요. 일을 못하는 사람에게는 가차없기도 해요."
        ],
        link : "/result/INFJ",
        imgSrc : "/icon/mbti/entj.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
