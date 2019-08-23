jest.mock('./util' /*, () => {
    const Util = jest.fn(() => {
        console.log('constructor ---');
    });
    Util.prototype.a = jest.fn(() => {
        console.log('a ---');
    });
    Util.prototype.b = jest.fn(() => {
        console.log('b ---');
    });
    return Util; // __mocks__ 的另一种写法
}*/);
// const Utl = jest.fn();
// Util.a = jest.fn();
// Util.b = jest.fn();
// jest.mock发现util是一个类 ，会自动的把util里面的函数，自动的替换成jest.fn()
import demoFunction from './demo';
// import util from './util';
import Util from './util';

// 集成测试


test('Test demoFunction', () => {
    demoFunction();
    expect(Util).toHaveBeenCalled();
    expect(Util.mock.instances[0].a).toHaveBeenCalled();
    expect(Util.mock.instances[0].b).toHaveBeenCalled();
})