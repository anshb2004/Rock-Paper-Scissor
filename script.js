document.addEventListener("DOMContentLoaded", function() {
    let users = 0;
    let compu = 0;

    const choices = document.querySelectorAll(".choice");
    const msg = document.querySelector("#msg");
    const uc = document.querySelector("#me");
    const cc = document.querySelector("#comp");

    const swinner = (uwin, uchoice, cchoice) => {
        if (uwin) {
            users++;
            uc.innerText = `User: ${users}`; 
            msg.innerText = `You win! ${uchoice} beats ${cchoice}`;
            msg.style.backgroundColor = "green"; 
        } else {
            compu++;
            cc.innerText = `Enemy: ${compu}`;
            msg.innerText = `You lose! ${cchoice} beats ${uchoice}`;
            msg.style.backgroundColor = "red"; 
        }
    };
    
    const draw = (uchoice) => {
        msg.innerText = `Game was drawn! as you both choose ${uchoice}`;
        msg.style.backgroundColor = "grey"; 
    };

    const getcchoice = () => {
        const options = ["rock", "paper", "scissors"];
        const rchoice = Math.floor(Math.random() * 3);
        return options[rchoice];
    };

    const play = (uchoice) => {
        console.log("User's choice: ", uchoice);
        const cchoice = getcchoice();
        console.log("Computer's choice: ", cchoice);
        if (uchoice === cchoice) {
            draw(uchoice);
        } else {
            let uwin = true;
            if (uchoice === "rock") {
                uwin = cchoice === "paper" ? false : true;
            } else if (uchoice === "paper") {
                uwin = cchoice === "scissors" ? false : true;
            } else {
                uwin = cchoice === "rock" ? false : true;
            }
            swinner(uwin, uchoice, cchoice); 
        }
    };

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const uchoice = choice.getAttribute("id");
            play(uchoice);
        });
    });
});
