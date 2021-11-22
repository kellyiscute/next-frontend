import { NextComponentType } from "next";
import style from "./github-summary.module.scss";

const GithubSummary: NextComponentType = () => {
  return (
    <div className={style.root}>
      <h4>Github Summaries</h4>
      <div className={style.box}></div>
    </div>
  );
};

export default GithubSummary;
