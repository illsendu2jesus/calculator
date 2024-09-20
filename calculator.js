
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

        console.log(mode);

        if(mode=='b-operation'){
            operation = content;
            total.textContent += operation;
        }
        else if(mode=='mod'){
            operation = mode;
            total.textContent += content;
            console.log('er');
        }

        else if(mode=='square'){
            operation = mode;
            let holder = "<sup>2</sup>"
            total.innerHTML = n1 + '' +holder;
        }

        else if(mode=='clear'){
            n1 = '';
            n2 = '';
            result = '';
            operation = '';
            total.textContent = '';
        }

        else if(mode=='root'){
            operation = mode;
            total.textContent += content;
        }
 
        else if(operation == ''){
            if(content=='='){

            }
            else 
            {
                n1 += content;
                total.textContent = ''
                total.textContent += n1;
            }
            
        }

        else if(mode=='result'){
            calculate()
        }
        else{

            n2 += content;
            total.textContent += n2[n2.length -1];
        }

       // console.log(mode);
       // console.log(operation);
        
    })})
    
    
}

function calculate(){
    let n3 = parseFloat(n1);
    let n4 = parseFloat(n2);

    if(n4 == NaN){
        n4 = 0;
    }
    //console.log(operation);

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
        if(n4==0){
            result = 'ERROR:division by zero'
        }
        else{
        result = n3/n4;}
    }
    else if(operation=='root'){
        result = Math.sqrt(n4);
    }
    else if(operation=='mod'){
        result = n3 % n4;
    }
    else if(operation=='square'){
        result = n3 ** 2;
    }
    dipslay();
}
function dipslay(){
    total.textContent = result;
    operation = ''
    n1 = result;
    n2  = '';
}

operate();