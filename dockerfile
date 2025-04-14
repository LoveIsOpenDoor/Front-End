# 1단계: 빌드 환경 설정
FROM node:18-alpine AS builder

# 작업 디렉토리 설정
WORKDIR /app

# 의존성 설치
COPY package*.json ./
RUN npm install

# 전체 프로젝트 복사 및 빌드
COPY . .
RUN npm run build

# 2단계: 경량화된 서버 이미지
FROM nginx:stable-alpine

# Nginx 기본 설정 삭제 및 새로 복사
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/build /usr/share/nginx/html

# Nginx 설정 파일 덮어쓰기 (선택사항)
# COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]