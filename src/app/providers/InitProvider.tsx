import { useEffect, type ReactNode } from "react";
import { useSettingsStore } from "@/shared/store/useSettingsStore";
import { useSettingsApi } from "@/shared/api/init/repository/repository";

export const InitProvider = ({ children }: { children: ReactNode }) => {
  const setSettings = useSettingsStore((s) => s.setSettings);

  const { data: settings } = useSettingsApi();

  useEffect(() => {
    if (settings) {
      setSettings(settings);
    }
  }, [settings, setSettings]);

  return <>{children}</>;
};