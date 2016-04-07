'use strict'
import test from 'ava'

import {div} from '../lib/'

test('verify it works with Deku\'s element', t => {
  const dekuDiv = div('.yo#hi', {title: 'hello'}, ['world'])

  t.is(dekuDiv.type, 'div')
  t.deepEqual(dekuDiv.attributes, {title: 'hello', class: 'yo', id: 'hi'})
  t.deepEqual(dekuDiv.children[0], {type: '#text', nodeValue: 'world'})
})
