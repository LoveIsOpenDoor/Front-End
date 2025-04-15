# 💘 AI 연애 상담 웹서비스(2025.04.11~2024.04.15)

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

### 📁 폴더 구조

<pre>

📦 root
 ┣ 📂src                     # 소스 코드 루트
 ┃ ┣ 📂components           # 공통 컴포넌트
 ┃ ┃ ┗ 📜Navbar.jsx         # 네비게이션
 ┃ ┣ 📂css                  # 스타일 파일 모음
 ┃ ┣ 📂Pages                # 페이지별 구성
 ┃ ┣ 📂utils                # 유틸 함수
 ┃ ┃ ┗ 📜checkAuth.js       # 인증 확인
 ┃ ┣ 📜App.js               # 라우팅
 ┃ ┣ 📜index.js             # 진입점
 ┃ ┗ 📜index.css            # 글로벌 스타일
 ┣ 📂public                 # 정적 파일 (비어있음)
 ┣ 📂.github/workflows      # GitHub Actions
 ┃ ┗ 📜docker.yml               # CI/CD 구성
 ┣ 📜Dockerfile             # Docker 설정
 ┣ 📜.gitignore             # Git 제외 설정
┗ 📜README.md               # 프로젝트 설명

</pre>
---

## 👨‍💻 개발자
이정임 (Jomim2) — 프론트엔드 개발 & UI/UX 디자인

## 📜 후기

이번 프로젝트는 사용자 친화적인 **연애상담 서비스 웹사이트**를 만드는 것을 목표로 시작했습니다.  
특히 **네온 감성의 세련된 UI/UX**를 강조하고 싶었고, 반응형 웹까지 고려하여 다양한 디바이스에서도 완성도 있게 보이도록 디자인했습니다.

- **React**를 기반으로 전체 구조를 설계하고 페이지 라우팅을 구현했으며,  
- 다양한 상황에서도 직관적인 흐름을 유지하기 위해 **상담 흐름 UX**를 정제하는 데 집중했습니다.  
- CSS는 직접 커스터마이징하며, **Neon UI, Glassmorphism, 애니메이션 효과** 등을 조합해 시각적으로 매력 있는 디자인을 구현했습니다.

또한 로그인/회원가입/상담기록 등 기능별 화면에서 **일관된 디자인과 인터랙션**을 유지하면서도,  
**각 페이지의 목적에 맞는 포인트 요소**를 넣어 사용자 몰입도를 높였습니다.

> 처음 기획부터 완성까지 직접 구현하며 프론트엔드 개발자로서 한 단계 더 성장할 수 있었던 시간이었다고 생각합니다.  
> 작은 디테일 하나까지 신경 쓰며 코드를 구성했고, 그만큼 결과물에 대한 애정도 큽니다.  
> 앞으로도 더 나은 사용자 경험을 고민하며 발전해나가고 싶습니다.

## 사이트 바로가기
## http://sdhportfolio.kro.kr:3000
