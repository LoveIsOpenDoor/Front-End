import React from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import styles from "../css/Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = e.target.userId.value;
    const password = e.target.password.value;

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACK_END_URL}/api/auth/login`,
        { userId, password },
        { headers: { "Content-Type": "application/json" } }
      );

      const { token } = res.data;
      if (token) {
        localStorage.setItem("jwtToken", token);
      }

      localStorage.setItem("userId", userId);
      alert("로그인 성공!");
      navigate("/prompt");
    } catch (err) {
      alert("로그인 실패: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2 className={styles.title}>로그인</h2>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <label htmlFor="userId">아이디</label>
        <input type="text" id="userId" name="userId" required />

        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" name="password" required />

        <button type="submit" className={styles.loginBtn}>
          로그인
        </button>

        <p className={styles.signupPrompt}>
          아직 계정이 없으신가요?{" "}
          <Link to="/signup" className={styles.signupLink}>
            회원가입
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
