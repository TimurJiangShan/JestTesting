function add(a,b) {
    return a + b;
}

function minus(a,b) {
    return a - b;
}

// 测试环境 会运行下面的node代码
try {
    module.exports = {
        add,
        minus
    }    
} catch(e) {}
