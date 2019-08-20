import { fetchData } from './fetchData';
import { exportAllDeclaration } from '@babel/types';

/*
回调函数式
test('fetchData return result is { success: true }', (done) => {
    fetchData((data)=> {
        expect(data).toEqual({
            success: true
        })
        done();
    })
})
*/

/*
test('fetchData return { success: true }', () => {
    return fetchData().then((response) => {
        expect(response.data).toEqual({
            success: true
        })
    })
})
*/

/* 

test('fetchData return 404', () => {

    expect.assertions(1);
    return fetchData().catch((e) => {
        expect(e.toString().indexOf('404') > -1).toBe(true)
    })
})


*/


/*
test('fetchData return 404', () => {
    expect.assertions(1); // 下面至少要执行一个expect的语法，确保了下面的执行
    return fetchData().catch((e) => {
        expect(e.toString().indexOf('404') > -1).toBe(true)
    })
})
*/
// 测试promise回调式的异步函数


/*
test('test fetchData return 404', () => {
    expect.assertions(1);
    return fetchData().catch((e) => {
        expect(e.toString().indexOf('404') > -1).toBe(true)
    })
})
*/

/*
test('test fetchData return { success: true }', () => {
    return expect(fetchData()).resolves.toMatchObject({
        data: {
            success: true
        }
    })
})
*/


/*
test('fetchData return 404', () => {
    return expect(fetchData()).rejects.toThrow();
})
*/

/*
test('fetchData return { success: true }', async () => {
    await expect(fetchData()).resolves.toMatchObject({
        data: {
            success: true
        }
    })
});
*/

/*
test('fetchData return 404', async () => {
    await expect(fetchData).rejects.toThrow();
})
*/