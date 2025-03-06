import { API_ROOT } from "@/app/constants";

export const fetchErgast = async <T>(
  path: string,
  config?: {
    limit?: string;
    offset?: string;
  }
) => {
  const queryParams = new URLSearchParams();
  if (config) {
    if (config.limit) queryParams.append("limit", config.limit);
    if (config.offset) queryParams.append("offset", config.offset);
  }

  const response = await fetch(`${API_ROOT}/${path}.json?${queryParams.toString()}`);
  const responseJson = await response.json();

  if (!responseJson.MRData) {
    console.log(responseJson);
  }
  
  return responseJson.MRData as T;
} 