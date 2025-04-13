import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    const token = localStorage.getItem("jwtToken");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      navigate("/prompt"); // 로그인 되어있으면 prompt로 이동
    } else {
      navigate("/login"); // 아니면 로그인 페이지로 이동
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>💖 LOVE IS OPEN DOOR 💖</h1>
      <p className={styles.subtitle}>
        연애의 고민, AI와 함께 해결해보세요.  
        당신의 사랑 이야기는 문을 열어둘 자격이 있습니다. 🚪
      </p>

      <div className={styles.features}>
        <div className={styles.featureCard}>
          <h2>🔐 로그인 기능</h2>
          <p>개인화된 상담을 위해 회원 인증이 필요합니다.</p>
        </div>
        <div className={styles.featureCard}>
          <h2>🤖 AI 연애 상담</h2>
          <p>연애 고민을 AI에게 털어놓아보세요.  
            진심을 담은 답변을 드립니다.</p>
        </div>
        <div className={styles.featureCard}>
          <h2>📝 상담 기록 저장</h2>
          <p>나만의 연애 히스토리를 기록하고 돌아볼 수 있어요.</p>
        </div>
      </div>

      <div className={styles.cta}>
        <button className={styles.loginBtn} onClick={handleStart}>
          지금 시작하기 💌
        </button>
      </div>
    </div>
  );
};

export default Home;