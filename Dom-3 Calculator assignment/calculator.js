let display = document.querySelector(".main_display")
let btn = Array.from(document.getElementsByClassName("button"))



// array.filter((t)=>{
// t.addEventListene("click",(u)=>{

// })
// })

btn.map((x)=>{
    x.addEventListener("click",(y)=>{
     key= y.target.innerText; 
console.log(key)
    if(key=="Del"){
        if(display.innerText=="infinity"){
            display.innerText=""
        }
        display.innerText=display.innerText.slice(0,-1)
    }else if(key=="="){
        display.innerText=eval(display.innerText)
    }else
    if(key=="A/C"){
        display.innerText=""
    } else if(key=="sin"){
        display.innerText=Math.sin(display.innerText)
    }else if(key=="cos"){
        display.innerText=Math.cos(display.innerText)
    }else if(key=="tan"){
        display.innerText=Math.tan(display.innerText)
    }else if(key=="ln2"){
        display.innerText=Math.LN2(display.innerText)
    }else if(key=="ln10"){
        display.innerText=Math.LN10(display.innerText)
    }else if(key=="log"){
        display.innerText=Math.log(display.innerText)
    }else if(key=="√"){
        display.innerText=Math.sqrt(display.innerText)
    }else if(key=="π"){
        display.innerText+=3.142
    }else if(key=="e"){
        display.innerText+= 2.71828
    }else if(key=="Deg"){
        display.innerText+= 57.296

    }else if(key=="rad"){
        display.innerText+=0.01745

  } else if(key=="X!"){
    
    function facto(num){
        if(num==0){
            return 1
        }else{
          return   num*facto(num-1)
        }
        
    } display.innerText=facto(display.innerText)

  }else if(key=="x^2"){
display.innerText=eval(display.innerText*display.innerText)

  }

    else{
        display.innerText +=key
    }

    })
})
