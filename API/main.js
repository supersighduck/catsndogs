document.getElementById('catButton').addEventListener('click', runCatButton)
document.getElementById('dogButton').addEventListener('click', runDogButton)

//cat random image API
function runCatButton(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(function(res){
    return res.json()
})
.then(function(data){
    document.getElementById('catImage').src= data[0].url
    return console.log(data[0].url)
})
.catch(function(err){
    return console.log(err)
})
}

//dog random image API
function runDogButton(){
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(res => res.json())
    .then(data => {
        console.log(data.message)
        document.getElementById('dogImage').src = data.message
    })
    .catch(err => console.log(err))
}