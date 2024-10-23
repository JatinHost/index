let OG = document.querySelector(".active")
    document.querySelectorAll(".deactive").forEach(e => {
        e.addEventListener("mouseover", ()=>{
            document.querySelector("a.active").classList.remove("active")
            e.classList.add("active")
        })
        e.addEventListener("mouseout",()=>{
            document.querySelector("a.active").classList.remove("active")
            OG.classList.add("active")
        })
    });