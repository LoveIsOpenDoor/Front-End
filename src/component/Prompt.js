import styles from "../css/Prompt.module.css";
import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
const Prompt = () => {
  const [textValues, setTextValues] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
      ;
      const response = await fetch(process.env.REACT_APP_API_URL, {
        method: "POST",
        header: {
          "Content-Type:": "application/json",
        },
        body: JSON.stringify({ query: textValues }),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("API 요청 실패");
      }

      const data = await response.json();
      setResponseData(data);
      setTextValues(beforeText);
      console.log(data);
    } catch (err) {
      setError(err.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className={styles.mainBox}>
        <h1>💑연애상담💑</h1>
        <div className={ styles.desc }>
          <p>"연애 전문가 🤖AI와 함께하는 스마트한 상담"</p>
          <p>"연애의 고민, 🤖AI가 해결해 드립니다!"</p>
          <p>"사랑에 대한 궁금증, 🤖AI가 친절히 답해드립니다!"</p>
          {/* <p>연애 상담을 연애전문가 🤖로봇이🤖와 상담해보세요!</p> */}
        </div>

        <div className={styles.promptBox}>
          <p>상담내용</p>
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
          <h2>상담 결과 : </h2>

          {
            loading ?
              "답변작성중..."
              : (responseData) && <p>{responseData.consult}</p>
          }
        </div>
        {error && <p className={styles.errorMessage}>에러 : {error}</p>}
      </div>
    </>
  );
};

export default Prompt;
