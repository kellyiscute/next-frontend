import axios from "axios";
import { IWakatimeSummary } from "models/wakatime/summary";

export async function getWakaTimeSummary(): Promise<IWakatimeSummary> {
  const token = process.env.WAKATIME_TOKEN;
  console.log({ token });
  const url = "https://wakatime.com/api/v1/users/current/stats/all_time";
  const res = await axios({
    url,
    params: {
      api_key: token,
    },
  });
  return res.data;
}
