module.exports = grammar({
  name: 'mcbopomofo_data',

  extras: $ => [],

  conflicts: $ => [
    [$.entry, $._line_content],
    [$.entry, $.invalid_line]
  ],

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

    readings: $ => seq(
      $.reading,
      repeat(seq('-', $.reading))
    ),

    invalid_line: $ => seq(
      $._line_content,
      $._newline
    ),

    _line_content: $ => repeat1(choice(
      $.word,
      $._separator,
      '-'
    )),

    word: $ => /[^\s#\-]+/, 
    reading: $ => /[^\s#\-]+/,

    _separator: $ => /[\t ]+/,
    _newline: $ => /\r?\n/
  }
});
