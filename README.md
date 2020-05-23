<div
  align="center"
>

# git-time

**@inkohx/git-time is a JavaScript module that converts a file's created date, modified date, etc. to a Date object using the "git log" command.**

![LICENCE](https://img.shields.io/github/license/InkoHX/git-time?label=LICENCE&style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/InkoHX/git-time)

</div>

## Requirements

- [git](https://git-scm.com/downloads)

## Usage

### CommonJS

```js
const gitTime = require('@inkohx/git-time').default

gitTime('A', './file.name')
  .then(value => console.log('Added Date', value))
  .catch(console.error)
```

### Import/Export

```js
import gitTime from '@inkohx/git-time'

gitTime('M', './file.name')
  .then(value => console.log('Modified Date', value))
  .catch(console.error)
```
