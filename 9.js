const questions = [
    { question: "What is a Web API?", options: ["A framework for building server-side web applications.", "A programming language for client-side scripting.", "A set of rules and protocols for exchanging data between web applications.", "An interface for controlling web browsers."], correctAnswer: "A set of rules and protocols for exchanging data between web applications." },
    { question: "When should you use a Web API?", options: ["When you need to generate HTML with Razor templates.", "When you want to build a single-page application (SPA) using client-side frameworks.", "When you need to handle requests by returning HTML to the user.", "When you need to exchange data between different web applications or services."], correctAnswer: "When you need to exchange data between different web applications or services." },
    { question: "What distinguishes a Web API from traditional web applications?", options: ["Web APIs use client-side frameworks like Angular, React, and Vue.", "Web APIs return HTML directly to the user's web browser.", "Web APIs rely on server-side rendering of HTML with Razor templates.", "Web APIs exchange data using standardized protocols and formats, rather than returning HTML."], correctAnswer: "Web APIs exchange data using standardized protocols and formats, rather than returning HTML." },
    { question: "What was the purpose of the ASP.NET Web API framework?", options: ["To generate HTML for web applications.", "To create HTTP endpoints for returning formatted JSON or XML.", "To build single-page applications using client-side frameworks.", "To handle routing and request processing for MVC applications."], correctAnswer: "To create HTTP endpoints for returning formatted JSON or XML." },
    { question: "How did the ASP.NET Web API framework relate to the MVC framework?", options: ["They were completely separate and couldn't interoperate.", "They shared the same underlying web stack and could seamlessly integrate.", "Web API was a subset of the MVC framework.", "MVC framework was deprecated in favor of the Web API framework."], correctAnswer: "They were completely separate and couldn't interoperate." },
    { question: "What did the ASP.NET Web API framework primarily return in response to requests?", options: ["HTML pages.", "JavaScript files.", "Formatted JSON or XML.", "CSS stylesheets."], correctAnswer: "Formatted JSON or XML." },
    { question: "What was the purpose of the ASP.NET Web API framework?", options: ["To generate HTML for web applications.", "To create HTTP endpoints for returning formatted JSON or XML.", "To build single-page applications using client-side frameworks.", "To handle routing and request processing for MVC applications."], correctAnswer: "To create HTTP endpoints for returning formatted JSON or XML." },
    { question: "How did the ASP.NET Web API framework relate to the MVC framework?", options: ["They were completely separate and couldn't interoperate.", "They shared the same underlying web stack and could seamlessly integrate.", "Web API was a subset of the MVC framework.", "MVC framework was deprecated in favor of the Web API framework."], correctAnswer: "They were completely separate and couldn't interoperate." },
    { question: "What did the ASP.NET Web API framework primarily return in response to requests?", options: ["HTML pages.", "JavaScript files.", "Formatted JSON or XML.", "CSS stylesheets."], correctAnswer: "Formatted JSON or XML." },
    { question: "What is attribute routing used for in ASP.NET Core?", options: ["Generating HTML views for web applications.", "Associating API controller actions with specific route templates.", "Defining routing middleware in the middleware pipeline.", "Mapping incoming requests to Razor Pages."], correctAnswer: "Associating API controller actions with specific route templates." },
    { question: "How do you specify route templates for API controller actions with attribute routing?", options: ["Using the @page directive.", "Using conventional routing.", "By decorating each action method with an attribute.", "By specifying routing middleware in the pipeline."], correctAnswer: "By decorating each action method with an attribute." },
    { question: "What is the alternative to attribute routing for API controllers?", options: ["Conventional routing.", "Razor Pages routing.", "Middleware routing.", "Dependency injection routing."], correctAnswer: "Conventional routing." },
    { question: "What is the purpose of the [ApiController] attribute in ASP.NET Core?", options: ["It defines route templates for API controllers.", "It specifies middleware for routing requests.", "It reduces the amount of code needed to create consistent Web API controllers.", "It configures dependency injection for API controller actions."], correctAnswer: "It reduces the amount of code needed to create consistent Web API controllers." },
    { question: "When was the [ApiController] attribute introduced in .NET Core?", options: [".NET Core 1.0", ".NET Core 2.0", ".NET Core 2.1", ".NET Core 3.0"], correctAnswer: ".NET Core 2.1" },
    { question: "What does the [ApiController] attribute do for Web API controllers?", options: ["It adds authentication to API endpoints.", "It enforces HTTPS for API requests.", "It automatically applies common conventions, such as model validation and response formatting.", "It generates HTML views for API responses."], correctAnswer: "It automatically applies common conventions, such as model validation and response formatting." },
    { question: "What is content negotiation in the context of ASP.NET Core?", options: ["It refers to negotiating the terms of data transmission between the server and the client.", "It involves negotiating the pricing of content served by the server.", "It refers to negotiating the layout of web pages with CSS.", "It involves negotiating access rights to content based on user authentication."], correctAnswer: "It refers to negotiating the terms of data transmission between the server and the client." },
    { question: "What HTTP status code does ASP.NET Core return by default when a null API model is returned from an action method?", options: ["200 OK", "204 No Content", "400 Bad Request", "404 Not Found"], correctAnswer: "204 No Content" },
    { question: "How does ASP.NET Core format the response when a string is returned as the API model and no Accept header is set?", options: ["JSON", "XML", "Plain text", "HTML"], correctAnswer: "Plain text" }
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
