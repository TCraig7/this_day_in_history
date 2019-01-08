import { assert } from 'chai';
import {randomMonth, randomDay, checkLength} from '../lib/methods.js';

 describe('test', function() {
   it('should return true', function() {
     assert.equal(true, true);
   });

   it('randomMonth should return a string', function() {
     var expected = randomMonth()
     assert.typeOf(expected, 'string')
   })

   it('randomDay should return a string', function() {
     var expected = randomDay()
     assert.typeOf(expected, 'string')
   })

   it('checkLength should return a string of two characters when given one character', function() {
     var stringedNum = "7"
     var expected = checkLength(stringedNum)
     assert.typeOf(expected, 'string')
     assert.equal(expected, '07')
   })

   it('checkLength should return a string of two characters when given two characters', function() {
     var stringedNum = "12"
     var expected = checkLength(stringedNum)
     assert.typeOf(expected, 'string')
     assert.equal(expected, '12')
   })
 });
