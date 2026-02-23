import "./StrategyPetPlatform.css"

export default function StrategyPetPlatform() {
  return (
    <section className="StrategyPetPlatform">
      <div className="StrategyPetPlatform-top">
        <div className="StrategyPetPlatform-inner">
          <div className="StrategyPetPlatform-topText">
            <p className="StrategyPetPlatform-label">No.1 Pet Platform</p>
            <h2 className="StrategyPetPlatform-title">
              수직계열화의
              <br />
              핵심 플랫폼,
              <br />
              페스룸 프렌즈
            </h2>
            <p className="StrategyPetPlatform-description">
              페스룸 프렌즈는 반려동물 보호자를 위한
              <br />
              버티컬 숏폼 콘텐츠, 리워드, 케어 서비스를
              <br />
              하나로 연결한 통합 플랫폼입니다.
            </p>
          </div>

          <div className="StrategyPetPlatform-topVisual">
            <img src="/images/strategy/img_strategy_petplatform_phones.png" alt="" aria-hidden="true" />
          </div>
        </div>
      </div>

      <div className="StrategyPetPlatform-bottom">
        <div className="StrategyPetPlatform-bottomInner">
          <header className="StrategyPetPlatform-bottomHeader">
            <h3 className="StrategyPetPlatform-bottomTitle">
              페스룸 프렌즈를 통해
              <br />
              확장되는 무한한 펫 비즈니스
            </h3>
            <p className="StrategyPetPlatform-bottomDescription">
              단순한 앱을 넘어, 사용자 행동과 반려동물 데이터를 축적·연결해
              <br />
              국내 수직계열화 전략의 핵심 인프라로 확장하고 있습니다.
            </p>
          </header>

          <div className="StrategyPetPlatform-bottomContents">
            <div className="StrategyPetPlatform-diagram">
              <img src="/images/strategy/img_strategy_petplatform_diagram.png" alt="" aria-hidden="true" />
            </div>

            <div className="StrategyPetPlatform-featureList">
              <article className="StrategyPetPlatform-featureItem">
                <h4 className="StrategyPetPlatform-featureTitle">독자적인 마케팅 & 유통 채널</h4>
                <p className="StrategyPetPlatform-featureDescription">
                  외부 플랫폼 의존을 최소화하고,
                  {"\n"}
                  펫 인플루언서 네트워크
                  {"\n"}
                  자동 형성 생태계를 보유합니다.
                </p>
              </article>

              <article className="StrategyPetPlatform-featureItem">
                <h4 className="StrategyPetPlatform-featureTitle">
                  수직계열화를 위한
                  {"\n"}
                  반려동물 데이터 축적
                </h4>
                <p className="StrategyPetPlatform-featureDescription">
                  페스룸 IoT 디바이스 연동
                  {"\n"}
                  & AI 컨설팅 서비스를 통해
                  {"\n"}
                  반려동물 데이터를 축적합니다.
                </p>
              </article>

              <article className="StrategyPetPlatform-featureItem">
                <h4 className="StrategyPetPlatform-featureTitle">확장 가능성</h4>
                <p className="StrategyPetPlatform-featureDescription">
                  반려동물 데이터와
                  {"\n"}
                  마케팅 자산을 기반으로
                  {"\n"}
                  무한한 비즈니스 확장성을 가집니다.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
