jest.mock('./demo');

import { fetchData } from './demo'; // fetchData 是来自模拟文件里面的
const { getNumber } = jest.requireActual('./demo'); // getNumber 是来自于真正的demo文件里的


test('fetchData test', () => {
    return fetchData().then(data => {
        expect(eval(data)).toEqual('123');
    })
});

test('getNumber test', () => {
    expect(getNumber()).toEqual(123);
})
