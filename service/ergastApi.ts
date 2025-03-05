import { API_ROOT } from "@/app/constants";

export const fetchErgast = async <T>(path: string) => {
  const response = await fetch(`${API_ROOT}/${path}.json`);
  const responseJson = await response.json();
  
  return responseJson.MRData as T;
} 