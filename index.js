

const pad = document.querySelector('.drums')


window.addEventListener('keydown',(e)=>{
         const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
         const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
         if(!audio) return 
         audio.currentTime = 0 ;
         audio.play()
         pad.style.backgroundColor = "yellow"
         pad.style.boxShadow = "10px 10px 10px 0 yellow"
    

    

})


window.addEventListener('keyup',(e)=>{

    pad.style.backgroundColor =""
    pad.style.boxShadow = ""
})

