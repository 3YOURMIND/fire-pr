<img src="./docs/readme-banner.png" />

<a href="https://chrome.google.com/webstore/detail/fire-pr-chrome-extension/mcpcdbmbifcjeeedncbcajkljmdjdgoh"><img src="https://img.shields.io/badge/download-chrome-3cba54.svg" /></a>
<a href="https://addons.mozilla.org/de/firefox/addon/fire-pr/"><img src="https://img.shields.io/badge/download-firefox-ff9400.svg" /></a>
<a href="./LICENSE"><img src="https://img.shields.io/github/license/3yourmind/fire-pr.svg" /></a>
<a href="https://github.com/3YOURMIND/fire-pr/pulls"><img src="https://img.shields.io/badge/PR-welcome-green.svg" /></a>
<a href="https://www.3yourmind.com/career"><img src="https://img.shields.io/badge/3YOURMIND-Hiring-brightgreen.svg" /></a>

[![fire pr web extension showcase](https://img.youtube.com/vi/gLnew-ywtJI/0.jpg)](https://www.youtube.com/watch?v=gLnew-ywtJI)

[![fire pr result showcase](https://img.youtube.com/vi/ZeHAVt2kAtM/0.jpg)](https://www.youtube.com/watch?v=ZeHAVt2kAtM)

## Background

At 3YOURMIND we struggled a long time with the Code Review process. This process
begins with creating the pull request in first place. To make this approachable
by all team members, including QA and new colleagues who are maybe inexperienced
with this process, we tried to interfacivize the common process to give team
members an idea on what the pull request was created.

We highly believe in this tool and nearly all of our Pull Requests are created
with this tool. It is saving the teams of 3YOURMIND a lot of time since
developers now create pull requests in a repeatable way.

## Install

If you want to use the application please use the production extensions. You can
find it in the
[Chrome Store](https://chrome.google.com/webstore/detail/fire-pr-chrome-extension/mcpcdbmbifcjeeedncbcajkljmdjdgoh)
or in the [Firefox store](https://addons.mozilla.org/de/firefox/addon/fire-pr/).

For the development version you need to use [npm](https://www.npmjs.com/) or
[yarn](https://yarnpkg.com/en/).

### via npm

```bash
npm install
```

### via yarn

```bash
yarn install
```

## Architecture

This architecture is created to create the best reusability of this code. This
project has one base module which is called `fire-pr-core` and will be the base
for the official `fire-pr-cli` and `fire-pr-web`. This will also be shown in the
following diagram:

<p align="center"><img src="./docs/fire-pr-architecture.svg" alt="fire-pr architecture"></p>

## License

[MIT](./LICENSE)

Copyright (c) 2017-present, 3YOURMIND GmbH
