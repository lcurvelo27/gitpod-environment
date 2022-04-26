import { romanNumeralsTranslator } from './index.mjs'
import { expect } from 'chai'

describe('PS Coding Exercise', function () {
  describe('#romanNumeralsTranslator', function () {
    it('should return 1', function () {
      const result = romanNumeralsTranslator()

      expect(result).to.eq(1)
    })
  })
})
