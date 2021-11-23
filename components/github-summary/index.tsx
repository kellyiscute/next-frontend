import { NextComponentType } from "next";
import style from "./github-summary.module.scss";
import { GithubSummaryData } from "./data";
import { getReadableNumber } from "utils";
import { VscRepo } from "react-icons/vsc";
import { AiFillQuestionCircle } from "react-icons/ai";
import { GoDiff } from "react-icons/go";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { HiOutlinePlusSm } from "react-icons/hi";

const GithubSummary: NextComponentType = () => {
  return (
    <div className={style.root}>
      <div className={style.flexCenterAll}>
        <h4>Github Summaries</h4>
        <AiFillQuestionCircle />
      </div>
      <div className={style.box}>
        <div className={style.contentWrapper}>
          <div className={style.content}>
            <div className={style.flexCenterAll}>
              <VscRepo color="white" />
              <h3>Repositories</h3>
            </div>
            <p>48</p>
          </div>
          <div className={style.content}>
            <div className={style.flexCenterAll}>
              <GoDiff />
              <h3>Changes Made</h3>
            </div>
            <p>{getReadableNumber(GithubSummaryData.additions)}</p>
            <p>{getReadableNumber(GithubSummaryData.deletions)}</p>
          </div>
        </div>
        <div className={style.contentWrapper}>
          <div className={style.content}>
            <div className={style.flexCenterAll}>
              <RiGitRepositoryCommitsLine />
              <h3>Commits</h3>
            </div>
            <p>{getReadableNumber(GithubSummaryData.commits)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubSummary;
