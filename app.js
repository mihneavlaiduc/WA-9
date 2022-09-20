
const urlArray = ["https://api.genderize.io/?name=luc", "https://api.nationalize.io/?name=nathaniel","https://official-joke-api.appspot.com/random_joke"];


//First 
const parseUrlArray = (urlArray) => {
    urlArray.forEach(element => {
        axios.get(element)
            .then(function (response) {
                console.log(response)
            })
            .catch(function (error) {
                console.log(error);
            })
    });
}
parseUrlArray(urlArray);

const logAllAtOnce = () => {
    const promises = urlArray.map(element => {
    return axios.get(element)
        .catch(function(error) {
            console.log(error);
        })
})
    Promise.all(promises).then((res) => {
        console.log(res);
    })
}
logAllAtOnce();

//Second
     const btn = document.getElementById("refresh-button");
     const refreshingText = document.getElementById("refreshing-text");
     const bitcoinBody = document.getElementById("bitcoin-body");

     btn.addEventListener("click", () => {

        while(bitcoinBody.firstChild) {
            bitcoinBody.removeChild(bitcoinBody.firstChild);
        }

        refreshingText.style.display = 'block';
         axios.get("https://api.coindesk.com/v1/bpi/currentprice.json")
            .then(function(response) {
                const data = Object.values(response.data);
                const test = Object.entries(data[3])
                test.forEach(element => {
                    const li = document.createElement('li');
                    li.innerHTML = JSON.stringify(element[1])
                    bitcoinBody.appendChild(li);
                    refreshingText.style.display = 'none';
                })
            })
     })

