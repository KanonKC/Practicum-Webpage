var about_us = document.getElementById("about-us")
var audio = document.getElementById("audio")
var test = new Audio("https://cdn.discordapp.com/attachments/784488193852571668/925417644407017472/imposter_is_sus.mp3")
var random_word = ["Among Us","sutuobA","Magic String >> 01204111","https://www.facebook.com/groups/514323486104989/"]
var magic_input = document.getElementById("magic-input")
var magic_btn = document.getElementById("magic-btn")
var bg_btn = document.getElementById("bg")

about_us.addEventListener('mouseover',(test)=>{
    // test.play()
    about_us.textContent = random_word[Math.floor((Math.random()*random_word.length))]
    // audio.play()
})

about_us.addEventListener('mouseleave',(test)=>{
    about_us.textContent = "About Us"
})

magic_btn.addEventListener('click',()=>{
    document.body.classList.toggle('active-btn')
    if(magic_input.value == "01204111"){
        
    }
    magic_input.value = ""
})