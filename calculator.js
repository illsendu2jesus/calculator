
let n1 = '';
let n2 = '';
let rst = '';
let operation = '';
let total = document.querySelector('.screen');


function operate(){
    let digits = document.querySelectorAll('button');
    digits.forEach((button)=>{button.addEventListener('click',(e)=>{
        //onsole.log(e.target.textContent)

        let mode = e.target.className;
        let content = e.target.textContent;


        if(mode=='b-operation'){
            if(operation){
                calculate();

            }
            operation = content;
            total.textContent += operation;
        }
        else if(mode=='mod'){
            operation = mode;
            total.textContent += content;
        }


        else if(mode=='clear'){
            n1 = '';
            n2 = '';
            rst = '';
            operation = '';
            total.textContent = '';
        }

 
        else if(operation == ''){
            if(content=='='){

            }
            else 
            {
                if(content=="." || content=='-'){
                    // this checks to verify if there is a dot,a neg symbol and wether the - is first so that we dont add it in the middle of the number 
                    if(n1.includes('.') || n1.includes('-') || (n1.length >= 1 && n1[0] == '-')){
    
                    }
                    else{ n1 += content;
                        total.textContent = ''
                        total.textContent += n1;}

                }
                else{ n1 += content;
                    total.textContent = ''
                    total.textContent += n1;}
          
            }
            
        }

        else if(mode=='result'){
            calculate()
        }
        else{
            if(content=="." || content=='-'){
                // this checks to verify if there is a dot,a neg symbol and wether the - is first so that we dont add it in the middle of the number 
                if(n2.includes('.') || n2.includes('-') || (n2.length >= 1 && n2[0] == "-")){

                }
                else{ n2 += content;
                    total.textContent += n2[n2.length-1]}

            }
            else{ n2 += content;
                total.textContent += n2[n2.length-1]
            }
        

            

        }

       // console.log(mode);
       // console.log(operation);
        
    })})


}

function calculate(){
    let n3 = parseFloat(n1);
    let n4 = parseFloat(n2);

    if(isNaN(n4)){
        rst = 'ERROR:missing argument';
    }
   
    //console.log(operation);

    else if(operation=='+'){
        rst= n3 +n4;
    }
    else if(operation=='-'){
        rst = n3 -n4;
    }
    else if(operation=='*'){
        rst= n3*n4;
    }
    else if(operation=='/'){
        if(n4==0){
        rst= 'ERROR:Take math class bro';
        }
        else{
        rst= n3/n4;}
    }
    else if(operation=='root'){
        if(isNaN(n4)){
            rst = 'ERROR:Take math class bro'
        }
        else if(n4 < 0){
            rst = 'ERROR:Take math class bro'
        }
        else{
            rst= Math.sqrt(n4);
        }
        
    }
    else if(operation=='mod'){
        rst= n3 % n4;
    }
    else if(operation=='square'){
        rst= n3 ** 2;
    }
    display();
}
function display(){
    total.textContent = rst;
    operation = '';
    if(rst[0]=='E'){
        n = '';
        rst = ''
    }

    n1 = rst;
    n2  = '';
}

function hard(){
    if(mode=='square'){
        operation = mode;
        let holder = "<sup>2</sup>"
        total.innerHTML = n1 + '' +holder;
    }
    else if(mode=='root'){
        operation = mode;
        total.textContent += content;
    }

}

operate();