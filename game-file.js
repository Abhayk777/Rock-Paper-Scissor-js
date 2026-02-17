const getComputerChoice = () => {
    max = 3
    min = 1
    a = Math.floor(Math.random() * (max - min + 1) + min)
    b = ""
    if(a === 1){
        b = "rock"
    }
    else if(a === 2){
        b = "paper"
    }
    else{
        b = "scissor"
    }
    return b
}

const getHumnaChoice = () => {
    let userName = prompt("Please enter your pick:")
    while(userName.toLowerCase() != "rock" && userName.toLowerCase() != "paper" && userName.toLowerCase() != "scissor" ){
        alert("Can't even enter Rock Paper and Scissor are you dumb")
        userName = prompt("Please enter your pick:")
    }
    
       
    return userName.toLowerCase()
}


const playRound = () => {
    m = getComputerChoice()
    n = getHumnaChoice()
    if(m === n){
        alert("Ohh DANG IT! That's a DRAW")
        score = null
    }
    else if(m === "rock" && n === "paper"){
        alert(`Human point,${m} beats ${n}`)
        score = 0  
                    
    }
    else if(m === "rock" && n === "scissor"){
        alert(`Computer point,${n} beats ${m}`)
        score = 1
    }
    else if(m === "scissor" && n === "paper"){
        alert(`Computer point,${m} beats ${n}`)
        score = 0        
    }
    else if(m === "scissor" && n === "rock"){
        alert(`Human point,${n} beats ${m}`)
        score = 1
        
    }
    else if(m === "paper" && n === "rock"){
        alert(`Computer point,${m} beats ${n}`)
        score = 0        
    }
    else if(m === "paper" && n === "scissor"){
        alert(`Human point,${n} beats ${m}`)
        score = 1        
    }
    else{
        alert("HOLY SHIT DID YOU FIND A BUG. MY BAD DUDE!")
        score = null
    }
    return score
}

const playGame = () => {
    let num = Number(prompt("Enter number of rounds:"));
    if(num === null || num === 0 ){
        alert("Dont't waste my time if you dont wanna play")
    }
    else{
        humanPoints = 0
        computerPoints = 0
        for(let i = 0; i < num; i++){ 
            z = playRound()
            if(z === 1){
                humanPoints += 1
                
            }
            else if(z === 0){
                computerPoints += 1
                
            }
            else{
                continue
            }
        }
        if(humanPoints > computerPoints){
            console.log("Human won")
            console.log(`Your score:${humanPoints}`)
            console.log(`Computer's score:${computerPoints}`)
        }
        else if(computerPoints > humanPoints){
            console.log("Computer won")
            console.log(`Your score:${humanPoints}`)
            console.log(`Computer's score:${computerPoints}`)
        }
        else{
            console.log("Draw")
            console.log(`Don't ask me the points stupid noob. Don't you know basic maths`)
        }
    }
}
playGame()