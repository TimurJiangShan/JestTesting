
// node 不识别 import的这种语法，需要babel转化
import { add, minus } from "./math";


test('test add function 3 + 7', () => {
    expect(add(3,7)).toBe(10);
})

test('test minus 3 - 3', () => {
    expect(minus(3,3)).toBe(0);
})


// Unit test, integration test
// Module test, multi-module test