import { runCallback, createObject, getData } from './demo';
import Axios from 'axios';
jest.mock('axios');
test.only('测试 runCallback', () => {
    const func = jest.fn();
    

    //func.mockReturnValueOnce('Dell');
    func.mockImplementation(()=>{
        return this;
    })
    // JEST的fn函数，会有一个mock属性
    // mock 1. 捕捉函数的调用和返回结果，以及this和调用顺序
    // 2. 它可以让我们自由的设置返回结果
    runCallback(func);
    
    expect(func).toBeCalled();
    expect(func.mock.calls.length).toBe(1);
    expect(func.mock.results[0].value).toBeUndefined();
    expect(func).toBeCalledWith('abc'); // 每一次调用都是abc
    console.log(func.mock);
});

test('test createObject', () => {
    const func = jest.fn();
    createObject(func);
    console.log(func.mock);
})


// 把异步获取数据变成同步准备数据了
test('test getData', async () => {
    // 3. 改变函数的内部实现
    Axios.get.mockResolvedValueOnce({data: 'hello'});
    Axios.get.mockResolvedValueOnce({data: 'world'})
    await getData().then((data)=>{
        expect(data).toBe('hello');
    })
    await getData().then((data) => {
        expect(data).toBe('world');
    })
})
