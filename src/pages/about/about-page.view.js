import React from 'react';

import './about-page.scss';

export const AboutPageView = () => (
  <div className="about-page">
    <h1>Scoreboard-IO</h1>
    <dl>
      <dt>App Version:</dt>
      <dd>v0.3.1</dd>

      <dt>Git Repo:</dt>
      <dd>
        <a href="http://github.com/SpyMaster356/scoreboard.io-react">
          github.com/SpyMaster356/scoreboard.io-react
        </a>
      </dd>

      <dt>Developer:</dt>
      <dd>
        Stephen A. Wilson (SpyMaster356)
      </dd>
    </dl>
  </div>
);
