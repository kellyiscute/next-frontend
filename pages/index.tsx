import { getWakaTimeSummary } from "api/wakatime";
import Head from "next/head";
import type { GetStaticProps, NextPage } from "next";
import Header from "../components/header";
import classNames from "../styles/Home.module.scss";
import { IWakatimeSummary } from "models/wakatime/summary";
import WakaTimeSummary from "components/wakatime-summary";
import { Octokit } from "octokit";

export const getStaticProps: GetStaticProps = async () => {
  const wakatimeSummary = await getWakaTimeSummary();
  const octokit = new Octokit({ auth: process.env.GITHUB_PAT });
  const repos = await octokit.request("GET /users/{username}/repos", {
    username: "guo40020",
    per_page: 100,
  });
  let commits = 0;
  const totalChanges = {};
  for (const repo of repos.data) {
    const repoData = await octokit.request(
      "GET /repos/{owner}/{repo}/stats/contributors",
      { owner: "guo40020", repo: repo.name }
    );
    // commits += repoData.data.
  }
  return {
    props: { wakatimeSummary },
    revalidate: 100,
  };
};

interface IHomepageProps {
  wakatimeSummary: IWakatimeSummary;
}

const Home: NextPage<IHomepageProps> = ({ wakatimeSummary }) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.14.0/devicon.min.css"
        />
      </Head>
      <div className={classNames.root}>
        <Header />
        <WakaTimeSummary wakatimeSummary={wakatimeSummary} />
      </div>
    </div>
  );
};

export default Home;
