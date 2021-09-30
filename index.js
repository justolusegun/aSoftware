/**
 *  Redoing the marking guide....... Marking it more mad!!!!
 * 
 * @description 
 * The idea is to create a automated marking guide software with Vanilla-JavaScript, that asks how many question the user answered in the examination or test "assumed to have be taken by user" and tells the user  to input the selected answer in an array of [a,b,c,d] as answered in the assumed exam/test taken by user the software runs the selected answers with the one on the exam/test 💻💻💻
 * 
 * @author -- Olusegun Jeremiah Aina
 */




// List creating an array of a,b,c,d
    const arrOfAlphabet = "abcd";

// Now will would create random answers from the arrOfAlphabet.length
    const randomAnswer = arrOfAlphabet[Math.floor(Math.random() * arrOfAlphabet.length)]

// Create the results array
    let results = [ ]

// Let create where we ask the how questioned they answered and check if our randomAnswer == our userAnswer
    const questionedAnswered = prompt("How many questioned did you answer in the test ");

    for (let i = 0; i < questionedAnswered; i++) {
        var userAnswer = prompt(`Enter answers for questions 1 -- ${questionedAnswered} in ascending order from [a,b,c,d]`)
        randomAnswer == userAnswer ? results.push("You got this question right") : results.push("You got this question wrong")
    }
    

// We would assume the exam/test to be a test and also we would assume the test to be 20 questioned in total

   const confirmQuestionAnswered =  alert(`Please note that you answered ${questionedAnswered} out of 20 questions`)

// Okay... please note that we technically do not have the test result from the user so am thinking i should a default one or.... or... or which ever i do you will find out below

// Final part of this code.....  😢😢
    alert("You have completed this task, and final results are in.......");
    console.table(results);

// Now we display the final results to the user
 const final = results.filter(check => {
     
     check == "You got this question right" ? alert("You got this question right") : alert("You got this question wrong")
 })

 alert("check console for more detail on test.." + "\n" + " crtl shit i" + "Thank You")

 // End of code...........😎😋😎