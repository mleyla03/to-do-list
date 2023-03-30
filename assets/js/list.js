
let button = document.querySelector("#buton")
let todo =document.querySelector("#todoList")
let list=document.querySelector("#list")
button.addEventListener("click",daxilEt)

function daxilEt(){
    let value=todo.value
   let li = document.createElement("li")
   li.textContent=value
   list.append(li)
   li.style.border="1px solid deeppink"
   li.style.borderRadius="5px"
   li.style.fontSize="18px"
   li.style.transition="0.2s"
   li.style.backgroundColor="purple"
   todo.value=""
}

