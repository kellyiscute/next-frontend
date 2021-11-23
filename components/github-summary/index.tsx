import { NextComponentType } from "next";
import style from "./github-summary.module.scss";
import { GithubSummaryData } from "./data";
import { getReadableNumber } from "utils";
import { VscRepo } from "react-icons/vsc";
import { AiFillQuestionCircle } from "react-icons/ai";
import { GoDiff } from "react-icons/go";
import { RiGitRepositoryCommitsLine } from "react-icons/ri";
import { HiOutlinePlusSm, HiMinusSm } from "react-icons/hi";
import { BiGitCommit, BiCodeAlt } from "react-icons/bi";

const GithubSummary: NextComponentType = () => {
  return (
    <div className={style.root}>
      <div className={style.title}>
        <h4>Github Summaries</h4>
        <div className={style.popover}>
          <div className={style.trigger}>
            <AiFillQuestionCircle />
            <div className={style.popoverInner}>
              <p>wondering where are these data from?</p>
              <p>
                checkout{" "}
                <a href="https://github.com/guo40020/github-summary">
                  this repo
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={style.box}>
        <div className={style.contentWrapper}>
          <div className={style.content}>
            <div className={style.flexCenterAll}>
              <VscRepo color="white" />
              <h3>Repositories</h3>
            </div>
            <div className={style.indent}>
              <div className={style.row}>
                <BiCodeAlt />
                <p>48</p>
              </div>
            </div>
          </div>
          <div className={style.content}>
            <div className={style.flexCenterAll}>
              <GoDiff />
              <h3>Changes Made</h3>
            </div>
            <div className={style.indent}>
              <div className={style.row}>
                <HiOutlinePlusSm stroke={"#50fa7b"} />
                <p>{getReadableNumber(GithubSummaryData.additions)}</p>
              </div>
              <div className={style.row}>
                <HiMinusSm fill={"#ff5555"} stroke={"#ff5555"} />
                <p>{getReadableNumber(GithubSummaryData.deletions)}</p>
              </div>
            </div>
          </div>
        </div>
        <div className={style.contentWrapper}>
          <div className={style.content}>
            <div className={style.flexCenterAll}>
              <RiGitRepositoryCommitsLine />
              <h3>Commits</h3>
            </div>
            <div className={style.indent}>
              <div className={style.row}>
                <BiGitCommit />
                <p>{getReadableNumber(GithubSummaryData.commits)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubSummary;
