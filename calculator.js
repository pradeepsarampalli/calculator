const expression = document.getElementById("display");
function appenddisplay(x){
    expression.value+=x;
}
function clearexp(){
    expression.value="";
}
function del(){
    expression.value=expression.value.slice(0,expression.value.length-1);
}
function calculate(){
    try{
    let exp =Number(eval(expression.value));
    if(isNaN(exp)){
        throw new error("error");
    }
    expression.value=exp;
    }
    catch(error){
        expression.value="Error";
    }
}