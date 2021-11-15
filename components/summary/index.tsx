import WakaTimeSummary from "components/wakatime-summary";
import { IWakatimeSummary } from "models/wakatime/summary";
import { NextComponentType } from "next";
import style from "./summary.module.scss";

interface ISummaryProps {
  wakatimeSummary: IWakatimeSummary;
}
const Summary: NextComponentType<never, never, ISummaryProps> = ({
  wakatimeSummary,
}) => {
  return (
    <div className={style.root}>
      <WakaTimeSummary wakatimeSummary={wakatimeSummary} />
    </div>
  );
};

export default Summary;
