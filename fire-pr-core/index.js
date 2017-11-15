const PrType = require('./pr-type');
const PrBreaking = require('./pr-breaking');
const PrTestingProcedure = require('./pr-testing-procedure');
const PrOtherInformation = require('./pr-other-information');

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
