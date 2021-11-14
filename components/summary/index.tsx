import { IWakatimeSummary } from "models/wakatime/summary";
import { NextComponentType } from "next";
import * as echarts from "echarts";
import style from "./summary.module.scss";
import { createRef, useEffect, useRef } from "react";
import { getLanguageColor } from "utils";

interface ISummaryProps {
  wakatimeSummary: IWakatimeSummary;
}

const Summary: NextComponentType<never, never, ISummaryProps> = ({
  wakatimeSummary,
}) => {
  const langChartRef = createRef<HTMLDivElement>();
  const langChart = useRef<echarts.ECharts | null>(null);

  useEffect(() => {
    const langChart = echarts.init(langChartRef.current!, "dark");
  }, []);

  return (
    <div className={style.root}>
      <h4>WakaTime 7-days-summary</h4>
      <div className={style.rootWrapper}>
        <div className={style.summaryCharts}>
          <h5>Languages</h5>
          <div className={style.contentWrapper}>
            <div className={style.itemContainer}>
              {wakatimeSummary.data.languages
                .filter((v) => v.name !== "Other")
                .map((v) => (
                  <div className={style.item}>
                    <div
                      className={style.bullet}
                      style={{
                        background: getLanguageColor(v.name),
                      }}
                    />
                    <span className={style.name}>{v.name}</span>
                  </div>
                ))}
            </div>
            <div ref={langChartRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
