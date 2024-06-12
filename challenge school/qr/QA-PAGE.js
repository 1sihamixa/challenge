let theLinke=new URLSearchParams(window.location.search);
let category= theLinke.get('category');
let randomNumber = Math.floor(Math.random() * 5);


fetch('DATA.json')

.then((response) => response.json())
.then(data => {

    let randomquestion="question"+randomNumber
    let answer="answer"+randomNumber
    let answerLettersNumber=(data[category][answer]).length

    console.log(data[category][randomquestion])
    console.log(data[category][answer])
    
    let Question=document.getElementById('Question')
    Question.textContent=data[category][randomquestion]

    let ICON=document.getElementById('ICON')
    ICON.style.backgroundImage="url("+category+".png)"

     let STROKEICONE=document.getElementById('STROKE-ICONE')
     STROKEICONE.style.backgroundImage="url("+category+"-stroke.png)"
    

    // let TIMER=document.getElementById('TIMER')
    // let currentSecond = new Date().getSeconds();
    // if(currentSecond===currentSecond+1){
    //     TIMER.textContent=TIMER.textContent+1
    // }

    function updateTimer() {
        let TIMER = document.getElementById('TIMER');
        TIMER.textContent = parseInt(TIMER.textContent) + 1;
        setTimeout(updateTimer, 1000);
    }
    updateTimer();


for(let i=0;i<answerLettersNumber;i++){
let ANSWERSECTION=document.createElement('div')
ANSWERSECTION.className="ANSWER-SECTION"
let ANSWERLETTER=document.createElement('span')
ANSWERLETTER.id= "LETTER"+i
ANSWERSECTION.appendChild(ANSWERLETTER)

let ANSWERCONTAINER=document.getElementById('ANSWER-CONTAINER')
ANSWERCONTAINER.appendChild(ANSWERSECTION)

}
})

function getId(clickedElement) {
    let elementId = clickedElement.id;

    fetch('DATA.json')
        .then((response) => response.json())
        .then(data => {
            let RandomAnswer = "answer" + randomNumber;
            let answerLettersNumber = data[category][RandomAnswer].length;
            let ANSWER=data[category][RandomAnswer].toUpperCase()
            if(ANSWER.includes(elementId)){
                let LETTER=document.getElementById(elementId)
                LETTER.style.border = "green solid 3px";
            }
            else{
                let LETTER=document.getElementById(elementId)
                LETTER.style.border = "red solid 3px";
                let ATTEMPTS=document.getElementById('ATTEMPTS')
                ATTEMPTS.textContent=ATTEMPTS.textContent-1
               
            }


            
            for (let i = 0; i < answerLettersNumber; i++) {
                let ANSWERLETTER = document.getElementById("LETTER"+i);
                if (ANSWERLETTER.textContent === "") {
                    ANSWERLETTER.textContent = elementId;
                    break;
                }
            }


            if(ATTEMPTS.textContent==="0"){
                let FINISH=document.getElementById('STROKE-ICONE')
                let LOSEICON=document.getElementById('LOSE-ICON')
                FINISH.style.display= ""
                LOSEICON.style.backgroundImage="url("+category+"-LOSE.png)"
            }
        });
}





