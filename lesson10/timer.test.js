import timer from './timer';

beforeEach(() => {
    jest.useFakeTimers();
})

test('test timer', () => {
    const fn = jest.fn();
    timer(fn);
    jest.runAllTimers();
    expect(fn).toHaveBeenCalledTimes(2);
});

test('test Timer once', () => {
    const fn = jest.fn();
    timer(fn);
    jest.runOnlyPendingTimers();
    expect(fn).toHaveBeenCalledTimes(1);
});

test.only('teset timer advanceTimersByTime', () => {
    const fn = jest.fn();
    timer(fn);
    jest.advanceTimersByTime(3000);
    expect(fn).toHaveBeenCalledTimes(1);
    jest.advanceTimersByTime(4000);
    expect(fn).toHaveBeenCalledTimes(2);
})