# Pull request template

## Questions before unlocking form

* [✖] Do all **tests pass**?
* [✖] Are all strings marked as translatable?
* [✖] Are there any major text changes? --> Include someone who is revising the texts.
* [✖] Change settings_local_sample.py needed?
* [✖] Database updated needed?
* [✖] Sample data updated needed?
* [✖] Any dependency change?

# {{Pull Request Title}} [{{project.abbreviation}}-{{issue.number}}](https://{{organization}}.atlassian.net/browse/{{project.abbreviation}}-{{issue.number}}) #

Fix Version: {{Fix Version}} (Branch: {{Branch}})

---

## What kind of change does this PR introduce? ##

* [✔] Bugfix
* [✖] Feature
* [✖] Code style update
* [✖] Refactor
* [✖] Build-related changes
* [✖] Other, please describe:

Lorem ipsum test.

---

## Does this PR introduce a breaking change? ##

* [✖] No
* [✔] Yes:

---

## Testing procedure ##

**Case 1**

1. Go to `/en/demo`
2. lorem ipsum

**Case 2**

1. Go to `/en/demo`
2. Lorem ipsum
3. Lorem ipsum

---

## Review and Merge ##

**Who**

 * [] Last approver merges
 * [] PR creator merges

**When**

 * [] Merge after > 51% of the reviewers approved (tony suggests default)
 * [] Merge after 100%  of the reviewers approved
 * [] Merge after 1 reviewer approves

---

## Other information ##

- lorem ipsum

---

## Changelog ##

### Note

- {{fix.description}}, closes [#{{issue.number}}](https://{{organization}}.atlassian.net/browse/{{project.abbreviation}}-{{issue.number}})

### Pictures

- ![fixed.png](http://via.placeholder.com/325x150)
