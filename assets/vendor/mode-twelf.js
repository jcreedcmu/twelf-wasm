define("ace/mode/twelf_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(require, exports, module) {

"use strict";

const oop = require("../lib/oop");
const TextHighlightRules = require("./text_highlight_rules").TextHighlightRules;

const TwelfHighlightRules = function() {
    // regexp must not have capturing parentheses. Use (?:) instead.
    // regexps are ordered -> the first match is used

    this.$rules = {
      start: [
        { include: '#comments' },
        { token: 'keyword.pragma.twelf',
          regex: '%[a-z]+',
        }
      ],
      '#comments': [
        { token: 'punctuation.start.comment.twelf',
          regex: '%+ .*',
          push_:
          [ { token: 'comment.line.percent.twelf',
              regex: '$',
              next: 'pop' },
            { defaultToken: 'comment.line.percent.twelf' } ] },
      ],
 };

  this.normalizeRules();
};

TwelfHighlightRules.metaData = {
  fileTypes: [ 'elf' ],
  keyEquivalent: '^~H',
  name: 'Twelf',
  scopeName: 'source.twelf'
};

oop.inherits(TwelfHighlightRules, TextHighlightRules);

exports.TwelfHighlightRules = TwelfHighlightRules;

});

define("ace/mode/twelf", ["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/twelf_highlight_rules"], function(require, exports, module){

  "use strict";
  var oop = require("../lib/oop");
  var TextMode = require("./text").Mode;
  var TwelfHighlightRules = require("./twelf_highlight_rules").TwelfHighlightRules;
  var Mode = function () {
    this.HighlightRules = TwelfHighlightRules;
    this.$behaviour = this.$defaultBehaviour;
  };
  oop.inherits(Mode, TextMode);
  (function () {
    this.lineCommentStart = "--";
    this.blockComment = null;
    this.$id = "ace/mode/twelf";
    this.snippetFileId = "ace/snippets/twelf";
  }).call(Mode.prototype);
  exports.Mode = Mode;

});                (function() {
  window.require(["ace/mode/twelf"], function(m) {
    if (typeof module == "object" && typeof exports == "object" && module) {
      module.exports = m;
    }
  });
})();
