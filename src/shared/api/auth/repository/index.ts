import { useMutation } from "@tanstack/react-query"
import { login } from "../api/api"
import type { LoginPayload, LoginResponse } from "../../../../app/model/auth"

export const useLogin = () => {
  return useMutation<LoginResponse, Error, LoginPayload>({
    mutationFn: login,
  })
}
