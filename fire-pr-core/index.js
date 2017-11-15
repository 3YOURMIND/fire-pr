const PrType = require('./pr-type');
const PrBreaking = require('./pr-breaking');
const PrTestingProcedure = require('./pr-testing-procedure');
const PrOtherInformation = require('./pr-other-information');
const PrChangelog = require('./pr-changelog');
const PrTitle = require('./pr-title');

const prTypeConfiguration = [
  {
    checked: false,
    label: 'Bugfix',
    description: {
      enabled: false,
      prefix: null,
    },
  },
  {
    checked: false,
    label: 'Feature',
    description: {
      enabled: false,
      prefix: null,
    },
  },
  {
    checked: false,
    label: 'Code style update',
    description: {
      enabled: false,
      prefix: null,
    },
  },
  {
    checked: false,
    label: 'Refactor',
    description: {
      enabled: false,
      prefix: null,
    },
  },
  {
    checked: false,
    label: 'Build-related changes',
    description: {
      enabled: false,
      prefix: null,
    },
  },
  {
    checked: true,
    label: 'Other',
    description: {
      enabled: true,
      prefix: ', please describe',
    },
  },
];

const descriptions = {
  Other: 'This is lorem ipsum.',
};

PrType.initialize(prTypeConfiguration);
const prTyperMarkdown = PrType.renderMarkdown(descriptions);
console.log(prTyperMarkdown);

const breakingChange = {
  exists: false,
  description: 'waddawadw',
};

const prBreakingMarkdown = PrBreaking.renderMarkdown(breakingChange);
console.log(prBreakingMarkdown);

const testingProcedure = [
  ['First step', 'Second step'],
  ['First step', 'Second step', 'Third step'],
];

const prTestingProcedureMarkdown = PrTestingProcedure.renderMarkdown(
  testingProcedure,
);

console.log(prTestingProcedureMarkdown);

const otherInformation = ['First information', 'Second information'];

const otherInformationRepresentation = PrOtherInformation.renderMarkdown(
  otherInformation,
);

console.log(otherInformationRepresentation);

const changelogPayload = {
  note: {
    description: 'Lorem ipsum',
    issueNumber: 3059,
    baseUrl: 'https://testOrganization.atlassian.net',
    projectAbbreviation: 'B3',
  },
  pictures: [
    'http://via.placeholder.com/325x150',
    'http://via.placeholder.com/325x150',
  ],
};

const changelogRepresentation = PrChangelog.renderMarkdown(changelogPayload);

console.log(changelogRepresentation);

const titlePayload = {
  heading: 'Pull Request Title 101',
  issueNumber: 3059,
};

const titleRepresentation = PrTitle.renderMarkdown(titlePayload);

console.log(titleRepresentation);
