let readline = require("readline");
// import readline to be used
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// this function asks user input for their name and saves it as name greets them and sends them to choose class
let enterName = () =>{
    rl.question("What is your name Hero? ", name =>{
        console.log(`Huzahh, ${name} has arrived`)
        console.log("")
        chooseClass(name)
    })
}
//after choosing your name it allows you to choose class, if you type in one of the relevent classes it will accept and send you on the journey start
// if you give an invalid response it will insult the user and ask again
let chooseClass = (name) =>{
    rl.question("Be you wizard, Be you rogue or Be you warrior ", characterClass =>{
        if(characterClass === "wizard"){
            console.log(`ahhh ${name} the great mage welcome to my tavern`)
            console.log("")
            startJourney(name, characterClass)
        }else if(characterClass === "warrior"){
            console.log(`ahhh ${name} the mighty warrior welcome to my tavern`)
            console.log("")
            startJourney(name, characterClass)
        }else if(characterClass === "rogue"){
            console.log(`ahhh ${name} the sly rogue welcome to my tavern`)
            startJourney(name, characterClass)
        } else {
            console.log("you are stupid now I will ask you one more time")
            chooseClass(name)
        }

    })
}
//you can choose to start journey if you choose yes it sends you onto quest step one,
//if you choose no it insults you and you exit
//if you give an invalid answer it insults you and ask again
let startJourney = (name, characterClass) =>{
    rl.question("I need a hero like you to slay the frost dragon will you accept? yes/no ", didYouStart=>{
        if (didYouStart === "yes"){
            console.log(`thank you ${name} HEY EVERYONE ${name.toUpperCase()} WILL SAVE US !!!!!! `)
            console.log()
            startQuest(name, characterClass)
        } else if(didYouStart === "no"){
            console.log(`well it looks like ${name} the stupid ${characterClass} doomed us all, *sarcastic* good job ${name} real hero over here`)
            rl.close()
        } else {
            console.log("please only yes or no answer we do not have time for this there is a dragon outside ")
            startJourney(name, characterClass)
        }
    } )

}
let startQuest = (name, characterClass) =>{
    console.log("*you go outside the tavern only to be confronted by the mighty frost dragon")
    rl.question("Do you sprint at the dragon waving your weapon like an idiot? yes/no ", isAnIdiot=>{
        if(isAnIdiot === "yes"){
            console.log(`${name} lost and in about 12 - 14 hours will be dragon poop, good job ${name} the poop`)
            console.log("")
            rl.close()
        } else if(isAnIdiot === 'no'){
            console.log("")
            questStepOne(name, characterClass)
        } else {
            console.log("please only yes or no answer we do not have time for this there is a dragon about to eat you ")
            console.log("")
            startQuest(name, characterClass)
        }
    })
}
let questStepOne = (name, characterClass) =>{
    console.log(`good choice ${name} it would have been incredibly stupid to have just ran in like an idiot`)
    console.log("")
    rl.question("do you carefully devise a plan to kill the dragon?, yes/no ", careful =>{
        if (careful === "yes"){
            console.log(`yayyyy ${name}, you did it, you used you ${characterClass} skills to kill the dragon`)
            questStepTwo(name, characterClass)
        }else if(careful === 'no'){
            console.log("you is leastly smartyest person ever dragon does not want to eat you now because he does not want to gain your stewpid, you die of emarassment")
            console.log("")
            rl.close()
        } else {
            console.log("please only yes or no answer we do not have time for this there is a dragon you are trying to kill ")
            console.log("")
            questStepOne(name, characterClass)
        }
    })
}
questStepTwo = (name, characterClass) =>{
    console.log("you turn and walk away and just as you think you are safe out from the dragons chest burts a dragon of shadows and says 'haha mortal you have freed me from my vessel to bring 1000 years of darkness to the land ")
    rl.question(`${name.toUpperCase()} WHAT DID YOU DO, so are you goin to use your ${characterClass} abilities or not!!!! yes/no `, useClass =>{
        if(useClass === "yes"){
            if(characterClass === "wizard"){
                console.log(`${name}, the ${characterClass} conjures up hudreds of light spears and hurls them at the shadow dragon ending him quickly`)
                console.log("")

            } else if(characterClass === "warrior"){
                console.log(`${name}, the ${characterClass} runs headlong at the shadow dragon and stabs it in the right in the shadow heart`)
                console.log("")
            } else if(characterClass === "rogue"){
                console.log(`${name} the ${characterClass} sneaks up on the dragon and say boo reallllly loud, the dragon cries and runs away defeated`)
                console.log("")
            }
            console.log(`${name} you are good ${characterClass} goodbye`)
            rl.close()
        } else if (useClass === "no"){
            console.log("instead of using your powers you go up and try to hug the dragon... it ... uhh... doesnt turnout well for you")
            console.log("")
            rl.close()
        } else {
            console.log("THIS IS NOT A TIME TO MESS THIS UP ONLY YES OR NO ANSWERS")
            console.log("")
            questStepTwo(name, characterClass)
        }
    })
}

enterName()
