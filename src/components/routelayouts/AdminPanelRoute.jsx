import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AdminPanelRoute = () => {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(loading) return;
    if (currentUser) {
      console.log(currentUser.uid);
      if (currentUser.uid !== "JbEwn1D7UmRuCLGgFB5CfV6J8mK2") {
        navigate("/login");
      }
    }
  }, [currentUser, navigate]);

  return <Outlet />;
};

export default AdminPanelRoute;
