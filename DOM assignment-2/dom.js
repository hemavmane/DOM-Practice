
function addfunction(){
    let x = document.forms["myform"]["name"].value
let y = document.forms["myform"]["emailid"].value
let z = document.forms["myform"]["mobilenumber"].value
if(x=="" || y=="" || z==""){
    document.querySelector(".alert").innerText="Empty Input Field(s)"
    
    document.querySelector(".alert").style.color="red"
    document.querySelector(".alert").style.textAlign="center"
    document.querySelector(".alert").style.fontSize="20px"
    document.querySelector(".alert").style.fontWeight="bold"
    document.querySelector(".alert").style.hight="20px"
    setTimeout(()=>(document.querySelector(".alert").innerText=""),2000)
   
}
}

let form = document.querySelector("form")
form.addEventListener("submit",addfunction)
console.log(form);

let tbody = document.querySelector("tbody")


function onAddrow(event) {
   event.preventDefault();
    let text = document.querySelector("#textname").value
    let email = document.querySelector("#email").value
    let number= document.querySelector("#phone").value
    if(text !==""|| email !==""||number !==""){
        tbody.innerHTML+=`
        <tr>
       <td>${text}</td>
       <td>${email}</td>
       <td>${number}</td>
       <td>  <input type="submit" value="remove" onclick ="removerow();" class="bt" id="button"/></td>
       
        `;
    

     document.querySelector("#textname").value=""
    document.querySelector("#email").value=""
     document.querySelector("#phone").value=""
}
   
}

form.addEventListener("submit",onAddrow);

function removerow(){
   document.querySelector(".bt").closest("tr").remove();
   document.querySelector(".alert1").innerText="Item deleted successfully"
   document.querySelector(".alert1").style.color="red"
    
    document.querySelector(".alert1").style.textAlign="center"
    document.querySelector(".alert1").style.fontSize="20px"
    document.querySelector(".alert1").style.fontWeight="bold"
    document.querySelector(".alert1").style.hight="20px"
    setTimeout(()=>(document.querySelector(".alert1").innerText=""),2000)
   
}











