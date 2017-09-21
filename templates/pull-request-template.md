## Pull Request Title

* fix({{issue.number}}) - {{Title}}
* feat({{issue.number}}) - {{Title}}
* refactor({{issue.number}}) - {{Title}}
* style({{issue.number}}) - {{Title}}
* impr({{issue.number}}) - {{Title}}


## Description

[Please provide a clear discription here]

## Checklist (all must be checked before merge)

* [✖] Do all **tests pass**?
* [✖] Is the PR made to the right branch? (default: `development`, major bugs: `stable-x.x.x`, hotfixes: `release`?
* [✖] Are all strings marked as translatable?
* [✖] If there are major text changes? Was it reviewd by someone?
* [✖] If change settings_local.py needed: Is settings_local_sample.py updated?
* [✖] If manual database updated needed after deployment: Does the JIRA issue has the label `PRODUTION-CHANGE-NEEDED`?
* [✖] If the Sample data updated needed: Is it done inside this PR?
* [✖] If any dependency changed: Is it non-GPL and the [Open Source List](https://docs.google.com/spreadsheets/d/1xMg8pceRafEJ6tdrPcR_YNrTpkPf_Sk4OdpThzmWO5Q/) is updated?
* [✖] Is the section "Testing Procedure" and "Screenshots / Gifs" filled out appropriately?

* [o] After merge: Is the right fix-version in the JIRA-issue?


## Does this PR introduce a breaking change? ##

* [✖] No
* [✔] Yes:


## Testing procedure ##

**Case 1**

1. Go to `/en/demo`
2. lorem ipsum

**Case 2**

1. Go to `/en/demo`
2. Lorem ipsum
3. Lorem ipsum


## Changelog ##

*

## Screenshots / Gifs

![fixed.png](http://via.placeholder.com/325x150)
