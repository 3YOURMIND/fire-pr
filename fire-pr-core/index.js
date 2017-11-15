const PrType = require('./pr-type');
const PrBreaking = require('./pr-breaking');

const prTypeConfiguration = [{
  checked: false,
  label: 'Bugfix',
  description: {
    enabled: false,
    prefix: null,
  }
}, {
  checked: false,
  label: 'Feature',
  description: {
    enabled: false,
    prefix: null,
  }
}, {
  checked: false,
  label: 'Code style update',
  description: {
    enabled: false,
    prefix: null,
  }
}, {
  checked: false,
  label: 'Refactor',
  description: {
    enabled: false,
    prefix: null,
  }
}, {
  checked: false,
  label: 'Build-related changes',
  description: {
    enabled: false,
    prefix: null,
  }
}, {
  checked: true,
  label: 'Other',
  description: {
    enabled: true,
    prefix: ', please describe'
  }
}];

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
