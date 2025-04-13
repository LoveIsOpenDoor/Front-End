import { useEffect, useState } from 'react';
import { checkAuth } from '../utils/checkAuth';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const ConsultList = () => {
    const [lists, setLists] = useState([]);
    const navigate = useNavigate();
    const [authLoading, setAuthLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setAuthLoading(true);
            await checkAuth(navigate);
            setAuthLoading(false);
            const id = localStorage.getItem("userId");
            try {
                const res = await axios.post(`${process.env.REACT_APP_BACK_END_URL}/api/chat/lists`, {
                    userId: id
                }, {
                    headers: {
                        "Content-Type": "application/json"
                    }
                });
                console.log(res.data);
                setLists(res.data);
            } catch (err) {
                console.error("데이터 불러오기 실패:", err);
            }
        };

        fetchData();
    }, [navigate]);

    const handleDelete = async (consultId) => {
        try {
            await axios.delete(`${process.env.REACT_APP_BACK_END_URL}/api/chat/lists/${consultId}`);
            setLists(prev => prev.filter(item => item.id !== consultId));
        } catch (err) {
            console.error("삭제 실패:", err);
        }
    };

    // 날짜 포맷 함수 (yyyy-MM-dd hh:mm)
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
        <>
            {!authLoading ? (
                <div style={{ padding: "20px" }}>
                    <h2>📝 나의 상담 리스트</h2>
                    {lists.length === 0 ? (
                        <p>상담 내역이 없습니다.</p>
                    ) : (
                        lists.map((item, i) => (
                            <div key={item.id} style={{
                                position: "relative",
                                border: "1px solid #ccc",
                                borderRadius: "10px",
                                padding: "15px",
                                marginBottom: "15px",
                                boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                            }}>
                                <div><strong>질문 {i + 1}:</strong> {item.question}</div>
                                <div><strong>답변:</strong> {item.answer}</div>

                                {/* 생성 날짜 */}
                                <div style={{
                                    position: "absolute",
                                    bottom: "10px",
                                    right: "15px",
                                    fontSize: "0.8rem",
                                    color: "#888"
                                }}>
                                    작성일: {formatDate(item.create_at)}
                                </div>

                                <button
                                    onClick={() => handleDelete(item.id)}
                                    style={{
                                        marginTop: "10px",
                                        padding: "6px 12px",
                                        backgroundColor: "#ff4d4f",
                                        color: "white",
                                        border: "none",
                                        borderRadius: "5px",
                                        cursor: "pointer"
                                    }}
                                >
                                    삭제
                                </button>
                            </div>
                        ))
                    )}
                </div>
            ) : "Loading..."}
        </>
    );
};

export default ConsultList;