// removes the __extends method that is added automatically by typescript
module.exports = (source) => source.replace(/var\s__extends\s=\s\(this\s&&[\sa-z\._\(\)\|{}=:\[\]&,;?]+}\)\(\);/i, '');
