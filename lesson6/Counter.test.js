import Counter from './Counter';

let counter = null;

// 在测试用例之前执行beforeAll函数
beforeAll(() => {
    //counter = new Counter();
});

beforeEach(()=>{
    counter = new Counter();
})


afterEach(()=>{

})

afterAll(()=>{
    console.log('afterall');
});

describe('Test add related function', () => {
    test('test addOne ', ()=>{
        counter.addOne();
        expect(counter.number).toBe(1);
    })
})


describe('Test minus related function', () => {

    test('test minusOne ', ()=>{
        counter.minusOne();
        expect(counter.number).toBe(-1);
    })
})

