// async function getUsers() {
//     const divPai = document.querySelector('.content-cards')
//     divPai.innerHTML = ''

//     const buttonAtualizar = document.getElementById('bottaoAtualizar')
//     buttonAtualizar.setAttribute('disabled', true)
//     const response = await fetch('https://api.randomuser.me/?results=10')
//     const data = await response.json()
//     buttonAtualizar.removeAttribute('disabled')

//     const results = data.results
//     createCardPerson(results)
// }
// getUsers()

const content = document.querySelector(".content")

async function getCharacters(){
    

    const response = await fetch("https://rickandmortyapi.com/api/character/?name=")
    const data = await response.json()
    //console.log("asdasd",data)
    createCardCharacter (data.results)
}
getCharacters()
async function getCharacter(){
    content.innerHTML = ''
    console.log("chamou")   
    const inputValue=document.getElementById("inputSearch").value 
    console.log(inputValue)
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${inputValue}`)
    const data = await response.json()
    console.log(data)
    createCardCharacter (data.results)
}
function createCardCharacter (results){

    for(const item of results) {

        const imgCharacter = item.image
        const nameCharacter = item.name
        const statusCharacter = item.status
        const speciesCharacter= item.species     

        const divCard = document.createElement("div")
        divCard.setAttribute("class", "card")
        divCard.style.width = "20rem"    
        content.appendChild(divCard)
    
        const image = document.createElement ("img")
        image.setAttribute("class", "photo")
        image.setAttribute("src", imgCharacter)
        divCard.appendChild(image)
    
        const divCardBody = document.createElement("div")
        divCardBody.setAttribute("class","card-body")
        divCard.appendChild(divCardBody)
    
        const h5Title = document.createElement("h5")
        h5Title.setAttribute("class", "card-title")
        h5Title.innerText = nameCharacter 
        divCardBody.appendChild(h5Title)
    
        const paragrafoStatus = document.createElement("p")
        paragrafoStatus.setAttribute("class", "card-brand")
        paragrafoStatus.style.color= "gray"
        paragrafoStatus.innerText = "Status: "+statusCharacter
        divCardBody.appendChild(paragrafoStatus)
    
        const paragrafoSpecies= document.createElement("p")
        paragrafoSpecies.setAttribute("class", "card-text")
        paragrafoSpecies.style.color= "gray"
        paragrafoSpecies.innerText = "Species: "+speciesCharacter
        divCardBody.appendChild(paragrafoSpecies)
    }


}
