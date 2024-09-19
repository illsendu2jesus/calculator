
let n1 = '';
let n2 = '';
let result;
let operation = '';
let total = document.querySelector('.screen');


function operate(){
    let digits = document.querySelectorAll('button');
    digits.forEach((button)=>{button.addEventListener('click',(e)=>{
        //onsole.log(e.target.textContent)

        let mode = e.target.className;
        let content = e.target.textContent;
        //console.log(mode);
        if(mode=='b-operation'){
            operation = content;
            total.textContent = operation;
        }
 
        else if(operation == ''){
            if(content=='='){

            }
            else 
            {
                n1 += content;
                total.textContent = n1;
            }
            
        }

        else if(mode=='result'){
            calculate()
        }
        else{

            n2 += content;
            total.textContent = n2;
        }

        //console.log(n1);
        //console.log(n2);
        
    })})
    
    
}

function calculate(){
    let n3 = parseFloat(n1);
    let n4 = parseFloat(n2);

    if(n4 == NaN){
        n4 = 0;
    }

    if(operation=='+'){
        result = n3 +n4;
    }
    else if(operation=='-'){
        result  = n3 -n4;
    }
    else if(operation=='*'){
        result = n3*n4;
    }
    else if(operation=='/'){
        result = n3/n4;
    }
    result.toPrecision(5);
    dipslay();
}
function dipslay(){
    total.textContent = result;
    operation = ''
    n1 = result;
    n2  = '';
}

operate();