import { IWakatimeSummaryItemDetail } from "./detail";

export interface IWakatimeSummary {
  data: {
    total_seconds: number;
    human_readable_total: string;
    daily_average: number;
    human_readable_daily_average: string;
    projects: IWakatimeSummaryItemDetail[];
    languages: IWakatimeSummaryItemDetail[];
    editors: IWakatimeSummaryItemDetail[];
  };
}
