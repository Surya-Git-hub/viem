import { expect, test } from 'vitest'

import * as providers from './index'

test('exports providers', () => {
  expect(providers).toMatchInlineSnapshot(`
    {
      "alchemyHttpProvider": [Function],
      "alchemyWebSocketProvider": [Function],
      "httpProvider": [Function],
      "webSocketProvider": [Function],
      Symbol(Symbol.toStringTag): "Module",
    }
  `)
})
