
document.querySelector(".b").addEventListener('click',f);
async function f(){
    var c =document.querySelector("input");
    var k=c.value;
    var prompt=`Please analyze the following question: "${k}". If it's a DSA question or coding concept ,use emojis and the answer should very clear to user explain how to solve it, the approach, and the algorithms how to thought like that ,timecomplexity and spacecomplexity behind it—but do not include code. If it's not a DSA question, simply say in fun way to give dsa question.`
    console.log("clicked");
var n=document.querySelector(".c");
const element=document.createElement("div")
element.className="hello"
var question=document.createElement("div")
question.className="question";
question.textContent=c.value;
element.appendChild(question)
c.value=''
  n.appendChild(element)
var l=await fetch("http://localhost:3000/submit", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ prompt: prompt }) 

});
const data=await l.json()
const answer=document.createElement("div")
answer.innerHTML=data.ans.replace(/### (.+)/g, '<h3>$1</h3>')
  .replace(/\n/g, '<br>')
  .replace(/\* (.+)/g, '<li>$1</li>')
.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  .replace(/`([^`]+)`/g, '<span class="inline-code">$1</span>')
element.appendChild(answer)

}