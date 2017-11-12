const PrType = require('./pr-type');

const prTypeConfiguration = [{
  checked: false,
  label: 'Bugfix',
  description: {
    enabled: false,
    prefix: '',
  }
}, {
  checked: false,
  label: 'Feature',
  description: {
    enabled: false,
    prefix: '',
  }
}, {
  checked: false,
  label: 'Code style update',
  description: {
    enabled: false,
    prefix: '',
  }
}, {
  checked: false,
  label: 'Refactor',
  description: {
    enabled: false,
    prefix: '',
  }
}, {
  checked: false,
  label: 'Build-related changes',
  description: {
    enabled: false,
    prefix: '',
  }
}, {
  checked: true,
  label: 'Other',
  description: {
    enabled: true,
    prefix: ', please describe:'
  }
}];

PrType.initialize(prTypeConfiguration);
const prTyperMarkdown = PrType.renderMarkdown();
console.log(prTyperMarkdown);
