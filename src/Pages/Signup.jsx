import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "../css/Signup.module.css"; //

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userId = e.target.userId.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BACK_END_URL}/api/auth/signup`,
        { userId, password },
        { headers: { "Content-Type": "application/json" } }
      );

      alert("회원가입 성공!");
      navigate("/login");
    } catch (err) {
      console.error("회원가입 실패:", err);
      alert("회원가입 실패: " + (err.response?.data?.message || err.message));
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.title}>회원가입</h2>

        <label htmlFor="userId" className={styles.label}>
          아이디
        </label>
        <input
          type="text"
          id="userId"
          name="userId"
          autoComplete="userId"
          required
          className={styles.input}
        />

        <label htmlFor="password" className={styles.label}>
          비밀번호
        </label>
        <input
          type="password"
          id="password"
          name="password"
          autoComplete="current-password"
          required
          className={styles.input}
        />

        <label htmlFor="confirmPassword" className={styles.label}>
          비밀번호 확인
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          autoComplete="current-password"
          required
          className={styles.input}
        />

        <button type="submit" className={styles.submitButton}>
          회원가입
        </button>

        <p className={styles.bottomText}>
          이미 계정이 있으신가요?{" "}
          <button
            type="button"
            className={styles.linkButton}
            onClick={() => navigate("/login")}
          >
            로그인
          </button>
        </p>
      </form>
    </div>
  );
};

export default Signup;
