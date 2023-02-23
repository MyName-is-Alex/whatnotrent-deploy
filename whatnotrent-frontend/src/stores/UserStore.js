import axios from "axios";
import { ApiRoutes } from "../ApiRoutes";
import authHeader from "../components/api-authorization/authHeader";

const fetchUserInfo = async () => {
  const response = await axios.get(ApiRoutes.UserInfo, authHeader());
  return response["data"];
};

const postUserUpdate = async (formData) => {
  const response = await axios.post(
    ApiRoutes.UpdateUser,
    formData,
    authHeader()
  );
  return response["data"];
};

const userStore = {
  fetchUserInfo,
  postUserUpdate,
};

export default userStore;
