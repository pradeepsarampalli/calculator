const expression = document.getElementById("output");
function appenddisplay(x){
    if(expression.value==="Error"){
        expression.value = ""
    }
    expression.value+=x;
}
function clearexp(){
    expression.value="";
}
function del(){
    if(expression.value === "Error")
        expression.value = ""
    else
    expression.value=expression.value.slice(0,expression.value.length-1);
}
function calculate(){
    try{
    let exp = eval(expression.value);
    if(isNaN(exp)){
        throw new Error("error");
    }
    expression.value=exp;
    }
    catch(error){
        expression.value="Error";
    }
}
document.addEventListener("keydown", (event) => {
    const validKeys = "0123456789+-*/().%";
    if (validKeys.includes(event.key)) {
        appenddisplay(event.key);
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        del();
    } else if (event.key === "Escape") {
        clearexp();
    }
});
