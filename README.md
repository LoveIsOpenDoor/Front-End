# 💘 AI 연애 상담 웹서비스

> 연애 고민, 더 이상 혼자 고민하지 마세요!  
> AI에게 사랑 이야기를 들려주면, 따뜻하고 진심 어린 답변을 드립니다.

---

## 🧠 프로젝트 소개

이 프로젝트는 연애 고민을 AI와 상담할 수 있는 웹서비스입니다.  
회원 가입 및 로그인 후, 사용자는 AI에게 자신의 연애 고민을 털어놓고 답변을 받을 수 있으며, 이전 상담 기록도 저장 및 조회할 수 있습니다.

---

## 🌐 주요 기능

| 기능 | 설명 |
|------|------|
| 🔐 회원가입 및 로그인 | 사용자의 아이디와 비밀번호를 통한 인증 |
| 🧑‍💬 AI 연애 상담 | 자연어 기반으로 연애 고민 입력 → AI가 답변 제공 |
| 📝 상담 내역 관리 | 나의 연애 히스토리를 저장하고 불러오기 가능 |
| 🌈 네온 감성 UI | 세련되고 감성적인 반응형 디자인 적용 |

---

## 🖼️ 주요 화면

- **홈페이지**  
  메인 소개와 기능 소개 → 로그인 or 시작하기 버튼

- **로그인 / 회원가입 페이지**  
  세련된 네온 감성 UI, 폼 유효성 검사 포함

- **Prompt (상담 입력)**  
  고민 내용을 입력하면 AI가 답변 생성

- **ConsultList (상담 내역)**  
  내가 입력했던 질문과 AI의 답변 리스트 형태로 제공  
  각 항목 삭제 기능 포함

---

## 🛠️ 사용 기술

| 영역 | 기술 |
|------|------|
| 프론트엔드 | React (with React Router), CSS Modules |
| 스타일 | 네온 UI, Glassmorphism, 반응형 디자인 (600px 이하 대응) |
| 인증 및 상태 관리 | localStorage 기반 로그인 상태 유지 |
| 서버 통신 | Axios + REST API (백엔드는 별도 Express 서버와 연결됨) |
| 배포 | Docker 기반 배포, GitHub Actions 기반 CI/CD |

---

## 🗂️ 폴더 구조

📁 프로젝트 파일 구조 및 설명
경로	설명
src/	프론트엔드 소스 코드 루트 디렉터리
src/App.js	전체 라우팅 구성 (React Router)
src/index.js	React 앱의 진입점
src/index.css	글로벌 스타일 파일
📂 Pages
경로	설명
src/Pages/Home.jsx	메인 소개 페이지
src/Pages/Login.jsx	로그인 기능 페이지
src/Pages/Signup.jsx	회원가입 페이지
src/Pages/Prompt.jsx	AI 연애 상담 기능 페이지
src/Pages/ConsultList.jsx	사용자 상담 기록 조회 및 삭제 페이지
📂 components
경로	설명
src/components/Navbar.jsx	상단 네비게이션 바 컴포넌트
📂 utils
경로	설명
src/utils/checkAuth.js	인증 상태 확인 유틸 함수 (로그인 체크 등)
📂 css
경로	설명
src/css/Home.module.css	홈 페이지 전용 스타일
src/css/Login.module.css	로그인 페이지 전용 스타일
src/css/Signup.module.css	회원가입 페이지 전용 스타일
src/css/Prompt.module.css	상담 입력/결과 페이지 스타일
src/css/ConsultList.css	상담 기록 페이지 글로벌 스타일
src/css/Navbar.module.css	네비게이션 스타일
🗂 기타 구성
경로	설명
public/	정적 리소스 (배경 이미지 등)
.github/workflows/ci.yml	GitHub Actions용 CI/CD 설정
Dockerfile	프론트엔드 앱용 Docker 이미지 빌드 설정
.gitignore	Git에서 제외할 파일/폴더 설정
README.md	프로젝트 소개 및 문서화 파일

---

## 👨‍💻 개발자
이정임 (Jomim2)	프론트엔드 개발 & UI/UX 디자인
