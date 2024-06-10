#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.italic.bold.underline.white(" \t\t\t Welcome to the typescript Quiz by Ghaniya Khan \t\t\t"));
console.log(chalk.italic.bold.underline.white("\n \t\t\t\tEach question carry 1 point⭐ \n \t\t\t\t"));
const quiz = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        message: chalk.italic.bold.magenta("Q1: What is TypeScript?"),
        choices: ["A) A JavaScript framework",
            "B) A JavaScript library",
            "C) A superset of JavaScript",
            "D) A completely different language"]
    },
    {
        name: "question2",
        type: "list",
        message: chalk.italic.bold.magenta("Q2: What is the main purpose of TypeScript?"),
        choices: ["A) To add new features to JavaScript",
            "B) To improve code readability and maintainability",
            "C) To make JavaScript more concise",
            "D) To replace JavaScript"]
    },
    {
        name: "question3",
        type: "list",
        message: chalk.italic.bold.magenta("Q3: In typescript how can we make a property optional, which is the correct method?"),
        choices: ["name.optional", "name?", "(opional.name)", "name:string?"]
    },
    {
        name: "question4",
        type: "list",
        message: chalk.italic.bold.magenta("Q4: Which of the following method use to add the new value in last of the array"),
        choices: ["Unshift", "splice", "slice", "push"]
    },
    {
        name: "question5",
        type: "list",
        message: chalk.italic.bold.magenta("Q5: What is the output of following code? | let x = 5 | 5 === '5'"),
        choices: ["True", "False"]
    },
    {
        name: "question6",
        type: "list",
        message: chalk.italic.bold.magenta("Q6: JSON stand for:"),
        choices: ["Javascript object notation", "Java standard object notation", "JSON object notation", "Joint online notation"]
    }
]);
let score = 0;
switch (quiz.question1) {
    case "C) A superset of JavaScript":
        console.log(chalk.italic.bold.green("correct ✅"));
        ++score;
        break;
    default:
        console.log(chalk.italic.bold.red("incorrect ❌"));
}
switch (quiz.question2) {
    case "B) To improve code readability and maintainability":
        console.log(chalk.italic.bold.green("correct ✅"));
        ++score;
        break;
    default:
        console.log(chalk.italic.bold.red("incorrect ❌"));
}
switch (quiz.question3) {
    case "name?":
        console.log(chalk.italic.bold.green("correct ✅"));
        ++score;
        break;
    default:
        console.log(chalk.italic.bold.red("incorrect ❌"));
}
switch (quiz.question4) {
    case "push":
        console.log(chalk.italic.bold.green("correct ✅"));
        ++score;
        break;
    default:
        console.log(chalk.italic.bold.red("incorrect ❌"));
}
switch (quiz.question5) {
    case "False":
        console.log(chalk.italic.bold.green("correct ✅"));
        ++score;
        break;
    default:
        console.log(chalk.italic.bold.red("incorrect ❌"));
}
switch (quiz.question6) {
    case "Javascript object notation":
        console.log(chalk.italic.bold.green("correct ✅"));
        ++score;
        break;
    default:
        console.log(chalk.italic.bold.red("incorrect ❌"));
}
console.log(chalk.italic.underline.grey(`Score: ${score}`));
