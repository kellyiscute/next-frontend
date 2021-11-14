export interface IWakatimeSummaryItemDetail {
  name: string;
  /// float
  total_seconds: number;
  /// float
  percent: number;
  digital: string;
  /// human readable total coding activity
  text: string;
  hours: number;
  minutes: number;
}
