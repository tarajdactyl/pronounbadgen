function init(){
    pinput = document.getElementById("pronouninput")
    updatePronouns({target:pinput})
    pinput.addEventListener("input", updatePronouns) 
    build_flag_dropdowns()
}
function updatePronouns(e){
    document.getElementById("pronouns").textContent = e.target.value
}
function set_flag(idx, flagid){
    document.getElementById("flag"+idx).attributes['xlink:href'].value = "#" + flagid
    document.getElementById("flag"+idx+"input").getElementsByTagName("button")[0].style.background = "url(svg/"+flagid+".svg) repeat-x"
}

function switch_flags(){
    f1 = document.getElementById("flag1").attributes['xlink:href'].value.slice(1)
    f2 = document.getElementById("flag2").attributes['xlink:href'].value.slice(1)
    set_flag(1,f2)
    set_flag(2,f1)
}

function add_flag_to_dropdown(idx, flagname){
    d = document.getElementById("flag"+idx+"input").getElementsByClassName("dropdown-content")[0]
    d.innerHTML += "<a href='#' onclick='set_flag("+idx+",\""+flagname + "\")'><svg viewBox='0 0 400 400'><use xlink:href='#"+flagname+"'/><use xlink:href='#squareframe'/></svg></a>"
}

function build_flag_dropdowns(){
    for (flag of document.getElementsByClassName("flag")){
        add_flag_to_dropdown(1, flag.id)
        add_flag_to_dropdown(2, flag.id)
    }
}
