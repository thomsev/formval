const url = "https://randomuser.me/api/?page=3&results=10&seed=abc";

window.addEventListener("load", ()=>{
    const loader=document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitioned", () => {
        document.body.removeChild("loader"); 
    })
})

function fetchData(){
    fetch(url)
    .then(response =>{
        if (!response.ok) {
            throw Error("Error");
        }
        return response.json();
    })
.then(results => {
    console.log(results.results);
    const html = results.results
    .map(user =>{
        return `
        <div class="user">
        <p>Name: ${user.name.first}</p>
        <p>Location: ${user.location.city}</p>
        <p>Gender: ${user.gender}</p>
        </div>
        `;
    })
    .join("");
    console.log(html);
    document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
})
.catch(error => {
    console.log(error)
});
}
fetchData();
