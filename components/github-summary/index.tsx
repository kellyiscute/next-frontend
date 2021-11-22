import { NextComponentType } from "next";
import style from "./github-summary.module.scss";
import { GithubSummaryData } from "./data";
import { getReadableNumber } from "utils";

const GithubSummary: NextComponentType = () => {
  return (
    <div className={style.root}>
      <h4>Github Summaries</h4>
      <div className={style.box}>
        <div className={style.contentWrapper}>
          <div className={style.content}>
            <h3>
              <span>
                <img src="/images/repo.svg" alt="" />
              </span>
              Repositories
            </h3>
            <p>48</p>
          </div>
          <div className={style.content}>
            <h3>Changes Made</h3>
            <p>{getReadableNumber(GithubSummaryData.additions)}</p>
            <p>{getReadableNumber(GithubSummaryData.deletions)}</p>
          </div>
        </div>
        <div className={style.contentWrapper}>
          <div className={style.content}>
            <h3>Commits</h3>
            <p>{getReadableNumber(GithubSummaryData.commits)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubSummary;
