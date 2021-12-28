var about_us = document.getElementById("about-us")
var audio = document.getElementById("audio")
var test = new Audio("https://cdn.discordapp.com/attachments/784488193852571668/925417644407017472/imposter_is_sus.mp3")

var amoungUs = ["Among Us","sutuobA","Magic String"]
// var audio = document.getElementById("audio")

about_us.addEventListener('mouseover',(test)=>{
    test.play()
    about_us.textContent = amoungUs[Math.floor((Math.random()*amoungUs.length))]
    // audio.play()
})

about_us.addEventListener('mouseleave',(test)=>{
    about_us.textContent = "About Us"
})


