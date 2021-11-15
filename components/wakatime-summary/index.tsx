import { IWakatimeSummary } from "models/wakatime/summary";
import { NextComponentType } from "next";
import * as echarts from "echarts";
import style from "./wakatime-summary.module.scss";
import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { getLanguageColor } from "utils";

interface IWakaTimeSummaryProps {
  wakatimeSummary: IWakatimeSummary;
}

const WakaTimeSummary: NextComponentType<never, never, IWakaTimeSummaryProps> =
  ({ wakatimeSummary }) => {
    const langChartRef = createRef<HTMLDivElement>();
    const langChart = useRef<echarts.ECharts>();
    const [currentHover, setCurrentHover] = useState<string | null>(null);

    const handleChartHover = useCallback<(e: any) => void>(
      (e) => {
        if (e.type === "mouseout") {
          setCurrentHover(null);
        } else {
          setCurrentHover(e.data.name);
        }
      },
      [setCurrentHover]
    );

    useEffect(() => {
      const chart = echarts.init(langChartRef.current!, "dark");
      langChart.current = chart;
      const data = wakatimeSummary.data.languages
        .filter((v) => v.name !== "Other")
        .map((v) => ({
          name: v.name,
          label: {
            show: v.percent > 7,
            position: v.percent > 7 ? "inside" : undefined,
          },
          value: Math.floor(v.total_seconds),
          itemStyle: {
            color: getLanguageColor(v.name),
          },
        }));
      chart.setOption({
        backgroundColor: "transparent",
        series: [
          {
            type: "pie",
            left: -20,
            top: -20,
            bottom: -20,
            right: -20,
            data,
          },
        ],
      });
      langChart.current?.on("mouseover", handleChartHover);
      langChart.current?.on("mouseout", handleChartHover);
      window.onresize = () => {
        langChart.current?.resize();
      };
    }, []);

    function constructClassnames(name: string): string {
      const classes = [style.item];
      if (currentHover === name) {
        classes.push(style.itemHover);
      }
      if (currentHover !== null && currentHover !== name) {
        classes.push(style.itemDimmed);
      }
      return classes.join(" ");
    }

    return (
      <div className={style.root}>
        <h4>WakaTime 7-days-summary</h4>
        <div className={style.rootWrapper}>
          <div className={style.summaryCharts}>
            <h5>Language Usage (By time)</h5>
            <div className={style.contentWrapper}>
              <div className={style.itemContainer}>
                {wakatimeSummary.data.languages
                  .filter((v) => v.name !== "Other")
                  .map((v, i) => (
                    <div className={constructClassnames(v.name)} key={i}>
                      <div
                        className={style.bullet}
                        style={{
                          background: getLanguageColor(v.name),
                        }}
                      />
                      <div className={style.name}>{v.name}</div>
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

export default WakaTimeSummary;
