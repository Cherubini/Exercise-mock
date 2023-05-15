function xo(str){
    let arrStro= str.split('');
    let arrStrx= str.split('');
    let o = 0;
    let x = 0;
     o = arrStro.reduce((prev, curr)=>{
        if(curr==='o'||curr==='O')
            return ++prev;
        else
            return prev}, 0)
     x = arrStro.reduce((prev, curr)=> {
        if(curr==='x' || curr==='X')
            return ++prev;
        else
            return prev}, 0)
    console.log(o);
    console.log(x);
    return o===x
    }

console.log(xo('xo'));
console.log(xo('xxOo'));
console.log(xo('xxxm'));
console.log(xo('Oo'));
