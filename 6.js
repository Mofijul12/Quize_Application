const questions = [
    { 
        question: "What is the purpose of model binding in ASP.NET Core?", 
        options: [
            "To create HTTP requests from .NET objects", 
            "To extract values from a request and create .NET objects", 
            "To serialize .NET objects into JSON responses", 
            "To validate user input in Razor Pages"
        ], 
        correctAnswer: "To extract values from a request and create .NET objects" 
    },
    { 
        question: "How are objects created for method parameters in page handlers or properties in PageModel in Razor Pages?", 
        options: [
            "By directly instantiating them in the code", 
            "Through two-way data binding", 
            "Using model binding", 
            "By manually parsing the request body"
        ], 
        correctAnswer: "Using model binding" 
    },
    { 
        question: "What does the model binder do in ASP.NET Core?", 
        options: [
            "Validates user input before creating .NET objects", 
            "Converts .NET objects into strings for HTTP requests", 
            "Extracts values from a request and assigns them to .NET objects", 
            "Generates random data to populate .NET objects"
        ], 
        correctAnswer: "Extracts values from a request and assigns them to .NET objects" 
    },
    { 
        question: "Which attribute is used to mark properties in PageModel for model binding?", 
        options: [
            "[BindData]", 
            "[ModelProperty]", 
            "[BindObject]", 
            "[BindProperty]"
        ], 
        correctAnswer: "[BindProperty]" 
    },
    { 
        question: "Is model binding in ASP.NET Core Razor Pages a one-way or two-way process?", 
        options: [
            "One-way", 
            "Two-way", 
            "Bidirectional", 
            "Non-directional"
        ], 
        correctAnswer: "One-way" 
    },
    { 
        question: "What is the purpose of using a nested class like InputModel for model binding in ASP.NET Core Razor Pages?", 
        options: [
            "To simplify the routing configuration", 
            "To handle multiple model bindings in a single class", 
            "To optimize the performance of Razor Pages", 
            "To enable two-way data binding in Razor Pages"
        ], 
        correctAnswer: "To handle multiple model bindings in a single class" 
    },
    { 
        question: "Which attribute is typically used to mark properties for model binding in ASP.NET Core Razor Pages?", 
        options: [
            "[BindObject]", 
            "[ModelProperty]", 
            "[BindProperty]", 
            "[BindModel]"
        ], 
        correctAnswer: "[BindProperty]" 
    },
    { 
        question: "What advantage does using a nested class like InputModel offer in ASP.NET Core Razor Pages?", 
        options: [
            "It allows for bidirectional data binding", 
            "It simplifies routing configuration", 
            "It centralizes all model bindings in one class", 
            "It improves the security of Razor Pages"
        ], 
        correctAnswer: "It centralizes all model bindings in one class" 
    },
    { 
        question: "In the provided example, where does the product model reside in the Razor Page's structure?", 
        options: [
            "It is directly within the IndexModel class", 
            "It is within the InputModel class", 
            "It is within the OnGet() method", 
            "It is outside the IndexModel class"
        ], 
        correctAnswer: "It is within the InputModel class" 
    },
    { 
        question: "What is the advantage of binding complex types in ASP.NET Core Razor Pages?", 
        options: [
            "It simplifies the routing configuration", 
            "It improves the security of the application", 
            "It reduces the clutter in method signatures", 
            "It enhances the performance of the Razor Pages"
        ], 
        correctAnswer: "It reduces the clutter in method signatures" 
    },
    { 
        question: "Why might using multiple method parameters for data binding become cumbersome?", 
        options: [
            "It increases the risk of data loss during binding", 
            "It makes the code less readable and maintainable", 
            "It improves the flexibility of the application", 
            "It simplifies the debugging process"
        ], 
        correctAnswer: "It makes the code less readable and maintainable" 
    },
    { 
        question: "What approach is suggested for handling many method parameters in ASP.NET Core Razor Pages?", 
        options: [
            "Using attribute-based binding", 
            "Using routing templates", 
            "Binding to complex objects", 
            "Using global convention-based routing"
        ], 
        correctAnswer: "Binding to complex objects" 
    },
    { 
        question: "How does binding to complex objects help in managing changing requirements?", 
        options: [
            "It allows for direct conversion of string parameters", 
            "It simplifies the process of adding new parameters", 
            "It restricts the types of parameters that can be used", 
            "It increases the complexity of the method signature"
        ], 
        correctAnswer: "It simplifies the process of adding new parameters" 
    },
    { 
        question: "What is the purpose of DataAnnotations attributes in ASP.NET Core Razor Pages?", 
        options: [
            "They provide data for model binding", 
            "They control the routing configuration", 
            "They specify the rules for model validation", 
            "They handle exception handling in the application"
        ], 
        correctAnswer: "They specify the rules for model validation" 
    },
    { 
        question: "How do DataAnnotations attributes contribute to model validation?", 
        options: [
            "By directly validating the user input", 
            "By providing metadata about the binding model", 
            "By mapping URLs to page handlers", 
            "By handling routing logic"
        ], 
        correctAnswer: "By directly validating the user input" 
    },
    { 
        question: "What can be achieved by applying DataAnnotations attributes to binding models?", 
        options: [
            "Data encryption", 
            "User authentication", 
            "Data validation rules", 
            "Database queries"
        ], 
        correctAnswer: "Data validation rules" 
    },
    { 
        question: "In which scenario might DataAnnotations attributes be useful?", 
        options: [
            "Managing middleware pipelines", 
            "Configuring routing templates", 
            "Validating user input on a form", 
            "Handling HTTP response status codes"
        ], 
        correctAnswer: "Validating user input on a form" 
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