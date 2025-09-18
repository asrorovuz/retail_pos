import type { SettingsType } from "@/shared/model/settings";
import { AxiosBase } from "../../axios";
import { pathServices } from "../../path";

export const getSettingsApi = async (): Promise<SettingsType> => {
  const { data } = await AxiosBase.get(pathServices.settings.getSettingsPath);
  return data;
};