import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { authApi } from "../../../api/authApi";
import { IUserResponse } from "../../../api/types";
import useStore from "../../../store";

const Profile = () => {
  const store = useStore();
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      store.setRequestLoading(true);
      const response = await authApi.get<IUserResponse>("/users/me");
      store.setRequestLoading(false);
      store.setAuthUser(response.data.data.user);
    } catch (error: any) {
      store.setRequestLoading(false);
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      toast.error(resMessage, {
        position: "top-right",
      });
      // navigate("/login");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const user = store.authUser;

  return (
    <div className="pl-[200px] flex justify-center">
      <h1 className="h1">Profile</h1>
    </div>
    
  );
};

export default Profile;
