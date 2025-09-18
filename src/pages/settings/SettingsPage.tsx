import GlobalSettings from "@/features/settings/GlobalSettings"
import PageLayout from "@/widgets/layout/PageLayout"

const SettingsPage = () => {
  return (
    <PageLayout 
        main={
          <div className="p-2">
            <GlobalSettings />
          </div>
        }
        footer={true}
    />
  )
}

export default SettingsPage