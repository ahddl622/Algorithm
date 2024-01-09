function solution(n) {
    let result = 0
    let str = n.toString()
    
    for (let i = 0; i < str.length; i++) {
        result += parseInt(str[i])
    }
    return result
} 