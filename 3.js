const questions = [
    { question: "What is middleware in the context of ASP.NET Core?", options: ["A piece of hardware used for network communication", "A software component responsible for generating HTML pages", "C# classes that handle HTTP requests or responses", "A type of database management system"], correctAnswer: "C# classes that handle HTTP requests or responses" },
    { question: "What are some functions that middleware can perform in ASP.NET Core?", options: ["Generating HTML pages and API responses", "Logging each request and adding security headers to the response", "Compiling C# code and managing database connections", "Handling user authentication and managing session state"], correctAnswer: "Logging each request and adding security headers to the response" },
    { question: "What is the most important piece of middleware in most ASP.NET Core applications?", options: ["AuthenticationMiddleware", "LoggerMiddleware", "EndpointMiddleware", "RoutingMiddleware"], correctAnswer: "EndpointMiddleware" },
    { question: "What is the arrangement of middleware components called in ASP.NET Core?", options: ["Pipeline", "Assembly", "Bundle", "Stack"], correctAnswer: "Pipeline" },
    { question: "What are some common cross-cutting concerns that middleware can handle?", options: ["Generating dynamic HTML content", "Managing database transactions", "Logging each request and adding security headers to the response", "Handling user authentication and authorization"], correctAnswer: "Logging each request and adding security headers to the response" },
    { question: "What is the benefit of having highly focused middleware components in ASP.NET Core?", options: ["They make the application more complex", "They handle multiple concerns simultaneously", "They are easier to reason about and maintain", "They restrict the flexibility of the application"], correctAnswer: "They are easier to reason about and maintain" },
    { question: "How are multiple middleware components combined in ASP.NET Core?", options: ["By nesting them within each other", "By chaining them together in a sequence called a pipeline", "By merging their functionalities into a single component", "By grouping them into separate assemblies"], correctAnswer: "By chaining them together in a sequence called a pipeline" },
    { question: "What does each middleware component have access to in the ASP.NET Core pipeline?", options: ["Only the original request", "Only the final response", "Both the original request and any changes made by previous middleware", "Only the changes made by previous middleware"], correctAnswer: "Both the original request and any changes made by previous middleware" },
    { question: "What can middleware components do with the response in the ASP.NET Core pipeline?", options: ["They can only inspect the response", "They can modify the response before sending it to the user", "They cannot interact with the response", "They can only send the response back to the client"], correctAnswer: "They can modify the response before sending it to the user" },
    { question: "How does composing multiple middleware components benefit ASP.NET Core applications?", options: ["It increases application complexity", "It decreases application flexibility", "It allows for the creation of complex application behaviors from small, focused components", "It reduces the number of components required"], correctAnswer: "It allows for the creation of complex application behaviors from small, focused components" },
    { question: "What is the purpose of HTTP response status codes?", options: ["To indicate the size of the response body", "To specify the language of the response", "To provide information about the client's device", "To communicate the result of the request handling"], correctAnswer: "To communicate the result of the request handling" },
    { question: "What does a status code starting with \"2xx\" indicate?", options: ["Informational response", "Client error", "Redirection", "Success"], correctAnswer: "Success" },
    { question: "In which class of status codes would you find a response indicating that the browser must follow a provided link?", options: ["1xx", "2xx", "3xx", "4xx"], correctAnswer: "3xx" },
    { question: "What type of error is indicated by a status code starting with \"5xx\"?", options: ["Client error", "Success", "Server error", "Redirection"], correctAnswer: "Server error" },
    { question: "When might a browser automatically handle a 301 response?", options: ["When the request is successful", "When the client sends invalid data", "When the resource requested couldn't be found", "When the server encounters an error"], correctAnswer: "When the resource requested couldn't be found" },
    { question: "In ASP.NET Core, how is the design philosophy regarding features like error handling described?", options: ["Features are automatically enabled by default", "Features must be explicitly enabled", "Features are enabled based on user preferences", "Features are only available in the premium version"], correctAnswer: "Features must be explicitly enabled" },
    { question: "What is one common type of error that can occur in an application?", options: ["NullReferenceException", "AuthenticationFailureException", "IndexOutOfBoundsException", "SyntaxErrorException"], correctAnswer: "NullReferenceException" },
    { question: "What happens if an exception occurs in a middleware component in ASP.NET Core?", options: ["The exception is silently ignored", "The exception is logged and the application continues running", "The exception propagates up the middleware pipeline", "The application crashes immediately"], correctAnswer: "The exception propagates up the middleware pipeline" },
    { question: "What status code is typically returned to the user if an unhandled exception occurs in ASP.NET Core?", options: ["200", "404", "500", "301"], correctAnswer: "500" },
    { question: "How can you ensure graceful handling of errors in an ASP.NET Core application?", options: ["By ignoring all exceptions", "By explicitly enabling error handling features", "By crashing the application whenever an error occurs", "By relying on the web server to handle errors automatically"], correctAnswer: "By explicitly enabling error handling features" },
    { question: "What role does middleware play in ASP.NET Core?", options: ["Managing database connections", "Handling HTTP requests and responses", "Rendering HTML templates", "Managing user sessions"], correctAnswer: "Handling HTTP requests and responses" },
    { question: "How is middleware composed in ASP.NET Core?", options: ["In a stack", "In a queue", "In a pipeline", "In a loop"], correctAnswer: "In a pipeline" },
    { question: "What happens if a middleware short-circuits the pipeline?", options: ["All subsequent middleware will still execute", "None of the subsequent middleware will execute", "Only the response will be affected", "Only the request will be affected"], correctAnswer: "None of the subsequent middleware will execute" },
    { question: "What does StaticFileMiddleware do when added to a middleware pipeline?", options: ["It serves any requested files found in the application's database", "It renders HTML templates for static files", "It provides custom error handling messages", "It serves any requested files found in the wwwroot folder of the application"], correctAnswer: "It serves any requested files found in the wwwroot folder of the application" },
    { question: "When should DeveloperExceptionPageMiddleware be used?", options: ["In production", "In testing", "In development", "In staging"], correctAnswer: "In development" }
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