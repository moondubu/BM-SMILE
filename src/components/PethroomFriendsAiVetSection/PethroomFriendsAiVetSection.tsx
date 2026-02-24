import { prefixPath } from "@/utils/path"
import "./PethroomFriendsAiVetSection.css"

export default function PethroomFriendsAiVetSection() {
  return (
    <section className="PethroomFriendsAiVet">
      <div className="PethroomFriendsAiVet-top">
        <div className="PethroomFriendsAiVet-visual">
          <img src={prefixPath("/images/friends/img_friends_aivet_01.png")} alt="AI 상담 인터페이스 예시 1" />
          <img src={prefixPath("/images/friends/img_friends_aivet_02.png")} alt="AI 상담 인터페이스 예시 2" />
        </div>
        <div className="PethroomFriendsAiVet-header">
          <p className="PethroomFriendsAiVet-label">03</p>
          <h2 className="PethroomFriendsAiVet-title">수의사 AI{"\n"}챗봇 서비스</h2>
          <p className="PethroomFriendsAiVet-description">
            실제 임상 경험을 가진 수의사 인플루언서 윤쌤과의 협업으로 설계된 AI 챗봇입니다.
            윤쌤의 상담 기준과 케어 노하우를 AI에 이식해, 보호자가 신뢰할 수 있는 일상 케어 가이드를 제공합니다.
          </p>
        </div>
      </div>

      <div className="PethroomFriendsAiVet-models">
        <h3 className="PethroomFriendsAiVet-modelsTitle">건강, 행동, 일상 고민에 따라 가장 적합한 상담을 제공하는 페스룸 AI 모델</h3>

        <div className="PethroomFriendsAiVet-modelGrid">
          <article className="PethroomFriendsAiVet-mainModel">
            <div className="PethroomFriendsAiVet-mainProfile">
              <img src={prefixPath("/images/friends/img_friends_aivet_03.png")} alt="수의사 윤샘" />
              <div className="PethroomFriendsAiVet-mainProfileText">
                <h4>수의사 윤샘</h4>
                <p>건강·증상 종합 상담 AI</p>
              </div>
            </div>
            <div className="PethroomFriendsAiVet-mainCareer">
              <ul>
                <li>유튜브 총 구독자 수 40만명+</li>
                <li>건국대학교 수의학과졸업</li>
                <li>월드펫 동물병원 원장</li>
                <li>서울시 수의사회 이사</li>
                <li>한국 동물병원 협회 이사</li>
              </ul>
              <ul>
                <li>윤샘의 마이펫 상담소 채널 운영</li>
                <li>윤샘의 강아지 상담소 채널 운영</li>
                <li>SBS TV 동물농장 자문 수의사</li>
                <li>MBN 매일아침 펫테랑 자문 수의사</li>
                <li>페스룸 자문 수의사</li>
              </ul>
            </div>
          </article>

          <div className="PethroomFriendsAiVet-sideModels">
            <article className="PethroomFriendsAiVet-sideModel">
              <img src={prefixPath("/images/friends/img_friends_aivet_04.png")} alt="알렉스" />
              <div>
                <h4>알렉스</h4>
                <p>강아지 행동 & 일상 고민 AI</p>
              </div>
            </article>

            <article className="PethroomFriendsAiVet-sideModel">
              <img src={prefixPath("/images/friends/img_friends_aivet_05.png")} alt="보스" />
              <div>
                <h4>보스</h4>
                <p>고양이 행동 & 일상 고민 AI</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
