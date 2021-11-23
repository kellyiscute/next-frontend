import GithubSummary from "components/github-summary";
import WakaTimeSummary from "components/wakatime-summary";
import { IWakatimeSummary } from "models/wakatime/summary";
import { NextComponentType } from "next";
import { IconContext } from "react-icons";
import style from "./summary.module.scss";

interface ISummaryProps {
  wakatimeSummary: IWakatimeSummary;
}
const Summary: NextComponentType<never, never, ISummaryProps> = ({
  wakatimeSummary,
}) => {
  return (
    <div className={style.root}>
      <IconContext.Provider
        value={{ color: "#bbbbbb", style: { marginRight: "0.3rem" } }}
      >
        <WakaTimeSummary wakatimeSummary={wakatimeSummary} />
        <div className={style.spacer} />
        <GithubSummary />
      </IconContext.Provider>
    </div>
  );
};

export default Summary;
