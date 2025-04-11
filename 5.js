const questions = [
    { question: "What is routing in ASP.NET Core?", options: ["The process of generating HTML views for Razor Pages", "Mapping an incoming request to a method that will handle it", "Handling cross-cutting concerns such as logging and error handling", "Extracting data from a request's URL"], correctAnswer: "Mapping an incoming request to a method that will handle it" },
    { question: "How does routing contribute to controlling the URLs exposed in an application?", options: ["By defining the behavior of the application's middleware pipeline", "By automatically extracting data from a request's URL", "By mapping incoming requests to specific handlers", "By enabling powerful features like logging and error handling"], correctAnswer: "By mapping incoming requests to specific handlers" },
    { question: "Which middleware in ASP.NET Core is typically used to handle requests by invoking page handlers on Razor Pages or action methods on MVC controllers?", options: ["EndpointMiddleware", "StaticFileMiddleware", "DeveloperExceptionPageMiddleware", "StatusCodePagesMiddleware"], correctAnswer: "EndpointMiddleware" },
    { question: "What is the purpose of routing in ASP.NET Core?", options: ["To define the structure of middleware pipelines", "To generate HTML views for Razor Pages", "To map incoming requests to appropriate handlers", "To handle cross-cutting concerns like logging and error handling"], correctAnswer: "To map incoming requests to appropriate handlers" },
    { question: "What is endpoint routing in ASP.NET Core?", options: ["A routing system restricted to Razor Pages only", "A new routing system introduced in ASP.NET Core 3.0 that decouples routing from the MVC infrastructure", "A routing middleware specifically designed for handling MVC requests", "A convention-based routing system introduced in ASP.NET Core 2.0"], correctAnswer: "A new routing system introduced in ASP.NET Core 3.0 that decouples routing from the MVC infrastructure" },
    { question: "What were some limitations of routing in ASP.NET Core 2.0 and 2.1?", options: ["Restricted routing to MVC infrastructure only", "Limited cross-cutting concerns like authorization to MVC components", "Required the use of convention-based routing exclusively", "Excluded endpoint routing as a routing option"], correctAnswer: "Limited cross-cutting concerns like authorization to MVC components" },
    { question: "How does endpoint routing differ from previous routing systems in ASP.NET Core?", options: ["It restricts routing to MVC infrastructure", "It eliminates the need for convention-based routing", "It allows other middleware in the application to use routing", "It removes attribute routing support"], correctAnswer: "It allows other middleware in the application to use routing" },
    { question: "What are the two types of routing available in ASP.NET Core?", options: ["MVC routing and Razor routing", "Convention-based routing and attribute routing", "Endpoint routing and middleware routing", "Razor Pages routing and Web API routing"], correctAnswer: "Convention-based routing and attribute routing" },
    { question: "What is convention-based routing in ASP.NET Core?", options: ["A routing approach that ties specific URLs to endpoints using attributes", "A routing approach that defines URL-endpoint mappings globally for the application", "A routing approach that relies on explicit attribute declarations on controller actions", "A routing approach that is exclusively used for building Web APIs"], correctAnswer: "A routing approach that defines URL-endpoint mappings globally for the application" },
    { question: "How does attribute routing differ from convention-based routing?", options: ["Attribute routing is more verbose and requires applying attributes to every action method", "Attribute routing is a convention-based approach for mapping URLs to endpoints", "Attribute routing allows for greater flexibility by explicitly defining URLs for each action method", "Attribute routing is restricted to Web API development only"], correctAnswer: "Attribute routing allows for greater flexibility by explicitly defining URLs for each action method" },
    { question: "Which routing approach is commonly used for building HTML-based websites with MVC controllers?", options: ["Attribute routing", "Convention-based routing", "Endpoint routing", "Attribute-based routing"], correctAnswer: "Convention-based routing" },
    { question: "In convention-based routing, how are endpoints mapped to URLs?", options: ["By explicitly defining URLs for each action method", "By placing [Route] attributes on action methods", "By globally defining routing conventions for the application", "By relying on the built-in routing conventions of ASP.NET Core"], correctAnswer: "By globally defining routing conventions for the application" },
    { question: "What is a downside of convention-based routing compared to attribute routing?", options: ["It requires applying attributes to every action method", "It provides less flexibility in customizing URLs for specific controllers and actions", "It is more verbose and complex to implement", "It is restricted to Web API development"], correctAnswer: "It provides less flexibility in customizing URLs for specific controllers and actions" },
    { question: "What is the purpose of generating URLs dynamically at runtime in ASP.NET Core?", options: ["To hardcode URLs for better performance", "To ensure URLs remain static and unchanged even if pages are renamed", "To dynamically adjust URLs based on changes in the application's routing infrastructure", "To manually manage links within the application"], correctAnswer: "To dynamically adjust URLs based on changes in the application's routing infrastructure" },
    { question: "Why is manually managing hardcoded URLs within an application not recommended?", options: ["It ensures better performance and faster response times", "It eliminates the need for the routing infrastructure", "It can lead to broken links and 404 errors when pages are renamed or URLs change", "It simplifies the development process by avoiding URL generation"], correctAnswer: "It can lead to broken links and 404 errors when pages are renamed or URLs change" },
    { question: "What happens to URLs when a Razor Page is renamed in ASP.NET Core?", options: ["They remain unchanged", "They are automatically updated to reflect the new page name", "They become broken and inaccessible", "They need to be manually updated in the application code"], correctAnswer: "They are automatically updated to reflect the new page name" },
    { question: "How does URL generation in ASP.NET Core relate to the routing process?", options: ["URL generation reverses the routing process by matching route templates to URLs", "URL generation is unrelated to the routing process", "URL generation and routing process are identical", "URL generation dynamically adjusts route templates based on URLs"], correctAnswer: "URL generation reverses the routing process by matching route templates to URLs" },
    { question: "What is the benefit of using URL generation in ASP.NET Core?", options: ["It simplifies the routing process", "It ensures URLs remain hardcoded and unchanged", "It frees developers from manually managing links and avoids broken URLs", "It improves application performance by caching URLs"], correctAnswer: "It frees developers from manually managing links and avoids broken URLs" }
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