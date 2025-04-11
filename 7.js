const questions = [
    { 
        question: "What is the recommended approach for generating HTML responses in ASP.NET Core?", 
        options: [
            "Generating HTML directly in page handlers", 
            "Using middleware to generate HTML responses", 
            "Utilizing Razor views to generate HTML", 
            "Sending raw HTML strings as responses"
        ], 
        correctAnswer: "Utilizing Razor views to generate HTML" 
    },
    { 
        question: "Why is it discouraged to directly generate HTML strings in page handlers?", 
        options: [
            "It leads to better separation of concerns", 
            "It simplifies the development process", 
            "It improves performance", 
            "It provides more control over HTML rendering"
        ], 
        correctAnswer: "It leads to better separation of concerns" 
    },
    { 
        question: "What advantage do Razor views offer over directly generating HTML in page handlers?", 
        options: [
            "They provide access to a wider variety of features", 
            "They offer faster rendering performance", 
            "They allow for easier debugging", 
            "They reduce the amount of code needed"
        ], 
        correctAnswer: "They provide access to a wider variety of features" 
    },
    { 
        question: "When might it be acceptable to generate HTML responses without using a view?", 
        options: [
            "When building complex web applications", 
            "When generating static content", 
            "When working with dynamic data", 
            "When handling form submissions"
        ], 
        correctAnswer: "When generating static content" 
    },
    { 
        question: "What is the recommended approach for passing data from a page handler to its associated Razor view in ASP.NET Core?", 
        options: [
            "HttpContext", 
            "ViewData", 
            "@inject services", 
            "PageModel properties"
        ], 
        correctAnswer: "PageModel properties" 
    },
    { 
        question: "When might you consider using ViewData to pass data to a Razor view?", 
        options: [
            "When you need to access services in the view", 
            "When you need to pass data to _layout files", 
            "When you want to expose data as properties on the PageModel", 
            "When you want to utilize dependency injection"
        ], 
        correctAnswer: "When you need to pass data to _layout files" 
    },
    { 
        question: "Why is using HttpContext to pass data between a page handler and a Razor view discouraged?", 
        options: [
            "It leads to better separation of concerns", 
            "It provides limited flexibility in data passing", 
            "It may cause performance issues", 
            "It is not supported in Razor views"
        ], 
        correctAnswer: "It provides limited flexibility in data passing" 
    },
    { 
        question: "What is the purpose of using @inject services in a Razor view?", 
        options: [
            "To access HttpContext properties", 
            "To pass data between the page handler and the view", 
            "To expose data as properties on the PageModel", 
            "To make services available in the view through dependency injection"
        ], 
        correctAnswer: "To make services available in the view through dependency injection" 
    },
    { 
        question: "What is the purpose of the _ViewStart.cshtml file in ASP.NET Core?", 
        options: [
            "It contains directives that are inserted at the top of every view.", 
            "It defines child actions for rendering discrete sections of a layout.", 
            "It replaces the need for adding layout code redundantly in every view.", 
            "It is used to invoke controller actions from within a view."
        ], 
        correctAnswer: "It replaces the need for adding layout code redundantly in every view." 
    },
    { 
        question: "In ASP.NET Core, what has replaced child actions for rendering complex layout sections?", 
        options: [
            "Partial views", 
            "View models", 
            "View components", 
            "Layout components"
        ], 
        correctAnswer: "View components" 
    },
    { 
        question: "What does the _ViewImports.cshtml file contain in ASP.NET Core?", 
        options: [
            "Layout definitions for every view", 
            "Code for rendering complex layout sections", 
            "Directives inserted at the top of every view", 
            "Child actions invoked from within views"
        ], 
        correctAnswer: "Directives inserted at the top of every view" 
    },
    { 
        question: "How does using _ViewImports.cshtml help in managing common tasks in Razor views?", 
        options: [
            "It defines child actions for rendering complex layout sections.", 
            "It provides a mechanism to insert layout code in every view.", 
            "It includes directives that need to be added to every view, reducing redundancy.", 
            "It replaces the need for view components in rendering HTML."
        ], 
        correctAnswer: "It includes directives that need to be added to every view, reducing redundancy." 
    }
];


    let currentQuestionIndex = 0;
    let score = 0;

    function loadQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        $('#question-text').text(currentQuestion.question);
        $('#options-container').empty();
        currentQuestion.options.forEach(option => {
            const optionButton = $('<button>').text(option).click(() => checkAnswer(option));
            $('#options-container').append(optionButton);
        });
        if (currentQuestionIndex === questions.length - 1) {
            $('#next-button').hide();
            $('#submit-button').show();
        } else {
            $('#next-button').show();
            $('#submit-button').hide();
        }
    }

    function checkAnswer(selectedOption) {
        const currentQuestion = questions[currentQuestionIndex];
        $('#options-container button').attr('disabled', true);
        if (selectedOption === currentQuestion.correctAnswer) {
            score++;
            $('#options-container button').each(function () {
                if ($(this).text() === currentQuestion.correctAnswer) {
                    $(this).addClass('correct');
                }
            });
        } else {
            $('#options-container button').each(function () {
                if ($(this).text() === selectedOption) {
                    $(this).addClass('wrong');
                } else if ($(this).text() === currentQuestion.correctAnswer) {
                    $(this).addClass('correct');
                }
            });
        }
    }

    $('#next-button').click(function () {
        currentQuestionIndex++;
        loadQuestion();
    });

    $('#submit-button').click(function () {
        $('#score').text(`Your score is: ${score} out of ${questions.length}`);
        $('#next-button').hide();
        $('#submit-button').hide();
    });

    loadQuestion();