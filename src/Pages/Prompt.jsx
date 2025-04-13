import styles from "../css/Prompt.module.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { checkAuth } from "../utils/checkAuth";

const Prompt = () => {
  const [authLoading, setAuthLoading] = useState(false);
  const [textValues, setTextValues] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const check = async () => {
      setAuthLoading(true);
      await checkAuth(navigate);
      setAuthLoading(false);

      const name = localStorage.getItem("userId");
      if (name) {
        setUserId(name);
      }
    };
    check();
  }, [navigate]);

  const requestData = async () => {
    if (!textValues.trim()) {
      alert("문제 내용을 입력해주세요!");
      return;
    }

    setLoading(true);
    setError(null);
    const beforeText = textValues;
    setTextValues("답변을 작성중입니다...");
    try {
      const response = await fetch(`${process.env.REACT_APP_BACK_END_URL}/api/chat`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: userId,
          question: textValues,
        }),
      });
      if (!response.ok) {
        throw new Error("API 요청 실패");
      }

      const data = await response.json();
      setResponseData(data);
      setTextValues(beforeText);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {!authLoading ? (
        <div className={styles.mainBox}>
          <h1>{userId}님 환영합니다 💌</h1>
          <div className={styles.desc}>
            <p>"연애 전문가 🤖 AI와 함께하는 스마트한 상담"</p>
            <p>"연애의 고민, 🤖 AI가 해결해 드립니다!"</p>
            <p>"사랑에 대한 궁금증, 🤖 AI가 친절히 답해드립니다!"</p>
          </div>

          <div className={styles.promptBox}>
            <label>상담내용</label>
            <textarea
              value={textValues}
              onChange={(e) => {
                const text = e.target.value;
                if (!loading) {
                  setTextValues(text);
                } else {
                  setTextValues("답변작성중...");
                }
              }}
            />
            <button onClick={requestData} disabled={loading}>
              생성하기
            </button>
          </div>

          <div className={styles.responseBox}>
            <h3>상담 결과 :</h3>
            {loading ? "답변작성중..." : responseData && <p>{responseData.answer}</p>}
          </div>

          {error && <p className={styles.errorMessage}>에러 : {error}</p>}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Prompt;