'use client'

import { prefixPath } from '@/utils/path'
import './Contribution1004.css'

export default function Contribution1004() {
    return (
        <section className="Contribution1004">
            <div className="Contribution1004-bg">
                <img
                    src={prefixPath("/images/contribution/img_contribution_1004_01.png")}
                    alt="PETHROOM 1004 Project Background"
                />
            </div>
            <div className="Contribution1004-inner">
                <div className="Contribution1004-content">
                    <h2 className="Contribution1004-title">
                        PETHROOM<br />
                        1004 Project
                    </h2>
                    <p className="Contribution1004-description">
                        보호소에서 시작된 이야기는 콘텐츠가 되고, 브랜드가 되며,<br />
                        마침내 새로운 가족을 만나는 순간으로 이어집니다.<br />
                        우리는 구조와 입양을 넘어 동물 복지와 제도 개선의 흐름에도 현장에서 힘을 보태고 있습니다.<br />
                        이 뜻깊은 여정에는 대한민국을 대표하는 동물 보호 단체들이 함께하고 있습니다.<br />
                        이건 선의가 아닌, 페스룸의 동물들을 돕는 방식입니다.
                    </p>
                </div>
            </div>
        </section>
    )
}
