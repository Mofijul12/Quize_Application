const questions = [
    {
        question: "What is the primary purpose of the filter pipeline in ASP.NET Core?",
        options: [
            "To handle network requests",
            "To manage database transactions",
            "To provide hooks into the request processing lifecycle",
            "To parse JSON payloads"
        ],
        correctAnswer: "To provide hooks into the request processing lifecycle"
    },
    {
        question: "How do filters differ from middleware in ASP.NET Core?",
        options: [
            "Filters are executed before middleware",
            "Middleware is executed before filters",
            "Filters are specific to MVC, while middleware can be used across different ASP.NET Core frameworks",
            "Middleware and filters are interchangeable terms"
        ],
        correctAnswer: "Filters are specific to MVC, while middleware can be used across different ASP.NET Core frameworks"
    },
    {
        question: "What is an example scenario where filters are commonly used?",
        options: [
            "Handling database queries",
            "Authenticating users",
            "Generating HTML templates",
            "Parsing request payloads"
        ],
        correctAnswer: "Authenticating users"
    },
    {
        question: "How many types of filters are there in ASP.NET Core?",
        options: [
            "Three",
            "Four",
            "Five",
            "Six"
        ],
        correctAnswer: "Six"
    },
    {
        question: "Which of the following is NOT a type of filter in ASP.NET Core?",
        options: [
            "Action filters",
            "Result filters",
            "Model filters",
            "Exception filters"
        ],
        correctAnswer: "Model filters"
    },
    {
        question: "When might you use an action filter?",
        options: [
            "To modify the response body before sending it to the client",
            "To handle exceptions thrown during action execution",
            "To perform validation on incoming request data",
            "To execute custom logic before or after an action method"
        ],
        correctAnswer: "To execute custom logic before or after an action method"
    },
    {
        question: "How can you control the order in which filters are executed?",
        options: [
            "By setting their priority in the ConfigureServices method",
            "By setting their priority in the Configure method",
            "By decorating them with the [Order] attribute",
            "By configuring them in the Startup class"
        ],
        correctAnswer: "By decorating them with the [Order] attribute"
    },
    {
        question: "Which type of filter is primarily used for protecting APIs and action methods by determining if a request is authorized?",
        options: [
            "Resource filters",
            "Action filters",
            "Authorization filters",
            "Exception filters"
        ],
        correctAnswer: "Authorization filters"
    },
    {
        question: "When do resource filters typically execute in the filter pipeline?",
        options: [
            "After action filters",
            "Before authorization filters",
            "Before and after action methods",
            "At the beginning and end of the pipeline"
        ],
        correctAnswer: "At the beginning and end of the pipeline"
    },
    {
        question: "What can action filters manipulate before an action method executes?",
        options: [
            "The incoming request body",
            "The action method's return type",
            "The arguments to the method",
            "The URL routing parameters"
        ],
        correctAnswer: "The arguments to the method"
    },
    {
        question: "When do exception filters come into play in the filter pipeline?",
        options: [
            "Before authorization filters",
            "After action filters",
            "After resource filters",
            "When an exception occurs in the filter pipeline"
        ],
        correctAnswer: "When an exception occurs in the filter pipeline"
    },
    {
        question: "How do result filters differ from action filters?",
        options: [
            "Result filters only run after an action method's execution",
            "Result filters can only manipulate the action result's return type",
            "Result filters run both before and after an action method's execution",
            "Result filters are primarily used for handling authorization logic"
        ],
        correctAnswer: "Result filters run both before and after an action method's execution"
    },
    {
        question: "When do page filters execute in the Razor Pages filter pipeline?",
        options: [
            "Before model binding",
            "After page handler execution",
            "Only after model binding and validation",
            "Three times during different stages of the pipeline"
        ],
        correctAnswer: "Three times during different stages of the pipeline"
    },
    {
        question: "What happens after the first execution of a page filter in the Razor Pages filter pipeline?",
        options: [
            "Page handler execution",
            "Model binding and validation",
            "Customization of the page handler's result",
            "Short-circuiting the pipeline"
        ],
        correctAnswer: "Model binding and validation"
    },
    {
        question: "In the Razor Pages filter pipeline, when does the third execution of a page filter occur?",
        options: [
            "After page handler selection",
            "Before model binding",
            "After model binding and validation",
            "After page handler execution"
        ],
        correctAnswer: "After page handler execution"
    },
    {
        question: "How do page filters differ from action filters in the MVC filter pipeline?",
        options: [
            "Page filters execute only once in the pipeline",
            "Page filters are executed after action filters",
            "Page filters have triple execution, whereas action filters execute only once",
            "Page filters cannot manipulate model-bound data"
        ],
        correctAnswer: "Page filters have triple execution, whereas action filters execute only once"
    },
    {
        question: "Which interface should you implement to create an authorization filter in ASP.NET Core?",
        options: [
            "IAuthorizationFilter",
            "IAsyncAuthorizationFilter",
            "IFilter",
            "IAuthorizationAsyncFilter"
        ],
        correctAnswer: "IAuthorizationFilter"
    },
    {
        question: "What interface should you implement to develop a resource filter asynchronously?",
        options: [
            "IAsyncFilter",
            "IResourceFilter",
            "IAsyncResultFilter",
            "IAsyncResourceFilter"
        ],
        correctAnswer: "IAsyncResourceFilter"
    },
    {
        question: "Which interface is suitable for creating action filters that execute synchronously?",
        options: [
            "IFilter",
            "IActionFilter",
            "IAsyncFilter",
            "IAsyncActionFilter"
        ],
        correctAnswer: "IActionFilter"
    },
    {
        question: "If you need to develop an exception filter that works asynchronously, which interface should you implement?",
        options: [
            "IAsyncExceptionFilter",
            "IExceptionFilter",
            "IFilter",
            "IAsyncResultFilter"
        ],
        correctAnswer: "IAsyncExceptionFilter"
    },
    {
        question: "What is the primary purpose of creating custom filters in ASP.NET Core?",
        options: [
            "To replace built-in filters with custom implementations",
            "To enhance the security features of the application",
            "To handle specific requirements unique to the application",
            "To reduce the overall complexity of the application"
        ],
        correctAnswer: "To handle specific requirements unique to the application"
    },
    {
        question: "When should you consider creating custom filters?",
        options: [
            "When built-in filters cover all the required functionalities",
            "When there is a need to streamline the application's codebase",
            "When certain functionalities cannot be achieved using built-in filters",
            "When performance optimization is the primary concern"
        ],
        correctAnswer: "When certain functionalities cannot be achieved using built-in filters"
    },
    {
        question: "Which section of the application's architecture often benefits the most from the implementation of custom filters?",
        options: [
            "Data access layer",
            "Presentation layer",
            "Business logic layer",
            "Service layer"
        ],
        correctAnswer: "Presentation layer"
    },
    {
        question: "In what scenario might you create a custom filter for an ASP.NET Core Web API?",
        options: [
            "When handling user authentication and authorization",
            "When implementing cross-cutting concerns such as logging",
            "When defining specific data validation rules for incoming requests",
            "When optimizing database queries for improved performance"
        ],
        correctAnswer: "When defining specific data validation rules for incoming requests"
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