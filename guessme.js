let guessMe = 54

while (guessMe < 100) {
    console.log(`---------------------`)
    if (guessMe % 4 == 0 || guessMe % 5 == 0) {
        console.log(`guessMe is divisible by 4 or 5, added 25`)
        guessMe += 25
    } else if (guessMe % 3 == 0) {
        console.log(`guessMe is divisible by 3, subtracted 27`)
        guessMe -= 27
    } else {
        console.log(`guessMe is not divisible by 3,4, or 5 added 3`)
        guessMe += 3
    }
    guessMe += 22
    console.log(`added 22, guessMe is now ${guessMe}`)
} 
