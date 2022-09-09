const url = "https://randomuser.me/api/?gender=female";

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
        <p>Name: ${user.name.last}</p>
        <p>Country: ${user.location.country}</p>
        <p>Age: ${user.dob.age}</p>
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
