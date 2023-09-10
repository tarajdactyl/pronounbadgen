function init(){
    pinput = document.getElementById("pronouninput")
    updatePronouns({target:pinput})
    pinput.addEventListener("input", updatePronouns) 
}
function updatePronouns(e){
    document.getElementById("pronouns").textContent = e.target.value
}
function set_flag1(flagid){
    document.getElementById("flag1").attributes['xlink:href'].value = flagid
}

function set_flag2(flagid){
    document.getElementById("flag2").attributes['xlink:href'].value = flagid
}

function switch_flags(){
    f1 = document.getElementById("flag1").attributes['xlink:href'].value
    f2 = document.getElementById("flag2").attributes['xlink:href'].value
    document.getElementById("flag1").attributes['xlink:href'].value = f2
    document.getElementById("flag2").attributes['xlink:href'].value = f1
}
