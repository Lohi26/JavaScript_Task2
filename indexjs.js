const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),
    registerNewAnswer(){
        const option=Number(prompt(`${this.question}\n${this.options.join("\n")}`));
        if(option<this.answers.length && option!=NaN)
        this.answers[option]++;
        else
        prompt("Invalid option enter the correct option");
        console.log(poll.answers);
        this.displayResults();
        this.displayResults("string");
    },
    displayResults(type="array"){
        if(type==="array")
        console.log(this.answers);
        else if(type==="string")
        console.log(`Poll results are ${this.answers.join(", ")}`);
    }
};
document.querySelector("button").addEventListener("click",poll.registerNewAnswer.bind(poll));
poll.displayResults.call({answers:[1,2,3,4,5]});
