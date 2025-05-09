let count= 0
let my_text = document.getElementById("count-el")//gives   <h2 id="count-el">0</h2>
console.log(my_text);//ye node.js se runkrny p output nh dega browser p chlega

function increment(){
    count+=1
    my_text.innerText = count
    console.log(count)
}

console.log(count)
let saveEl = document.getElementById("save-el")

function save(){
    // let text = " " + count + " - "
    // saveEl.innerText += text 
    let text = count + " - "
    saveEl.textContent += text 
    count = 0
    my_text.innerText = count
}