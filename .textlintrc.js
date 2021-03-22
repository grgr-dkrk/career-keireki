module.exports = {
  rules: {
    "preset-ja-technical-writing": true,
    "preset-jtf-style": {
      "1.1.3.箇条書き": true,
      "2.1.6.カタカナの長音": false,
      "2.2.1.ひらがなと漢字の使い分け": true,
      "3.1.1.全角文字と半角文字の間": false,
    },
    "ja-technical-writing/max-ten": { max: 2 },
    "ja-technical-writing/ja-no-weak-phrase": false,
    "ja-technical-writing/ja-no-mixed-period": false,
    "ja-technical-writing/max-comma": false,
    "ja-space-between-half-and-full-width": {
      space: "always",
      exceptPunctuation: true,
    },
    "ja-space-around-code": {
      before: true,
      after: true,
    },
    "ja-no-space-around-parentheses": true,
    "textlint-rule-ja-hiragana-hojodoushi": true,
    "textlint-rule-ja-hiragana-fukushi": true,
  },
  filters: {
    comments: true,
  },
}