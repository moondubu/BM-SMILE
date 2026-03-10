# BMSMILE Homepage

BMSMILE 공식 홈페이지 프로젝트입니다.  
Next.js App Router 기반으로 구성되어 있으며, SEO를 고려한 SSR 배포(AWS Amplify)와 문의 메일 API를 포함합니다.

## 기술 스택

- Next.js 16 (`next@16.1.6`)
- React 19 (`react@19.2.3`)
- TypeScript
- ESLint 9
- Resend (문의 메일 전송)
- Swiper (슬라이드 UI)

## 주요 경로

- `/` 메인
- `/strategy` 전략
- `/growth` 성장
- `/environment` 환경/문화
- `/contribution` 사회공헌
- `/pethroom` 페스룸
- `/pethroom-friends` 페스룸 프렌즈
- `/subsidiary` 계열사
- `/people` 인재
- `/location` 오피스 위치
- `/career` 채용
- `/contact` 문의
- `/api/contact` 문의 메일 전송 API (`POST`, SSR 런타임)

## 프로젝트 구조

```text
src/app           # 라우트, 레이아웃, 페이지별 CSS, API route
src/components    # 페이지 조합 컴포넌트
src/data          # 섹션/콘텐츠 데이터 상수
public/images     # 정적 이미지 자산
public/fonts      # 로컬 폰트 자산
docs              # 프로젝트 문서
```

## 실행 방법

1. 의존성 설치

```bash
npm install
```

2. 환경 변수 설정 (`.env.local`)

```env
NEXT_PUBLIC_SITE_URL=https://example.com
RESEND_API_KEY=re_xxx
RESEND_FROM=onboarding@resend.dev
CONTACT_TO=contact@example.com
# 선택
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=
```

3. 개발 서버 실행

```bash
npm run dev
```

4. 브라우저 접속

`http://localhost:3000`

## 환경 변수

- `NEXT_PUBLIC_SITE_URL`: 사이트 기본 URL (메타/절대 경로 처리용)
- `RESEND_API_KEY`: Resend API 키 (`/api/contact` 사용 시 필수)
- `RESEND_FROM`: 문의 메일 발신자 주소 (미설정 시 `onboarding@resend.dev`)
- `CONTACT_TO`: 문의 메일 수신자 주소 (미설정 시 `contact@bmsmile.com`)
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`: Location 페이지 Google Maps Embed API 키 (선택)

## 스크립트

- `npm run dev`: 개발 서버 실행
- `npm run build`: 프로덕션 빌드
- `npm run start`: 프로덕션 서버 실행
- `npm run lint`: ESLint 검사

## Docker 이미지

- `Dockerfile`은 Node 런타임에서 `next start`로 SSR 서버를 실행합니다.
- 최종 runner 이미지는 실행에 필요한 산출물(`.next`, `public`, `next.config.ts`, `node_modules`)만 포함합니다.
- 기본 컨테이너 포트는 `3000`입니다.

## GitHub Actions (GHCR)

아래 워크플로가 추가되어 있습니다.

- 공통 실행 환경: self-hosted 러너 `infinishow-office`

- `.github/workflows/ghcr-latest.yml`
  - `main` 브랜치에 push(merge)되면 GHCR에 `:latest` 태그 이미지를 빌드/푸시
- `.github/workflows/ghcr-release-tag.yml`
  - `vYYYY.MM.DD.N` 형식의 Git 태그가 push되면 동일 태그로 운영용 이미지를 빌드/푸시
  - 태그 형식 검증 실패 시 워크플로가 실패합니다.

이미지명은 기본적으로 아래 형식을 사용합니다.

`ghcr.io/<owner>/<repo>`

예시:

- `ghcr.io/bmsmile/bmsmile-homepage:latest`
- `ghcr.io/bmsmile/bmsmile-homepage:v2026.03.10.1`

## GitHub Actions (Amplify 운영 배포)

- `.github/workflows/amplify-release-deploy.yml`
  - `vYYYY.MM.DD.N` 형식의 Git 태그 push 시 AWS Amplify `RELEASE` Job 실행
  - 태그 형식 검증 + 태그 커밋이 `origin/$AMPLIFY_BRANCH` HEAD와 일치하는지 검증 (기본 `main`)
  - AWS OIDC 인증 후 Amplify 배포 상태를 polling하여 실패 시 워크플로 실패 처리

필수 GitHub Secret/Variable:

- Secret: `AWS_ROLE_TO_ASSUME`
- Variable: `AMPLIFY_APP_ID`
- Variable: `AMPLIFY_BRANCH` (기본값 `main`)
- Variable: `AWS_REGION` (기본값 `ap-northeast-2`)

운영 배포 트리거용 태그 푸시 예시:

```bash
git tag v2026.03.10.1
git push origin v2026.03.10.1
```

## AWS Amplify 설정 가이드

1. AWS Amplify에서 신규 App 생성 (리전: `ap-northeast-2`)
2. GitHub 저장소 연결 및 운영 브랜치를 `main`으로 설정
3. 루트의 `amplify.yml`을 빌드 설정으로 사용
4. Amplify 환경 변수 등록:
   - `NEXT_PUBLIC_SITE_URL`
   - `RESEND_API_KEY` (시크릿 권장)
   - `RESEND_FROM`
   - `CONTACT_TO`
   - `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (선택)

## 빌드/배포 주의사항

- SSR 배포 기준이므로 `/api/contact`가 운영에서도 동작합니다.
- `/api/contact`는 `RESEND_API_KEY`가 없으면 500 응답을 반환합니다.
- SEO 메타데이터는 App Router `metadata`를 통해 서버 응답 HTML에 포함됩니다.
- `next.config.ts`에서 `images.unoptimized`, `trailingSlash`는 유지합니다.

## 정적 배포 관련 참고

이 프로젝트는 현재 SSR 배포 기준입니다.  
정적 export 방식으로 다시 전환하면 `/api/contact` 같은 서버 라우트는 동작하지 않습니다.
