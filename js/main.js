class country {
    constructor(countryname,language, capital, religion,government,currency) {
        this.countryname = countryname
        this.language = language
        this.capital = capital
        this.religion = religion
        this.government = government
        this.currency = currency
    }
}
const USA = new country("United States of America","English","Washington, D.C.","Christianity","Constitutional Republic", "U.S. Dollar (USD)")
const Germany = new country("Germany","German","Berlin","None","Parliamentary Republic","Euro (EUR)")
const Japan = new country("Japan","Japanese","Tokyo","None","Parliamentary Constitutional Monarchy","Japanese Yen")
const SouthKorea = new country("South Korea","Korean","Seoul","None","Unitary Presidiential Republic","Korean Republic Won (KRW)")
const Italy = new country("Italy","Italian","Rome","Christianity","Unitary Parliamentary Republic","Euro (EUR)")
const Thailand = new country("Thailand","Thai","Bangkok","Buddhism","Unitary Parliamentary Semi-Democratic Constitutional Monarchy","Baht (THB)")
const Philippines = new country("Philippines","Filipino","Manila","Roman Catholic","Unitary Presidential Republic","Philippine Peso (PHP)")
const Australia = new country("Australia","English","Canberra","Christianity","Federal Parliamentary Constitutional Monarchy","Australian Dollar (AUD)")
const France = new country("France","French","Paris","Christianity","Unitary Semi-Presidential Republic","Euro (EUR)")
const Norway = new country("Norway","Norwegian","Oslo","Christianity","Unitary Parliamentary Constitutional Monarchy","Norwegian Krone (NOK)")
const imgItem = document.getElementById("flagimage")
const button = document.getElementById("randomizer")
const li = document.querySelectorAll("li")
const countryList = [USA,Germany,Japan,SouthKorea,Italy,Thailand,Philippines,Australia,France,Norway]
const flagArray = ["./../images/flagofusa.png","./../images/flagofgermany.png","./../images/flagofjapan.png","./../images/flagofsouthkorea.png","./../images/flagofitaly.png","./../images/flagofthailand.png","./../images/flagofphilippines.png","./../images/flagofaustralia.png","./../images/flagoffrance.png","./../images/flagofnorway.png"]

function pickACountry() {
    const randomIndex = Math.floor(Math.random() * countryList.length)
    const displayCountry = countryList[randomIndex]
    const countryFlag = flagArray[randomIndex]
    midP.classList.add("fst-italic")
    imgItem.src = countryFlag
    nameofcountry.innerText = displayCountry.countryname
    li[0].innerHTML = `Our nations language is ${displayCountry.language}`
    li[1].innerHTML = `Our nations capital city is ${displayCountry.capital}`
    li[2].innerHTML = `Our government is considered a ${displayCountry.government}`
    li[3].innerHTML = `In our country we practice ${displayCountry.religion}`
    li[4].innerHTML = `We pay for most things in ${displayCountry.currency}`
}
button.addEventListener("click", function(){
    pickACountry()
    if (randomizer.innerText === "Start your journey here!") {
        randomizer.innerText = "Continue your journey!"
    }

    if (midP.innerText === "Your") {
        midP.innerText = "Another"
    }
})