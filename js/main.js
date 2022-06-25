class country {
    constructor(countryname,language, capital, religion,government,currency, famous) {
        this.countryname = countryname
        this.language = language
        this.capital = capital
        this.religion = religion
        this.government = government
        this.currency = currency
        this.famous = famous
    }
}
const USA = new country("United States of America","English","Washington, D.C.","Christianity","Constitutional Republic", "U.S. Dollar (USD)", " its history, its film industry, its music industry and its dozens of unique and historic monuments")
const Germany = new country("Germany","German","Berlin","no religion","Parliamentary Republic","Euro (EUR)","its beer festivals, the autobahn, and its luxury cars")
const Japan = new country("Japan","Japanese","Tokyo","no religion","Parliamentary Constitutional Monarchy","Japanese Yen","its cherry blossoms, mount fuji, and anime/manga")
const SouthKorea = new country("South Korea","Korean","Seoul","no religion","Unitary Presidiential Republic","Korean Republic Won (KRW)","K-pop, street food, and medical technology")
const Italy = new country("Italy","Italian","Rome","Christianity","Unitary Parliamentary Republic","Euro (EUR)", "wine, pizza and pasta")
const Thailand = new country("Thailand","Thai","Bangkok","Buddhism","Unitary Parliamentary Semi-Democratic Constitutional Monarchy","Baht (THB)","its street food, islands, and temples")
const Philippines = new country("Philippines","Filipino","Manila","Roman Catholicism","Unitary Presidential Republic","Philippine Peso (PHP)","its festivals, food, and the chocolate hills")
const Australia = new country("Australia","English","Canberra","Christianity","Federal Parliamentary Constitutional Monarchy","Australian Dollar (AUD)","its exotic wildlife, the didgeridoo, and the great emu war")
const France = new country("France","French","Paris","Christianity","Unitary Semi-Presidential Republic","Euro (EUR)","Notre Dame, The Eiffel Tower, and Le Louvre")
const Norway = new country("Norway","Norwegian","Oslo","Christianity","Unitary Parliamentary Constitutional Monarchy","Norwegian Krone (NOK)","The Nothern Lights, The Doomsday Vault, and vikings")
const imgItem = document.getElementById("flagimage")
const button = document.getElementById("randomizer")
const li = document.querySelectorAll("li")
const ul = document.querySelectorAll("ul")
const countryList = [USA,Germany,Japan,SouthKorea,Italy,Thailand,Philippines,Australia,France,Norway]
const flagArray = ["./images/flagofusa.png","./images/flagofgermany.png","./images/flagofjapan.png","./images/flagofsouthkorea.png","./images/flagofitaly.png","./images/flagofthailand.png","./images/flagofphilippines.png","./images/flagofaustralia.png","./images/flagoffrance.png","./images/flagofnorway.png"]

function pickACountry() {
    const randomIndex = Math.floor(Math.random() * countryList.length)
    const displayCountry = countryList[randomIndex]
    const countryFlag = flagArray[randomIndex]
    midP.classList.add("fst-italic")
    imgItem.src = countryFlag
    nameofcountry.innerText = displayCountry.countryname
    li[0].innerText = `Our nations language is ${displayCountry.language}`
    li[1].innerText = `Our nations capital city is ${displayCountry.capital}`
    li[2].innerText = `Our government is considered a ${displayCountry.government}`
    li[3].innerText = `In our country we practice ${displayCountry.religion} officially`
    li[4].innerText = `We pay for most things in ${displayCountry.currency}`
    li[5].innerText = `Well known for ${displayCountry.famous}`
    li.forEach(element => {
    element.classList.remove("slidefrombottom")
    element.offsetHeight
    element.classList.add("slidefrombottom")
   });
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

