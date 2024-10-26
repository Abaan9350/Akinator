// Get elements
const questionElement = document.getElementById("question");
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const resultElement = document.getElementById("result");
const endGameOptions = document.getElementById("end-game-options");
const playAgainButton = document.getElementById("play-again-button");
const exitButton = document.getElementById("exit-button");

// Character variable
let character = "";
let currentQuestion = {};

// Questions and decisions structured as a tree
const questions = {
    question: "Is your character a boy?",
    yes: {
        question: "Does he wear spectacles?",
        yes: {
            question: "Does he get scolded in class frequently?",
            yes: {
                question: "Does he usually wear shirts?",
                yes: {
                    question: "Does he invest in the stock market?",
                    yes: {
                        question: "Does he have a cat?",
                        yes: "Raihan",
                        no: "Ganesh"
                    },
                    no: {
                        question: "Good at driving? (lol)",
                        yes: "Vedant Shetty",
                        no: {
                            question: "Does he live in Nerul?",
                            yes: {
                                question: "Chamdi No. 1?",
                                yes: "Aditya Chaskar",
                                no: "Akshar Pawar"
                            },
                            no: "Akshar Pawar"
                        }
                    }
                }
            },
            no: {
                question: "Does he get scolded in class usually?",
                yes: {
                    question: "Does he wear shirts frequently?",
                    yes: {
                        question: "Does he have a beard?",
                        yes: {
                            question: "Kashmir?",
                            yes: "Aditya Dogra",
                            no: {
                                question: "Is he into Video editing?",
                                yes: "Amruthesh",
                                no: "Sohail"
                            }
                        },
                        no: {
                            question: "Fufu?",
                            yes: "Danny",
                            no: "Nangare"
                        }
                    },
                    no: {
                        question: "Is he good at football?",
                        yes: {
                            question: "Is he known for his hair?",
                            yes: "Aryan",
                            no: "Unknown"
                        },
                        no: "Unknown"
                    }
                },
                no: {
                    question: "Does he have good ball knowledge?",
                    yes: {
                        question: "Does he help everyone with assignments?",
                        yes: "Sameer",
                        no: {
                            question: "Does he have a beard?",
                            yes: "Sai",
                            no: "Atharva"
                        }
                    },
                    no: {
                        question: "Does he usually wear shirts?",
                        yes: {
                            question: "Is he good in academics?",
                            yes: {
                                question: "Is he in the college Drama team?",
                                yes: "Sujit Asari",
                                no: {
                                    question: "Interest in camera?",
                                    yes: {
                                        question: "Kerala?",
                                        yes: "Amruthesh",
                                        no: "Unknown"
                                    }
                                }
                            },
                            no: {
                                question: "Niggeshwar?",
                                yes: "Tarun",
                                no: "Aditya Venkat"
                            }
                        },
                        no: {
                            question: "Is he involved in any college clubs?",
                            yes: {
                                question: "Is he south Indian?",
                                yes: "Aditya Venkat",
                                no: "Unknown"
                            },
                            no: {
                                question: "Does he have a pet cat?",
                                yes: "Fareen",
                                no: {
                                    question: "Is he good in academics?",
                                    yes: {
                                        question: "Helps Everyone With Her Notes?",
                                        yes: "Pratiksha",
                                        no: "Anannya"
                                    },
                                    no: "Alina"
                                }
                            }
                        }
                    }
                }
            }
        },
        no: {
            question: "Does she wear spectacles?",
            yes: {
                question: "Is she in any college clubs?",
                yes: {
                    question: "Does she go to the gym?",
                    yes: "Kavya",
                    no: {
                        question: "Is she good in academics?",
                        yes: {
                            question: "Extrovert?",
                            yes: {
                                question: "Good in singing?",
                                yes: {
                                    question: "Is she in the college choir team?",
                                    yes: "Janaki",
                                    no: "Vedshri"
                                },
                                no: "Vedshri"
                            },
                            no: {
                                question: "Is she in the college choir team?",
                                yes: "Janaki",
                                no: "Vedshri"
                            }
                        },
                        no: {
                            question: "Khopoli?",
                            yes: "Ketki",
                            no: {
                                question: "Gujju?",
                                yes: "Hirtika",
                                no: "Bhavika"
                            }
                        }
                    }
                },
                no: {
                    question: "Is she good in academics?",
                    yes: {
                        question: "Khopoli?",
                        yes: "Ketki",
                        no: "Aastha"
                    },
                    no: {
                        question: "Gujju?",
                        yes: "Hirtika",
                        no: "Bhavika"
                    }
                }
            },
            no: {
                question: "Is she in any college clubs?",
                yes: {
                    question: "Is she known for singing?",
                    yes: {
                        question: "Is she good in academics?",
                        yes: {
                            question: "Extrovert?",
                            yes: "Shruti",
                            no: "Unknown"
                        }
                    },
                    no: "Archi"
                },
                no: {
                    question: "Does she have a pet cat?",
                    yes: "Fareen",
                    no: {
                        question: "Is she good in academics?",
                        yes: {
                            question: "Helps Everyone With Her Notes?",
                            yes: "Pratiksha",
                            no: "Anannya"
                        },
                        no: "Alina"
                    }
                }
            }
        }
    },
    no: {
        question: "Does she wear spectacles?",
        yes: {
            question: "Is she in any college clubs?",
            yes: {
                question: "Does she go to the gym?",
                yes: "Kavya",
                no: {
                    question: "Is she good in academics?",
                    yes: {
                        question: "Extrovert?",
                        yes: {
                            question: "Good in singing?",
                            yes: {
                                question: "Is she in the college choir team?",
                                yes: "Janaki",
                                no: "Vedshri"
                            },
                            no: "Vedshri"
                        },
                        no: {
                            question: "Is she in the college choir team?",
                            yes: "Janaki",
                            no: "Vedshri"
                        }
                    },
                    no: {
                        question: "Khopoli?",
                        yes: "Ketki",
                        no: {
                            question: "Gujju?",
                            yes: "Hirtika",
                            no: "Bhavika"
                        }
                    }
                }
            },
            no: {
                question: "Is she good in academics?",
                yes: {
                    question: "Khopoli?",
                    yes: "Ketki",
                    no: "Aastha"
                },
                no: {
                    question: "Gujju?",
                    yes: "Hirtika",
                    no: "Bhavika"
                }
            }
        },
        no: {
            question: "Is she in any college clubs?",
            yes: {
                question: "Is she known for singing?",
                yes: {
                    question: "Is she good in academics?",
                    yes: {
                        question: "Extrovert?",
                        yes: "Shruti",
                        no: "Unknown"
                    }
                },
                no: "Archi"
            },
            no: {
                question: "Does she have a pet cat?",
                yes: "Fareen",
                no: {
                    question: "Is she good in academics?",
                    yes: {
                        question: "Helps Everyone With Her Notes?",
                        yes: "Pratiksha",
                        no: "Anannya"
                    },
                    no: "Alina"
                }
            }
        }
    }
};

