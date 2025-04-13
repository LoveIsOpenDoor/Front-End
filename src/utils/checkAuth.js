import axios from "axios";

export const checkAuth = async (navigate) => {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
        console.log("브라우저에서 redirect");
        alert("로그인 후 사용해주세요!");
        navigate("/login");
        return false;
    }

    try {
        await axios.get(`${process.env.REACT_APP_BACK_END_URL}/api/auth/verify-token`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return true;
    } catch (err) {
        console.log("서버반환값으로 redirect");
        alert("로그인 후 사용해주세요!");
        navigate("/login");
        return false;
    }
};