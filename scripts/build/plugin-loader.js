module.exports = source => source.replace(/var\s__extends\s=\s\(this\s&&[\sa-z\._\(\)\|{}=:\[\]&,;?]+}\)\(\);/i, '');
