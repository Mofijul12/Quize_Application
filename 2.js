const questions = [
    { question: "What is the purpose of the \"dotnet restore\" command?", options: ["Compiling the application", "Running the application", "Ensuring NuGet dependencies are copied to the project folder", "Generating project files"], correctAnswer: "Ensuring NuGet dependencies are copied to the project folder" },
    { question: "Where are dependencies of ASP.NET Core projects listed?", options: ["In a separate text file", "In the project's source code", "In the project's .csproj file", "In a configuration file"], correctAnswer: "In the project's .csproj file" },
    { question: "What happens during the \"dotnet build\" command?", options: ["NuGet packages are restored", "The application is run", "Any errors in the application are checked", "NuGet packages are downloaded"], correctAnswer: "Any errors in the application are checked" },
    { question: "When might it be useful to run \"dotnet restore\" explicitly?", options: ["Before writing code for the application", "After running \"dotnet build\"", "In continuous-integration build pipelines", "Only when using Visual Studio"], correctAnswer: "In continuous-integration build pipelines" },
    { question: "How can you view the full list of available commands for the .NET CLI?", options: ["Run \"dotnet --all\"", "Run \"dotnet list\"", "Run \"dotnet --help\"", "Run \"dotnet commands\""], correctAnswer: "Run \"dotnet --help\"" },
    { question: "What is the main responsibility of the Startup class in an ASP.NET Core application?", options: ["Handling HTTP requests", "Managing database connections", "Configuring service registration and middleware", "Generating HTML templates"], correctAnswer: "Configuring service registration and middleware" },
    { question: "What is service registration in the context of the Startup class?", options: ["Registering users for the application", "Configuring endpoint routes", "Registering classes that provide functionality for the application", "Configuring database migrations"], correctAnswer: "Registering classes that provide functionality for the application" },
    { question: "Where is service registration typically configured in the Startup class?", options: ["In the ConfigureServices method", "In the ConfigureEndpoints method", "In the Configure method", "In the ConfigureMiddleware method"], correctAnswer: "In the ConfigureServices method" },
    { question: "What is middleware configuration in the context of the Startup class?", options: ["Configuring authentication and authorization policies", "Registering service dependencies", "Handling and responding to HTTP requests", "Configuring database connections"], correctAnswer: "Handling and responding to HTTP requests" },
    { question: "In which method of the Startup class is middleware configuration typically performed?", options: ["ConfigureServices", "ConfigureEndpoints", "ConfigureServices", "Configure"], correctAnswer: "Configure" }
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