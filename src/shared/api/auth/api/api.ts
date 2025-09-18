import { AxiosBase } from "../../axios";
import type { LoginPayload, LoginResponse, StatusResponse } from "../../../model/auth";
import { pathServices } from "../../path";

export const fetchAuthStatus = async (): Promise<StatusResponse> => {
  const { data } = await AxiosBase.get(pathServices.auth.auth);
  return data;
};

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const { data } = await AxiosBase.post(pathServices.auth.login, payload);
  return data;
};
