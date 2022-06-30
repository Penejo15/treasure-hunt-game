
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create_players_name");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        handlingServePost(e.target.player_name.value);
        handlingServeGet(e.target.player_name.value);
        form.reset();
        
        
    })

    function handlingServePost(e){
        fetch("http://localhost:3000/players", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                name: e
            })
        })
    }    
    function handlingServeGet(e){
        fetch("http://localhost:3000/players")
        .then((resp) => resp.json())
        .then((json) => renderPlayers(json));
    
    }
    function renderPlayers(players) {
        const info = document.getElementById('player_info');
        /* players.forEach(player => {
            const h2 = document.createElement('h2');
            h2.innerHTML = player.name;
            info.appendChild(h2);
        });  */
       
        const h2 = document.createElement('h2');
        h2.innerHTML = players[players.length - 1].name;
        info.appendChild(h2);

        let myVar = setInterval(function(){ myTimer() }, 1000);
        let secondlimit = 30;

        function myTimer() {
            if(secondlimit == 0){
                myStopFunction();
            }

            document.getElementById("display_timer").innerHTML = '00:' + zeroPad(secondlimit,2);
            secondlimit = secondlimit  - 1;

        }

        function myStopFunction() {
            clearInterval(myVar);
        }

        function zeroPad(num, places) {
            let zero = places - num.toString().length + 1;
            return Array(+(zero > 0 && zero)).join("0") + num;
        }

        
        
        
    }
})
