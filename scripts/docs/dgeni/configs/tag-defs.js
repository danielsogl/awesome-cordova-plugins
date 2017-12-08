module.exports = function(parseTagsProcessor) {
  parseTagsProcessor.tagDefinitions = parseTagsProcessor.tagDefinitions
    .concat(require('../tag-defs/tag-defs'));
};
