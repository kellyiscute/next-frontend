import { getWakaTimeSummary } from "api/wakatime";
import Head from "next/head";
import type { GetStaticProps, NextPage } from "next";
import Header from "../components/header";
import classNames from "../styles/Home.module.scss";
import { IWakatimeSummary } from "models/wakatime/summary";
import WakaTimeSummary from "components/wakatime-summary";
import { useEffect } from "react";
import Script from "next/script";
// import { Octokit } from "octokit";

export const getStaticProps: GetStaticProps = async () => {
  const wakatimeSummary = await getWakaTimeSummary();
  // const octokit = new Octokit({ auth: process.env.GITHUB_PAT });
  // const repos = await octokit.request("GET /users/{username}/repos", {
  //   username: "guo40020",
  //   per_page: 100,
  // });
  // let commits = 0;
  // const totalChanges = {};
  // for (const repo of repos.data) {
  //   const repoData = await octokit.request(
  //     "GET /repos/{owner}/{repo}/stats/contributors",
  //     { owner: "guo40020", repo: repo.name }
  //   );
  //   // commits += repoData.data.
  // }
  return {
    props: { wakatimeSummary },
    revalidate: 100,
  };
};

interface IHomepageProps {
  wakatimeSummary: IWakatimeSummary;
}

const Home: NextPage<IHomepageProps> = ({ wakatimeSummary }) => {
  useEffect(() => {}, []);
  return (
    <div>
      <Script id="hj">
        {`(function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:2704139,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
      </Script>
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
