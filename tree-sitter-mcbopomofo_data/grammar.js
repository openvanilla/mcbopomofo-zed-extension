module.exports = grammar({
  name: 'mcbopomofo_data',

  extras: $ => [],

  rules: {
    source_file: $ => repeat($._line),

    _line: $ => choice(
      $.comment,
      $.entry,
      $.invalid_line,
      $._newline
    ),

    comment: $ => seq('#', /[^\n\r]*/, $._newline),

    entry: $ => seq(
      $.word,
      $._separator,
      $.readings,
      $._newline
    ),

    word: $ => /[^\s#]+/,

    _separator: $ => /[\t ]+/,

    readings: $ => seq(
      $.reading,
      repeat(seq('-', $.reading))
    ),

    reading: $ => /[^\s#\-]+/,

    invalid_line: $ => seq(token(prec(-1, /[^\n\r]+/)), $._newline),

    _newline: $ => /\r?\n/
  }
});
