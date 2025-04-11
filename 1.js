const questions = [
    { question: "What is ASP.NET Core primarily used for?", options: ["Building mobile applications", "Creating desktop applications", "Building dynamic, server-side rendered applications and HTTP APIs", "None of the above"], correctAnswer: "Building dynamic, server-side rendered applications and HTTP APIs" },
    { question: "Which of the following is NOT a characteristic of ASP.NET Core?", options: ["Cross-platform", "Closed source", "Open source", "Web application framework"], correctAnswer: "Closed source" },
    { question: "What does ASP.NET Core provide to developers?", options: ["Ready-made applications", "Basic HTML templates", "Structure, helper functions, and a framework for building applications", "Hosting services"], correctAnswer: "Structure, helper functions, and a framework for building applications" },
    { question: "In ASP.NET Core, where does the business logic typically reside?", options: ["Directly within ASP.NET Core framework code", "In the HTML templates", "Within separate handlers that call methods in the application's business logic", "In the database"], correctAnswer: "Within separate handlers that call methods in the application's business logic" },
    { question: "What is one of the purposes of ASP.NET Core's business logic?", options: ["Directly interact with ASP.NET Core framework code", "Serve as a template engine", "Handle requests from the client", "Interact with other services such as databases or remote APIs"], correctAnswer: "Interact with other services such as databases or remote APIs" },
    { question: "Why might building a static web application without a web framework limit its capabilities?", options: ["It will consume more server resources", "It will be less secure", "It will require less coding effort", "It will lack features such as security and dynamism"], correctAnswer: "It will lack features such as security and dynamism" },
    { question: "What is one advantage of using ASP.NET Core for web development?", options: ["It requires extensive coding from scratch", "It doesn't support dynamic web pages", "It makes writing web applications faster, easier, and more secure", "It limits the ability to provide user authentication"], correctAnswer: "It makes writing web applications faster, easier, and more secure" },
    { question: "What is a common functionality provided by ASP.NET Core libraries?", options: ["Creating desktop applications", "Generating static web pages", "Logging requests made to a web app", "Handling server hardware management"], correctAnswer: "Logging requests made to a web app" },
    { question: "What is the key feature of a dynamic web page?", options: ["It displays static content only", "It relies heavily on client-side scripting", "It requires no user interaction", "It may display different data depending on factors like user login status"], correctAnswer: "It may display different data depending on factors like user login status" },
    { question: "Why are dynamic frameworks essential for websites like Amazon, eBay, and Stack Overflow?", options: ["They enhance server performance", "They simplify frontend development", "They provide advanced security features", "They enable personalized content and user authentication"], correctAnswer: "They enable personalized content and user authentication" },
    { question: "What were the main goals behind the development of ASP.NET Core?", options: ["To focus exclusively on Windows development", "To create a heavy and monolithic framework", "To achieve cross-platform compatibility, modular architecture, open-source development, and alignment with current web development trends", "To prioritize compatibility with legacy web technologies"], correctAnswer: "To achieve cross-platform compatibility, modular architecture, open-source development, and alignment with current web development trends" },
    { question: "What platform does ASP.NET Core run on?", options: ["Windows only", "Linux only", "macOS only", "Windows, Linux, and macOS"], correctAnswer: "Windows, Linux, and macOS" },
    { question: "What is the purpose of .NET 5.0 in relation to ASP.NET Core?", options: [".NET 5.0 is a successor to ASP.NET Core", ".NET 5.0 is a lightweight platform for building web applications", ".NET 5.0 provides a runtime and framework for ASP.NET Core to run cross-platform", ".NET 5.0 is not related to ASP.NET Core"], correctAnswer: ".NET 5.0 provides a runtime and framework for ASP.NET Core to run cross-platform" },
    { question: "How does .NET Core differ from .NET Framework?", options: [".NET Core is heavier and more complex than .NET Framework", ".NET Core implements more features than .NET Framework", ".NET Core is a fork of .NET Framework", ".NET Core is more modular and implements only a subset of the features of .NET Framework"], correctAnswer: ".NET Core is more modular and implements only a subset of the features of .NET Framework" },
    { question: "How does ASP.NET Core relate to console applications?", options: ["ASP.NET Core and console applications are entirely separate and unrelated", "Console applications are built on top of ASP.NET Core", "ASP.NET Core is an additional layer on top of console applications for converting them into web applications", "Console applications are a prerequisite for using ASP.NET Core"], correctAnswer: "ASP.NET Core is an additional layer on top of console applications for converting them into web applications" },
    { question: "What is Microsoft's recommendation regarding the use of ASP.NET Core for new .NET web development?", options: ["Microsoft advises against using ASP.NET Core for new projects", "Microsoft recommends using ASP.NET Core only for small-scale applications", "Microsoft recommends that all new .NET web development should use ASP.NET Core", "Microsoft suggests using ASP.NET Core only for legacy applications"], correctAnswer: "Microsoft recommends that all new .NET web development should use ASP.NET Core" },
    { question: "What is a consideration for developers or companies before switching to ASP.NET Core?", options: ["ASP.NET Core requires extensive prior knowledge of web development", "ASP.NET Core is not compatible with modern web development practices", "Switching to ASP.NET Core involves a significant learning curve and investment", "ASP.NET Core offers no advantages over other web development frameworks"], correctAnswer: "Switching to ASP.NET Core involves a significant learning curve and investment" },
    { question: "What topics are covered in the section discussing when to choose ASP.NET Core?", options: ["Basic syntax of ASP.NET Core", "The history of web development", "Building applications with ASP.NET Core", "What sort of applications you can build, highlights of ASP.NET Core, why to consider using it, and considerations for converting existing ASP.NET applications"], correctAnswer: "What sort of applications you can build, highlights of ASP.NET Core, why to consider using it, and considerations for converting existing ASP.NET applications" },
    { question: "What is one of the highlights of ASP.NET Core mentioned in the section?", options: ["Limited compatibility with third-party libraries", "Lack of support for cross-platform development", "Increased security features", "Easy integration with legacy ASP.NET applications"], correctAnswer: "Increased security features" },
    { question: "What does Microsoft's recommendation imply about the future of ASP.NET Core?", options: ["ASP.NET Core is likely to be deprecated soon", "ASP.NET Core will remain the primary web development framework for .NET", "ASP.NET Core will be replaced by another framework in the near future", "ASP.NET Core will become obsolete within a few years"], correctAnswer: "ASP.NET Core will remain the primary web development framework for .NET" },
    { question: "What is HTTP primarily used for?", options: ["Sending emails", "Transferring files between servers", "Powering the web through stateless request-response interactions", "Hosting websites"], correctAnswer: "Powering the web through stateless request-response interactions" },
    { question: "What does a typical HTTP request consist of?", options: ["Only a verb indicating the type of request", "Only a path indicating the resource to interact with", "Only headers indicating key-value pairs", "A verb indicating the type of request, a path indicating the resource to interact with, headers, and optionally a body"], correctAnswer: "A verb indicating the type of request, a path indicating the resource to interact with, headers, and optionally a body" },
    { question: "What information does an HTTP response contain?", options: ["Only the contents of the requested resource", "Only headers indicating key-value pairs", "Only a status code indicating whether the request was successful", "A status code indicating whether the request was successful, optionally headers, and optionally a body"], correctAnswer: "A status code indicating whether the request was successful, optionally headers, and optionally a body" },
    { question: "What is the term used for the \"type\" of request in an HTTP request?", options: ["Verb", "Noun", "Predicate", "Adjective"], correctAnswer: "Verb" },
    { question: "How does HTTP handle state?", options: ["It maintains session information between client and server", "It is a stateful protocol", "It is a stateless protocol", "It relies on cookies to maintain state"], correctAnswer: "It is a stateless protocol" },
    { question: "What is ASP.NET Core primarily recommended for?", options: ["Legacy projects", "Existing, well-established projects", "New, \"green-field\" projects", "Small-scale personal projects"], correctAnswer: "New, \"green-field\" projects" },
    { question: "Can legacy technologies such as WCF Server and Web Forms be used with ASP.NET Core?", options: ["Yes", "No", "Only with additional plugins", "It depends on the version of ASP.NET Core"], correctAnswer: "No" },
    { question: "What platform does ASP.NET Core run on?", options: [".NET Framework", ".NET Core only", ".NET 5.0 only", ".NET 5.0 with the Windows Compatibility Pack"], correctAnswer: ".NET 5.0 with the Windows Compatibility Pack" },
    { question: "What is .NET 5.0 in relation to .NET Core?", options: ["A separate framework from .NET Core", "A downgrade from .NET Core", "An earlier version of .NET Core", "The next version of .NET Core after .NET Core 3.1"], correctAnswer: "The next version of .NET Core after .NET Core 3.1" },
    { question: "How does ASP.NET Core handle fetching web pages?", options: ["It doesn't handle fetching web pages", "By directly fetching web pages from the server", "By sending an HTTP request and receiving an HTTP response", "By using JavaScript only"], correctAnswer: "By sending an HTTP request and receiving an HTTP response" }
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