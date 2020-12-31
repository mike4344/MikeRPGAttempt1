let readline = require("readline");

let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let enterName = () =>{
    rl.question("What is your name Hero?", name =>{
        console.log(`Huzahh, ${name} has arrived`)
        chooseClass(name)
    })
}
let chooseClass = (name) =>{
    rl.question("Be you wizard, Be you rogue or Be you warrior", characterClass =>{
        if(characterClass === "wizard"){
            console.log(`ahhh ${name} the great mage welcome to my tavern`)
        }else if(characterClass === "warrior"){
            console.log(`ahhh ${name} the mighty warrior welcome to my tavern`)
        }else if(characterClass === "rogue"){
            console.log(`ahhh ${name} the sly rogue welcome to my tavern`)

        }
        startJourney(name, characterClass)
    })
}
let startJourney = (name, characterClass) =>{
    rl.question("I need a hero like you to slay the frost dragon will you accept? yes/no ", didYouStart=>{
        if (didYouStart === "yes"){
            console.log(`thank you ${name} HEY EVERYONE ${name.toUpperCase()} WILL SAVE US !!!!!! `)
            startQuest(name, characterClass)
        } else {
            console.log(`well it looks like ${name} the stupid ${characterClass} doomed us all, *sarcastic* good job ${name} real hero over here`)
            rl.close()
        }
    } )
    rl.question("")
}
let startQuest = (name, characterClass) =>{
    console.log("*you go outside the tavern only to be confronted by the mighty frost dragon")
    rl.question("Do you sprint at the dragon waving your weapon like an idiot? yes/no ", isAnIdiot=>{
        if(isAnIdiot === "yes"){
            console.log(`${name} lost and in about 12 - 14 hours will be dragon poop, good job ${name} the poop`)
            rl.close()
        } else {
            questStepOne(name, characterClass)
        }
    })
}
let questStepOne = (name, characterClass) =>{
    console.log(`good choice ${name} it would have been incredibly stupid to have just ran in like an idiot`)
    rl.question("do you carefully devise a plan to kill the dragon?, yes/no", careful =>{
        if (careful === "yes"){
            console.log(`yayyyy ${name}, you did it, you used you ${characterClass} skills to kill the dragon`)
            questStepTwo(name, characterClass)
        }else{
            console.log("you is leastly smartyest person ever dragon does not want to eat you now because he does not want to gain your stewpid, you die of emarassment")
            rl.close()
        }
    })
}
questStepTwo = (name, characterClass) =>{
    console.log("you turn and walk away and just as you think you are safe out from the dragons chest burts a dragon of shadows and says 'haha mortal you have freed me from my vessel to bring 1000 years of darkness to the land ")
    rl.question(`${name.toUpperCase()} WHAT DID YOU DO, so are you goin to use your ${characterClass} abilities or not!!!!`, useClass =>{
        if(useClass === yes){
            if(characterClass === "wizard"){
                console.log(`${name}, the ${characterClass} conjures up hudreds of light spears and hurls them at the shadow dragon ending him quickly`)

            } else if(characterClass === "warrior"){
                console.log(`${name}, the ${characterClass} runs headlong at the shadow dragon and stabs it in the right in the shadow heart`)
            }
            if(characterClass === "wizard")

            console.log(`${name} you are good ${characterClass} goodbye`)
        }
    })
}
enterName()

