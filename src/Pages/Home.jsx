import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../css/Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);

  const featureList = [
    {
      title: "로그인 기능",
      description: "개인화된 상담을 위해 회원 인증이 필요합니다.",
    },
    {
      title: "AI 연애 상담",
      description:
        "연애 고민을 AI에게 털어놓아보세요. 진심을 담은 답변을 드립니다.",
    },
    {
      title: "상담 기록 저장",
      description: "나만의 연애 히스토리를 기록하고 돌아볼 수 있어요.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featureList.length);
    }, 5000); // 3초마다 변경

    return () => clearInterval(interval);
  }, []);

  const handleStart = () => {
    const token = localStorage.getItem("jwtToken");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      navigate("/prompt");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LOVE IS AN OPEN DOOR</h1>
      <p className={styles.subtitle}>연애의 고민, AI와 함께 해결해보세요.</p>

      <div className={styles.featureCardWrapper}>
        <div key={currentIndex} className={styles.featureCard}>
          <h2>{featureList[currentIndex].title}</h2>
          <p>{featureList[currentIndex].description}</p>
        </div>
      </div>

      <div className={styles.cta}>
        <button className={styles.loginBtn} onClick={handleStart}>
          지금 시작하기
        </button>
      </div>
    </div>
  );
};

export default Home;