// Initialize the first question
function startGame() {
    currentQuestion = questions;
    endGameOptions.classList.add("hidden");
    resultElement.classList.add("hidden");
    questionElement.classList.remove("hidden");
    updateQuestion(currentQuestion);
}

// Update the question based on the current question
function updateQuestion(current) {
    if (typeof current === 'string') {
        showResult(`You are thinking of ${current}!`);
    } else {
        questionElement.textContent = current.question;
    }
}

// Handle answer and move to the next question
function answerQuestion(answer) {
    if (answer === 'yes') {
        if (currentQuestion.yes) {
            currentQuestion = currentQuestion.yes;
            updateQuestion(currentQuestion);
        } else {
            showResult(`You are thinking of ${currentQuestion.yes}!`);
        }
    } else {
        if (currentQuestion.no) {
            currentQuestion = currentQuestion.no;
            updateQuestion(currentQuestion);
        } else {
            showResult(`You are thinking of ${currentQuestion.no}!`);
        }
    }
}

// Show result and end game
function showResult(text) {
    questionElement.classList.add("hidden");
    resultElement.textContent = text;
    resultElement.classList.remove("hidden");
    endGameOptions.classList.remove("hidden");
}

// Restart game
function playAgain() {
    startGame();
}

// Exit game
function exitGame() {
    resultElement.classList.add("hidden");
    endGameOptions.classList.add("hidden");
    questionElement.classList.add("hidden");
}

// Event listeners
yesButton.addEventListener("click", () => answerQuestion('yes'));
noButton.addEventListener("click", () => answerQuestion('no'));
playAgainButton.addEventListener("click", playAgain);
exitButton.addEventListener("click", exitGame);

// Start the game when the page loads
startGame();
