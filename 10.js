const questions = [
    {
        question: "What is dependency injection (DI) commonly referred to as in ASP.NET Core?",
        options: [
            "Dependency Inversion",
            "Dependency Management",
            "Dependency Resolution",
            "Dependency Isolation"
        ],
        correctAnswer: "Dependency Inversion"
    },
    {
        question: "Which software engineering principles does ASP.NET Core adhere to, making DI a core concept?",
        options: [
            "SOLID",
            "Agile",
            "Waterfall",
            "RAD"
        ],
        correctAnswer: "SOLID"
    },
    {
        question: "What is another term often used interchangeably with dependency injection?",
        options: [
            "Dependency Association",
            "Dependency Provisioning",
            "Inversion of Control (IoC)",
            "Dependency Aggregation"
        ],
        correctAnswer: "Inversion of Control (IoC)"
    },
    {
        question: "Which book is recommended for a more in-depth understanding of dependency injection in C#?",
        options: [
            '"The Pragmatic Programmer" by Andrew Hunt and David Thomas',
            '"Clean Code" by Robert C. Martin',
            '"Dependency Injection Principles, Practices, and Patterns" by Steven van Deursen and Mark Seemann',
            '"Design Patterns: Elements of Reusable Object-Oriented Software" by Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides'
        ],
        correctAnswer: '"Dependency Injection Principles, Practices, and Patterns" by Steven van Deursen and Mark Seemann'
    },
    {
        question: "What benefit does dependency injection provide in terms of managing class dependencies?",
        options: [
            "It eliminates the need for class dependencies altogether.",
            "It centralizes the management of class dependencies.",
            "It automatically resolves class dependencies at runtime.",
            "It increases the number of class dependencies in the application."
        ],
        correctAnswer: "It centralizes the management of class dependencies"
    },
    {
        question: "Which software engineering principle emphasizes the importance of decoupling dependencies between classes?",
        options: [
            "DRY (Don't Repeat Yourself)",
            "YAGNI (You Ain't Gonna Need It)",
            "KISS (Keep It Simple, Stupid)",
            "DIP (Dependency Inversion Principle)"
        ],
        correctAnswer: "DIP (Dependency Inversion Principle)"
    },
    {
        question: "What benefits does dependency injection provide beyond managing class dependencies?",
        options: [
            "Increased code complexity",
            "Improved testability and maintainability",
            "Decreased modularity",
            "Reduced scalability"
        ],
        correctAnswer: "Improved testability and maintainability"
    },
    {
        question: "In which part of the ASP.NET Core framework is dependency injection integrated?",
        options: [
            "At the presentation layer",
            "Within the data access layer",
            "At the heart of the framework",
            "Within the security layer"
        ],
        correctAnswer: "At the heart of the framework"
    },
    {
        question: "What is the primary purpose of dependency injection in ASP.NET Core?",
        options: [
            "To increase the complexity of the application",
            "To minimize modularity and flexibility",
            "To improve the performance of the application",
            "To promote loose coupling and enhance maintainability"
        ],
        correctAnswer: "To promote loose coupling and enhance maintainability"
    },
    {
        question: "Which article is recommended for a deeper understanding of dependency injection by Martin Fowler?",
        options: [
            '"Refactoring: Improving the Design of Existing Code"',
            '"Continuous Integration"',
            '"Inversion of Control Containers and the Dependency Injection pattern"',
            '"Patterns of Enterprise Application Architecture"'
        ],
        correctAnswer: '"Inversion of Control Containers and the Dependency Injection pattern"'
    },
    {
        question: "What does coupling refer to in object-oriented programming?",
        options: [
            "The relationship between classes and methods",
            "The degree of interaction between different classes",
            "The size of the codebase",
            "The inheritance hierarchy of classes"
        ],
        correctAnswer: "The degree of interaction between different classes"
    },
    {
        question: "What is the impact of tight coupling between classes?",
        options: [
            "Improved testability",
            "Reduced flexibility and maintainability",
            "Enhanced scalability",
            "Simplified codebase"
        ],
        correctAnswer: "Reduced flexibility and maintainability"
    },
    {
        question: "In the context of dependency injection, what does it mean for code to be loosely coupled?",
        options: [
            "The codebase is small and concise",
            "Classes depend on specific implementations rather than abstractions",
            "Classes do not need to know many details about other components to use them",
            "The codebase relies heavily on inheritance"
        ],
        correctAnswer: "Classes do not need to know many details about other components to use them"
    },
    {
        question: "How does injecting dependencies via the constructor help reduce coupling?",
        options: [
            "It increases the complexity of the system",
            "It reduces the need for unit testing",
            "It eliminates the need for dependencies altogether",
            "It removes the responsibility of creating dependencies from the class, making it more flexible and easier to test"
        ],
        correctAnswer: "It removes the responsibility of creating dependencies from the class, making it more flexible and easier to test"
    },
    {
        question: "What is the advantage of coding to interfaces in reducing coupling?",
        options: [
            "It limits the functionality of classes",
            "It simplifies the codebase",
            "It ties classes to a single implementation",
            "It allows for interchangeable implementations, making classes more flexible and testable"
        ],
        correctAnswer: "It allows for interchangeable implementations, making classes more flexible and testable"
    },
    {
        question: "What does the 'transient' lifetime mean in dependency injection?",
        options: [
            "The service instance remains the same throughout the application's lifetime",
            "A new instance of the service is created for each request or usage",
            "The service instance is shared across different scopes",
            "The service instance is cached indefinitely"
        ],
        correctAnswer: "A new instance of the service is created for each request or usage"
    },
    {
        question: "In ASP.NET Core, which lifetime corresponds to a service being scoped to a web request?",
        options: [
            "Transient",
            "Scoped",
            "Singleton",
            "Request"
        ],
        correctAnswer: "Scoped"
    },
    {
        question: "What happens to a service with a 'singleton' lifetime?",
        options: [
            "A new instance is created for each request",
            "The service instance is shared across different scopes",
            "A new instance is created for each usage",
            "The same instance is returned for every request throughout the application's lifetime"
        ],
        correctAnswer: "The same instance is returned for every request throughout the application's lifetime"
    },
    {
        question: "What is configuration in the context of ASP.NET Core applications?",
        options: [
            "It refers to the internal parameters used by the application to control its behavior.",
            "It consists only of settings and does not include secrets.",
            "Configuration is the set of external parameters provided to an application that controls its behavior.",
            "Configuration is used only during development and not during deployment."
        ],
        correctAnswer: "Configuration is the set of external parameters provided to an application that controls its behavior"
    },
    {
        question: "What is the purpose of storing settings and secrets outside of compiled code in ASP.NET Core applications?",
        options: [
            "It simplifies the development process.",
            "It improves code organization.",
            "It enables easy tweaking of values without recompiling the code.",
            "It prevents unauthorized access to sensitive data."
        ],
        correctAnswer: "It enables easy tweaking of values without recompiling the code"
    },
    {
        question: "Why is it considered a security best practice to externalize secret values like API keys or passwords in ASP.NET Core applications?",
        options: [
            "Hardcoding secrets into code makes it easier to access them.",
            "Externalizing secrets helps in source control management.",
            "Embedding secrets in compiled code can make them publicly available.",
            "Secrets stored in code are more secure than external storage."
        ],
        correctAnswer: "Embedding secrets in compiled code can make them publicly available"
    },
    {
        question: "Which of the following are built-in configuration providers in ASP.NET Core?",
        options: [
            "YAML files",
            "JSON files",
            "CSV files",
            "Markdown files"
        ],
        correctAnswer: "JSON files"
    },
    {
        question: "How can you load configuration data from environment variables in ASP.NET Core?",
        options: [
            "By directly accessing the environment variable from code",
            "By specifying the environment variable name in the configuration file",
            "By using the built-in configuration provider for environment variables",
            "By creating a custom provider specifically for environment variables"
        ],
        correctAnswer: "By using the built-in configuration provider for environment variables"
    },
    {
        question: "What is a potential solution if the built-in configuration providers in ASP.NET Core do not meet your requirements?",
        options: [
            "Writing custom configuration classes",
            "Using third-party libraries from GitHub and NuGet",
            "Using YAML files instead of JSON or XML",
            "Modifying the ASP.NET Core framework"
        ],
        correctAnswer: "Using third-party libraries from GitHub and NuGet"
    },
    {
        question: "What is a key advantage of using configuration and settings in ASP.NET Core?",
        options: [
            "Improved security measures",
            "Automatic compilation of the application",
            "Ability to edit settings without recompiling or restarting the application",
            "Enhanced logging capabilities"
        ],
        correctAnswer: "Ability to edit settings without recompiling or restarting the application"
    },
    {
        question: "In ASP.NET Core, what is the benefit of being able to change configuration at runtime?",
        options: [
            "It reduces the verbosity of log entries",
            "It allows for automatic compilation of the application",
            "It enables easier debugging by adjusting logging levels",
            "It improves security measures"
        ],
        correctAnswer: "It enables easier debugging by adjusting logging levels"
    },
    {
        question: "When does ASP.NET Core support reloading of configuration files?",
        options: [
            "Only for environment variable-based configuration",
            "Only for User Secrets provider-based configuration",
            "Only for file-based configuration providers",
            "For all types of configuration providers"
        ],
        correctAnswer: "Only for file-based configuration providers"
    },
    {
        question: "What is the preferred way of accessing configuration in ASP.NET Core?",
        options: [
            "Using IConfiguration abstraction directly",
            "Accessing configuration using string keys",
            "Utilizing strongly typed configuration and the Options pattern",
            "Employing IConfigurationBuilder for configuration access"
        ],
        correctAnswer: "Utilizing strongly typed configuration and the Options pattern"
    },
    {
        question: "What are the advantages of using strongly typed settings in ASP.NET Core?",
        options: [
            "Reduced verbosity and increased readability",
            "Enhanced security measures",
            "Simplified testing and avoidance of typos",
            "Better performance optimization"
        ],
        correctAnswer: "Simplified testing and avoidance of typos"
    },
    {
        question: "How are strongly typed settings typically represented in ASP.NET Core?",
        options: [
            "As complex JSON objects",
            "As IConfiguration instances",
            "As simple POCO objects",
            "As IConfigurationSection instances"
        ],
        correctAnswer: "As simple POCO objects"
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