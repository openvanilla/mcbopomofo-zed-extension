# McBopomofo Data Extension for Zed

This extension provides syntax highlighting for McBopomofo data files (`data.txt` and `excluded-phrases.txt`).

## Features

- Syntax highlighting for words and Bopomofo readings.
- Hyphen separator highlighting.
- Comment highlighting.
- Error highlighting for invalid lines.

## Installation

1. Clone or download this repository.
2. Open Zed.
3. Open the command palette (`Cmd+Shift+P`).
4. Run `zed: install dev extension`.
5. Select the root folder of this extension.

## Grammar Rules

- Words are colored as strings.
- Bopomofo readings are colored as types.
- Hyphens are colored as punctuation.
- Comments start with `#`.
- Invalid lines are marked as errors.
