function isEven(N){
    if(N === -1){
        return isEven(-N)
    }
    if(N<-1){
        return isEven(-N-2)
    }
    if(N === 0){
        return true
    }
    if(N === 1){
        return false
    }
    else{
        return isEven(N-2)
    }
}
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));