import { getApplicationUser } from "api/UsersClient";
import { IApplicationUser } from "interfaces/Models/Users/IApplicationUser";
import { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateApplicationUser } from "redux/slices/applicationUserSlice";

const CommonAdminPanelHeaderLogic = () => {
  const [applicationUser, setApplicationUser] =
    useState<IApplicationUser | null>(null);

  const disptach = useDispatch();

  const getUserDetailsAndSaveThoseInRedux = useCallback(async () => {
    const user = await getApplicationUser();
    setApplicationUser(user);
    disptach(updateApplicationUser(user));
  }, [disptach]);

  useEffect(() => {
    getUserDetailsAndSaveThoseInRedux();
  }, [getUserDetailsAndSaveThoseInRedux]);

  return { applicationUser };
};
export default CommonAdminPanelHeaderLogic;
