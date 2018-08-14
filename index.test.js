const index = require('./index')

test('1 + 2 equals 3', () => {
    expect(index.sum(1, 2)).toBe(3)
})
