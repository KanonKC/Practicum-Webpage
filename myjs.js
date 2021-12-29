function createMusic(url){
    var music = document.createElement("iframe")
    music.src = url
    music.width = "0"
    music.height = "0"
    music.allow = "autoplay"
    return music
}

const AmongUsDrip = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/917109698&color=%23ff5500&auto_play=true&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=true&visual=true"

var about_us = document.getElementById("about-us")
var audio = document.getElementById("audio")
var test = new Audio("https://cdn.discordapp.com/attachments/784488193852571668/925417644407017472/imposter_is_sus.mp3")
var random_word = ["Thamks Soundclound for Music!","Among Us","sU tuobA","Magic String","https://www.facebook.com/groups/514323486104989/"]
var magic_input = document.getElementById("magic-input")
var magic_btn = document.getElementById("magic-btn")
var bg_btn = document.getElementById("bg")
var start_music = true



about_us.addEventListener('mouseover',(test)=>{
    about_us.textContent = random_word[Math.floor((Math.random()*random_word.length))]
})

about_us.addEventListener('mouseleave',(test)=>{
    about_us.textContent = "About Us"
})

magic_btn.addEventListener('click',()=>{
    // document.body.classList.toggle('active-btn')
    if(magic_input.value == "Magic String"){
        document.body.classList.add("space")
        document.body.append(createMusic(AmongUsDrip))
    }
    magic_input.value = ""
})

// document.body.addEventListener('mouseover',()=>{
//     console.log(start_music)
//     if(start_music){
//         start_music = false
//         setInterval(function(){
//             console.log("HEH")
//             document.body.append(createMusic(AmongUsDrip))
//         },3000)
//     }
// })
