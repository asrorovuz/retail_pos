import { useQuery } from "@tanstack/react-query";
import { AxiosBase } from "../../axios";
import type { LoginPayload, LoginResponse, StatusResponse } from "../../../../app/model/auth";

export const fetchAuthStatus = async (): Promise<StatusResponse> => {
  const { data } = await AxiosBase.get("/public/auth/status");
  return data;
};

export const useAuthStatus = () => {
  return useQuery({
    queryKey: ["auth-status"],
    queryFn: fetchAuthStatus,
  });
};

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  const { data } = await AxiosBase.post("/public/auth/login", payload);
  return data;
};
