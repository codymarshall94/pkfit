import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import LoadingSpinner from "../LoadingSpinner";

const AdminPanelRoute = () => {
  const { currentUser, loading } = useAuth();
  const navigate = useNavigate();

  console.log(currentUser);

  if (loading) {
    return <LoadingSpinner />
  }

  if (currentUser && currentUser.uid !== "JbEwn1D7UmRuCLGgFB5CfV6J8mK2") {
    navigate("/");
  } else if (!currentUser) {
    navigate("/");
  } else {
    return <Outlet />;
  }
};

export default AdminPanelRoute;
