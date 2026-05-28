const closeBtn = document.getElementById("closeBtn");

closeBtn.addEventListener('click',() => {
    let res = confirm("Do you want to close the CBT?")
    
    if(res){
        window.location.href = "/index.html"
    }
})
