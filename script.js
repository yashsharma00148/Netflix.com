let faq_items=document.querySelectorAll(".faq-item")
console.log("netflix")
console.log(faq_items)

faq_items.forEach(item=>{
    item.addEventListener("click",()=>{
        let question=item.querySelector(".faq-question")
        let icon=question.querySelector("#icon")
        let answer=item.querySelector(".faq-answer")
        if (icon.classList.contains("fa-plus")){
            icon.classList.remove("fa-plus")
            icon.classList.add("fa-x")
            answer.style.height="90px"
        }
        else{
            icon.classList.remove("fa-x")
            icon.classList.add("fa-plus")
            answer.style.height="0px"

        }
    })
})