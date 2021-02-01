import sum from './sum'


describe(('sum'), () =>{
    test('sum up two values', () => {
        expect(sum(2, 4)).toBe(6)
    });
});