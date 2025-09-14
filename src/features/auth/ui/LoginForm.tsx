import { Controller, FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FiLogIn } from "react-icons/fi"
import { Button, Form, Input, message } from "antd"
import type { LoginPayload } from "../../../app/model/auth"
import { validationSchema } from "../../../app/schema/auth"
import { useAuthContext } from "../../../app/providers/AuthProvider"
import { useNavigate } from "react-router"

const LoginForm = () => {
  const { login, loading } = useAuthContext()
  const navigate = useNavigate()

  const form = useForm<LoginPayload>({
    resolver: zodResolver(validationSchema),
    defaultValues: { username: "", password: "", certificate: null },
  })

  const onSubmit = async (formData: LoginPayload) => {
    try {
      await login(formData)
      message.success("✅ Login successful")
      navigate("/sales") // ✅ login tugagandan keyin dashboardga yo‘naltiramiz
    } catch {
      message.error("❌ Login failed")
    }
  }

  return (
    <FormProvider {...form}>
      <Form layout="vertical" onFinish={form.handleSubmit(onSubmit)}>
        {/* Username */}
        <Controller
          name="username"
          control={form.control}
          render={({ field, fieldState }) => (
            <Form.Item
              label="Username"
              validateStatus={fieldState.error ? "error" : ""}
              help={fieldState.error?.message}
              required
            >
              <Input {...field} size="large" placeholder="Enter username" autoComplete="off" />
            </Form.Item>
          )}
        />

        {/* Password */}
        <Controller
          name="password"
          control={form.control}
          render={({ field, fieldState }) => (
            <Form.Item
              label="Password"
              validateStatus={fieldState.error ? "error" : ""}
              help={fieldState.error?.message}
              required
            >
              <Input.Password {...field} size="large" placeholder="Enter password" autoComplete="off" />
            </Form.Item>
          )}
        />

        {/* Submit button */}
        <Form.Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            block
            loading={loading}
            icon={<FiLogIn />}
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Form.Item>
      </Form>
    </FormProvider>
  )
}

export default LoginForm
