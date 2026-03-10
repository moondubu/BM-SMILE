# BMSMILE Website

BMSMILE 웹사이트 프로젝트입니다.  
Next.js(App Router) 기반으로 구성되어 있으며, 문의 메일 전송 API와 로케이션 페이지를 포함합니다.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- ESLint
- Resend (문의 메일 발송)

## Getting Started

1. 의존성 설치

```bash
npm install
```

2. 환경 변수 파일 준비

```bash
cp .env.example .env.local
```

3. 개발 서버 실행

```bash
npm run dev
```

4. 브라우저에서 확인

`http://localhost:3000`

## Environment Variables

`.env.local`에 아래 값을 설정합니다.

- `NEXT_PUBLIC_SITE_URL`: 사이트 기본 URL
- `RESEND_API_KEY`: Resend API 키
- `RESEND_FROM`: 발신자 이메일
- `CONTACT_TO`: 문의 수신 이메일
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` (선택): Google Maps Embed API 키

## Scripts

- `npm run dev`: 개발 서버 실행
- `npm run build`: 프로덕션 빌드
- `npm run start`: Next.js 서버 실행
- `npm run lint`: ESLint 검사

## Build and Deployment

현재 `next.config.ts`에서 `output: "export"`를 사용하고 있어 정적 결과물이 `out/` 디렉터리에 생성됩니다.

```bash
npm run build
```

정적 호스팅 환경(Nginx, S3+CloudFront 등)에서는 `out/`을 배포 대상으로 사용하세요.

주의: `output: "export"` 설정에서는 `/api/contact` 같은 서버 라우트 사용 방식이 호스팅 구조에 따라 달라질 수 있으니, 배포 방식에 맞춰 API를 별도 백엔드로 분리하거나 Node 런타임 배포 구성으로 전환해야 합니다.
