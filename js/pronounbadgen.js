function init(){
    pinput = document.getElementById("pronouninput")
    updatePronouns({target:pinput})
    pinput.addEventListener("input", updatePronouns) 
}
function updatePronouns(e){
    document.getElementById("pronouns").textContent = e.target.value
}
function set_flag(idx, flagid){
    document.getElementById("flag"+idx).attributes['xlink:href'].value = "#" + flagid
    document.getElementById("flag"+idx+"input").style.background = "url(svg/"+flagid+".svg) repeat-x"
}

function switch_flags(){
    f1 = document.getElementById("flag1").attributes['xlink:href'].value.slice(1)
    f2 = document.getElementById("flag2").attributes['xlink:href'].value.slice(1)
    set_flag(1,f2)
    set_flag(2,f1)
}
