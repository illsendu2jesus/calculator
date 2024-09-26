let n1 = '';
let n2 = '';
let result = '';
let operation = '';
let scr = document.querySelector('.screen');


function operate(){
    let digits = document.querySelectorAll('button');
    digits.forEach((button)=>{button.addEventListener('click',(e)=>{

        let mode = e.target.className;
        let content = e.target.textContent;

       // console.log(text)

        if(mode=='digit'){
            

            if(operation==''){

                if(checkNumber(n1,content))
                {n1 += content;
                scr.textContent = '';
                scr.textContent += n1;}
            }
            else{

                if(checkNumber(n2,content))
                {n2 += content;
                scr.textContent += n2[n2.length-1];}
            }
        }

        else if(mode=='operation'){

            if(operation){
                calculate();
            }

            operation = content;
            scr.textContent += ' '+operation+' ';


        }

        else if(mode=='result'){
            calculate();
        }


        else if(mode=='del'){
            //scr.textContent = scr.textContent.slice(0,scr.textContent.length-1);

            let idx = scr.textContent.length;
        
            if(scr.textContent[idx-1]==' '){
                console.log(idx);
                scr.textContent = scr.textContent.slice(0,idx-3);
                operation = '';
                
            }

            else{
                if(operation){
                    n2 = n2.slice(0,n2.length-1);

                }

                else{
                    n1 = n1.slice(0,n1.length-1);
                }

                scr.textContent = scr.textContent.slice(0,idx-1);

            }
            
        }

        else if(mode=='clear'){

            clear();
        }

    })})
}

function calculate(){
    let n3 = parseFloat(n1);
    let n4 = parseFloat(n2);

    console.log(n3);

    if(isNaN(n3) || isNaN(n4)){
        result = 'ERROR:Missing argument,like your Dad'
    }


    else if(operation=='+'){
        result = n3 + n4;
    }
    else if(operation=='-'){
        result  = n3 - n4;
    }
    else if(operation=='*'){
        result = n3 * n4;
    }
    else if(operation=='/'){
        if(n4==0){
        result = 'ERROR:Divison by zero,take mass class';
        }
        else{
        result = n3/n4;}
    }

    else if(operation='mod'){
        result = n3 % n4;
    }



    displayResult()

}

function displayResult(){
    scr.textContent = result;
    operation = '';
    if(result[0] == 'E'){
        result = '';
    }
    n1 = result;
    n2 = ''
}

function checkNumber(n,char){

    // this ensures you can type one dot,and the negative symbol only at the start of the number

    if(char=='.' && n.includes(char)){

        return false;
    }

    if(char=='-' && n.length >= 1){
        return false;
    }

    return true;

}


function clear(){
    n1 = '';
    n2 = '';
    result = '';
    operation = '';
    scr.textContent = '';
}
operate()