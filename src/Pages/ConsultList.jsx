import { useEffect, useState } from "react";
import { checkAuth } from "../utils/checkAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/ConsultList.css";

const ConsultList = () => {
  const [lists, setLists] = useState([]);
  const [authLoading, setAuthLoading] = useState(false);
  const [id, setId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      setAuthLoading(true);
      await checkAuth(navigate);
      setAuthLoading(false);

      const userId = localStorage.getItem("userId");
      setId(userId);

      try {
        const res = await axios.post(
          `${process.env.REACT_APP_BACK_END_URL}/api/chat/lists`,
          { userId },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setLists(res.data);
      } catch (err) {
        console.error("데이터 불러오기 실패:", err);
      }
    };

    fetchData();
  }, [navigate]);

  const handleDelete = async (consultId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_BACK_END_URL}/api/chat/lists/${consultId}`
      );
      setLists((prev) => prev.filter((item) => item.id !== consultId));
    } catch (err) {
      console.error("삭제 실패:", err);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="list-container">
      <div className="fixed-header">{id} 님의 상담일지</div>

      <div className="scroll-area">
        {lists.length === 0 ? (
          <p className="no-list-message">
            상담 내역이 없습니다.
            <br />
            AI에게 사랑 고민을 털어놔보세요!
          </p>
        ) : (
          lists.map((item, i) => (
            <div key={item.id} className="consult-card">
              <div className="consult-question">
                <strong>💌 질문 {i + 1}:</strong> {item.question}
              </div>
              <div className="consult-answer">
                <strong>💡 답변:</strong> {item.answer}
              </div>
              <div className="consult-date">
                작성일: {formatDate(item.create_at)}
              </div>
              <button
                className="delete-button"
                onClick={() => handleDelete(item.id)}
              >
                삭제
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ConsultList;
