window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then( function(response) {
        response.json().then( function(json) {
        console.log(json);
        const div = document.getElementById("container");
        for(let index = 0; index < json.length; index++){
            if(json[index].active === true){
                fontColor ="green";
            } else {fontColor = "black";}
            div.innerHTML += `
            <div class="astronaut">
                <div class = "bio">
                    <h3>${json[index].firstName} ${json[index].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[index].hoursInSpace}</li>
                        <li class =${fontColor}>Active: ${json[index].active}</li>
                        <li>Skills: ${json[index].skills}</li>
                    </ul>
                </div>    
                <img class = "avatar" src=${json[index].picture} height=250></img>
            </div>
            `;
//div.innerHTML +=`${index}`;
            index = (index + 1) % json.length;      
        }
        div.innerHTML += `Astronaut Count: ${json.length}`;
        });
    });
});
