function nod(num1, num2) {
    let arr = []
    let arr1 = []
    let dels = []
    for (let i = 1; i <= num1; i++) {
        if (num1 % i == 0) arr.push(i)
        else continue
    }
    for (let i = 1; i <= num2; i++) {
        if (num2 % i == 0) arr1.push(i)
        else continue
    }
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] == arr[i]) dels.push(arr1[j])
        }
    }
    let maxDel = dels[dels.length - 1];
    return maxDel
}


function nok(num1, num2) {
    let num = 1;
    let flag = true
    while (flag) {
        if (num % num1 == 0 && num % num2 == 0) {
            flag = false
            break
        } else {
            num++
        }
    }
    return num
}

function result() {
    let input1 = document.getElementById('input-1')
    let input2 = document.getElementById('input-2')
    let result = document.getElementById('result')
    let fNum = input1.value;
    let sNum = input2.value;
    result.innerText = `НОК РАВНО ${nok(fNum, sNum)}, НОД РАВНО ${nod(fNum, sNum)}`
    result.style.display = 'block'
}