const assert = require('assert');
const Rooster = require('../index');
describe('Rooster', () => {
    describe('.announceDawn', () => {
        it('returns a rooster call', () => {
            //Setup
            const expected = 'cock-a-doodle-doo!';

            //Exercise
            const actual = Rooster.announceDawn();

            //Verify
            assert.equal(actual, expected);
        });
    });
    describe('.timeAtDawn', () => {
        it('returns its argument as a string', () => {

            //setup
            const inputNumber = 12;
            const expected = '12';

            //Exercise
            const actual = Rooster.timeAtDawn(inputNumber)

            //verify
            assert.equal(actual, expected)
        });
        it('throws an error if passed a number less than 0', () => {

            //setup
            const inputNumber = -1;
            const expected = RangeError;

            //verify
            assert.throws(() => {
                Rooster.timeAtDawn(inputNumber)
            }, expected);
        });

        it('throws an error if passed a number more than 23', () => {

            //setup
            const inputNumber = 24;
            const expected = RangeError;

            //verify
            assert.throws(() => {
                Rooster.timeAtDawn(inputNumber)
            }, expected);
        });
    });
});