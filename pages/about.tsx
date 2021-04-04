/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import Head from "next/head";

const SpaceBetweenSpan = styled.span`
  display: flex;
  justify-content: space-between;
`;
export default function About() {
  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
      `}
    >
      <Head>
        <title>About Me</title>
      </Head>
      <div
        css={css`
          width: 60%;
          height: 100%;
          padding: 20px 0;
        `}
      >
        <section>
          <h2>Experience</h2>
          <SpaceBetweenSpan>
            <h4>Citadel Securities, 2019 - Present</h4>
            <h4>New York, NY</h4>
          </SpaceBetweenSpan>
          <span>UI Engineer</span>
          <ul>
            <li>
              Developed the UI for a semi-systematic trading app used across
              Index Options trading desk
            </li>
            <li>
              Built the UI for a high-frequency trading app used by Futures
              Options desk. Reusable components enabled new strategies to be
              brought to market faster than competitors (React, TypeScript,
              Ag-grid)
            </li>
            <li>
              Migrated firm-wide risk management C# desktop application to React
            </li>
            <li>
              Migrated options pricing and click-trade C# desktop application to
              Electron
            </li>
            <li>
              Implemented a CI/CD pipeline to build and deploy Electron apps
              with versioning for different environments (TeamCity, Gitlab,
              NodeJS, Artifactory, Yarn)
            </li>
            <li>
              Built servers to lazy-load large datasets, aggregate, save and
              serve data from various sources (NodeJS, ExpressJS, node-cache,
              MySQL)
            </li>
          </ul>
          <SpaceBetweenSpan>
            <h4>BNY Mellon, 2017-2019</h4>
            <h4>Jersey City, NJ</h4>
          </SpaceBetweenSpan>

          <span>Senior Specialist Engineer</span>
          <ul>
            <li>
              Reduced app bootstrap and rendering times by 30% using
              Ahead-of-Time compiler (Angular)
            </li>
            <li>Sped up local development time by 80% (Webpack, Grunt)</li>
            <li>
              Improved platform performance using lazy loading, code splitting
              and tree shaking (Webpack)
            </li>
            <li>
              Implemented services to dynamically create components at runtime
              (Angular, TypeScript)
            </li>
          </ul>
        </section>
        <section>
          <h2>Education</h2>
          <SpaceBetweenSpan>
            <h4>Harvard University, 2015-2016 </h4>
            <h4>Cambridge, MA</h4>
          </SpaceBetweenSpan>
          <span>M.S in Computational Science &amp; Engineering</span>
          <span>
            Coursework at Harvard: Operating Systems, Systems Security, Data
            Science, Parallel Computing, Monte Carlo Methods, Data
            Visualization, User Interface Design
          </span>
          <SpaceBetweenSpan>
            <h4>Stony Brook University, 2012-2015</h4>

            <h4>Stony Brook, NY</h4>
          </SpaceBetweenSpan>
          <span>
            B.S. in Computer Science; GPA: 3.9/4.0 B.S. in Applied Mathematics
            and Statistics; GPA: 3.9/4.0
          </span>
          <span>
            Coursework: Multivariable, Calculus, Data Structures, Algorithms,
            Linear Algebra, Statistics, Differential Equations, Database
            Systems. Awards: Summa cum laude. Top 10 of 2015 class for both
            majors. Dean's List 2012-2015.
          </span>
        </section>
        <section>
          <h3>Skills</h3>
          <span>
            <b>Programming Languages:</b> TypeScript, JavaScript, HTML/CSS/Sass,
            Python, Java, C, SQL
          </span>
          <span>
            <b>Frameworks/Libraries:</b> React, NodeJS, react-testing-library,
            Ag-Grid, BlueprintJS, Redux, Electron, OpenFin, Emotion,
            TailwindCSS, RxJS, Angular, Grunt, jQuery
          </span>
          <span>
            <b>Development Tools:</b> Webpack, VSCode, ESLint, Prettier, Yarn,
            Chrome DevTools, Git, TeamCity, Jenkins, Splunk
          </span>
          <span>
            <b>Hobbies: </b>Badminton, Ping Pong, Swimming, Board Games, Improv
          </span>
        </section>
      </div>
    </div>
  );
}
