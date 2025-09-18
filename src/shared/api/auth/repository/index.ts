import { useMutation, useQuery } from "@tanstack/react-query"
import { fetchAuthStatus, login } from "../api/api"
import type { LoginPayload, LoginResponse } from "../../../model/auth"

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: login,
  })
}

export const useAuthStatus = () => {
  return useQuery({
    queryKey: ["auth-status"],
    queryFn: fetchAuthStatus,
  });
};
