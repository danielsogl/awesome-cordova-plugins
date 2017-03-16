module.exports = {
  name: 'dashify',
  process: function(str) {
    str || (str = '');
    return str.replace(/\s/g, '-');
  }
};
