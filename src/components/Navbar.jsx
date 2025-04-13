import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../css/Navbar.module.css";

const Navbar = () => {
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("jwtToken");
  const isLoggedIn = token && userId;

  const handleLogout = () => {
    const confirmLogout = window.confirm("정말 로그아웃 하시겠습니까?");
    if (!confirmLogout) return;

    localStorage.removeItem("jwtToken");
    localStorage.removeItem("userId");
    navigate("/");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftLinks}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/prompt" className={styles.link}>Prompt</Link>
        <Link to="/consultList" className={styles.link}>ConsultList</Link>
      </div>

      <div className={styles.rightActions}>
        {isLoggedIn ? (
          <>
            <span className={styles.greeting}>{userId}님 안녕하세요 😊</span>
            <button onClick={handleLogout} className={styles.logoutBtn}>로그아웃</button>
          </>
        ) : (
          <button onClick={() => navigate("/login")} className={styles.loginBtn}>
            로그인하기
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;