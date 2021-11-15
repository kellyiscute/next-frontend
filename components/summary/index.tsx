import { IWakatimeSummary } from "models/wakatime/summary";
import { NextComponentType } from "next";
import * as echarts from "echarts";
import style from "./summary.module.scss";
import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { getLanguageColor } from "utils";

interface ISummaryProps {
  wakatimeSummary: IWakatimeSummary;
}

const Summary: NextComponentType<never, never, ISummaryProps> = ({
  wakatimeSummary,
}) => {
  const langChartRef = createRef<HTMLDivElement>();
  const langChart = useRef<echarts.ECharts>();
  const [currentHover, setCurrentHover] = useState<string | null>(null);
  const handleChartHover = useCallback<(e: any) => void>(
    (e) => {
      setCurrentHover(e.data.name);
    },
    [setCurrentHover]
  );

  useEffect(() => {
    const chart = echarts.init(langChartRef.current!, "dark");
    langChart.current = chart;
    const series = [
      {
        type: "pie",
        data: wakatimeSummary.data.languages
          .filter((v) => v.name !== "Other")
          .map((v) => ({
            name: v.name,
            label: {
              show: false,
            },
            value: Math.floor(v.total_seconds),
            itemStyle: {
              color: getLanguageColor(v.name),
            },
          })),
      },
    ];
    chart.setOption({
      backgroundColor: "transparent",
      series,
    });
    langChart.current?.on("mouseover", handleChartHover);
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
                .map((v, i) => (
                  <div
                    className={`${style.item} ${
                      currentHover === v.name ? style.itemHover : ""
                    }`}
                    key={i}
                  >
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
            <div className={style.chart} ref={langChartRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
