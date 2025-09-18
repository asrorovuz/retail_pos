import { LangOptions } from "@/shared/constants/settings.constants"
import type { SettingsType } from "@/shared/model/settings"
import { useSettingsStore } from "@/shared/store/useSettingsStore"
import { Select, Button } from "antd"
import Title from "antd/es/typography/Title"
import { useForm, Controller } from "react-hook-form"

const GlobalSettings = () => {
  const { settings } = useSettingsStore((store) => store)
  const { control, handleSubmit } = useForm<SettingsType>({
    defaultValues: {
      lang: settings?.lang || "ru",
    },
  })

  const onSubmit = (data: SettingsType) => {
    console.log("Form data:", data)
    // bu yerda storega yozish yoki api yuborish mumkin
  }

  return (
    <>
      <Title level={3}>Настройки</Title>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="lang"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              style={{ width: 200 }}
              options={LangOptions}
            />
          )}
        />

        <Button type="primary" htmlType="submit" style={{ marginLeft: 16 }}>
          Сохранить
        </Button>
      </form>
    </>
  )
}

export default GlobalSettings
