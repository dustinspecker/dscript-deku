# dscript-deku
[![NPM version](https://badge.fury.io/js/dscript-deku.svg)](https://badge.fury.io/js/dscript-deku) [![Build Status](https://travis-ci.org/dustinspecker/dscript-deku.svg)](https://travis-ci.org/dustinspecker/dscript-deku) [![Coverage Status](https://img.shields.io/coveralls/dustinspecker/dscript-deku.svg)](https://coveralls.io/r/dustinspecker/dscript-deku?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/dscript-deku/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/dscript-deku) [![Dependencies](https://david-dm.org/dustinspecker/dscript-deku.svg)](https://david-dm.org/dustinspecker/dscript-deku/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/dscript-deku/dev-status.svg)](https://david-dm.org/dustinspecker/dscript-deku/#info=devDependencies&view=table)

> [Dscript](https://github.com/dustinspecker/dscript) with [Deku](https://github.com/dekujs/deku) setup done for you

**Check out [dscript](https://github.com/dustinspecker/dscript) for documentation on more advanced usage.**

## Install
```
npm install --save dscript-deku
```

## Usage
```javascript
import {div, li, ul} from 'dscript-deku'

const handleClick = () => alert('hi')

export default ({props}) =>
  div('.list-container', {onClick: handleClick}, [
    ul(
      props.items.map(item =>
        li([item.name])
      )
    )
  ])
```


## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)
