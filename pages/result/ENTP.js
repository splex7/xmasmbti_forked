import Result from '@components/result/Result'
import 'bootstrap/dist/css/bootstrap.css';

export default function ENTP() {
    const mbti = {
        mbtiName : "ENTP",
        treeName : "말빨 쎈 청산유수 트리",
        description : [
            "하고 싶은 말은 꼭 하고 살아야 해요. 토론을 즐기고 말로 지는 걸 싫어해서 다른 사람의 의견이 내 의견과 다르면 어떻게든 설득해요.",
            "충동적으로 일 벌리는 건 잘하는데 뒷심이 부족해요. 성격이 급하고 꼼꼼하지 않아서 의외로 허당이에요. 큰 그림은 잘 보지만 세부적인 것에 약해요.",
            "사람 만나는 걸 좋아하지만 혼자만의 시간은 꼭 필요해요. 이끄는 걸 싫어하지만 막상 맡으면 또 잘해요.",
            "임기응변에 강해요. 기존과는 다른 각도에서 바라보고 새로운 해결방법을 찾아내요.",
            "정석적으로 노력하기보다 지름길이나 꼼수를 잘 찾아내요. 과정보다 결과를 더 중요시해요."
        ],
        link : "/result/ENTP",
        imgSrc : "/icon/mbti/entp.png"
    };
    return (
        <Result mbti = {mbti} />
    )
}
