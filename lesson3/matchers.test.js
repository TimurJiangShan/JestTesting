// node 不识别 import的这种语法，需要babel转化
/*
test('test 10 match 10', () => {
    // toBe 匹配器 matchers
    // object.is ===
    expect(10).toBe(10);
})
*/

test('测试对象内容相等', () => {
    // toEqual 匹配器 matchers
    const a = { one: 1 }
    expect(a).toEqual({ one: 1});
})

/* 
test('toBeNull', () => {
    // toEqual 匹配器 matchers
    const a = { one: 1 }
    expect(a).toBeNull();
})
*/


/* 
test('toBeUndefined', () => {
    // toEqual 匹配器 matchers
    const a = { one: 1 }
    expect(a).toBeUndefined();
})
*/

/* 
test('toBeDefined', () => {
    // toEqual 匹配器 matchers
    const a = { one: 1 }
    expect(a).toBeDefined();
})
*/
test('toBeTruthy', () => {
    // toEqual 匹配器 matchers
    const a = 1
    expect(a).toBeTruthy();
})

test('toBeFalsy', () => {
    // toEqual 匹配器 matchers
    const a = 0
    expect(a).toBeFalsy();
})

test('not matchers', () => {
    // toEqual 匹配器 matchers
    const a = 0
    expect(a).not.toBeTruthy();
})


// 数字相关的匹配器
test('toBeGreaterThan', () => {
    const count = 10;
    expect(count).toBeGreaterThan(9);
})


test('toBeLessThan', () => {
    const count = 10;
    expect(count).toBeLessThan(11);
})


test('toBeLessThanOrEqual', () => {
    const count = 10;
    expect(count).toBeLessThanOrEqual(10);
})

test('toBeCloseTo', () => {
    const firstNumber = 0.1;
    const secondNumber = 0.2;
    // 因为JS计算浮点数，后面会带一串的小数字，所以不用toBeEqual
    expect(firstNumber + secondNumber).toBeCloseTo(0.3);
})


// String
test('toMatch', () => {
    const str = 'http:www.jiangshan.com';
    expect(str).toMatch(/jiangshan/);
})


// Array, Set
test('toContain', () => {
    const arr = ['jiang', 'shan', 1];
    expect(arr).toContain('shan')
})

test('toContain', () => {
    const arr = ['jiang', 'shan', 1];
    const data = new Set(arr);
    expect(data).toContain(1);
})

// Exception

const throwNewErrorFunc = () => {
    throw new Error('This is a new error');
}
test('toThrow', () => {
    expect(throwNewErrorFunc).toThrow('This is a new error');
})

// Unit test, integration test
// Module test, multi-module test