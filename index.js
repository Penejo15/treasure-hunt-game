
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create_players_name");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        handlingServe(e.target.player_name.value);
        form.reset();
    })

    function handlingServe(e){
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
        fetch("http://localhost:3000/players")
        .then((resp) => resp.json())
        .then((json) => renderPlayers(json));
    


        function renderPlayers(players) {
            const info = document.getElementById('player_info');
            players.forEach(player => {
                const h2 = document.createElement('h2');
                h2.innerHTML = player.name;
                info.appendChild(h2);
            });
        }
    }
})
