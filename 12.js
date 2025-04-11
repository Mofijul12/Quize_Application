const questions = [
    {
        question: "What problem does Entity Framework Core (EF Core) aim to solve?",
        options: [
            "Handling network connections",
            "Writing SQL statements",
            "Mapping database responses to .NET classes",
            "Managing variable result data"
        ],
        correctAnswer: "Mapping database responses to .NET classes"
    },
    {
        question: "Which term best describes EF Core's role in database access?",
        options: [
            "Query builder",
            "Object-relational mapper (ORM)",
            "Database connector",
            "SQL interpreter"
        ],
        correctAnswer: "Object-relational mapper (ORM)"
    },
    {
        question: "What distinguishes EF Core from the existing Entity Framework libraries?",
        options: [
            "It provides cross-platform support only",
            "It is based on ADO.NET",
            "It offers highly performant database access",
            "It focuses solely on NoSQL databases"
        ],
        correctAnswer: "It offers highly performant database access"
    },
    {
        question: "Which type of databases can EF Core interact with?",
        options: [
            "Only relational databases",
            "Only NoSQL databases",
            "Both relational and NoSQL databases",
            "Only in-memory databases"
        ],
        correctAnswer: "Only relational databases"
    },
    {
        question: "What feature of EF Core allows for creating temporary databases for testing purposes?",
        options: [
            "Database providers",
            "Entity Framework libraries",
            "Object-relational mapping",
            "In-memory feature"
        ],
        correctAnswer: "In-memory feature"
    },
    {
        question: "What is the primary goal of EF Core?",
        options: [
            "To handle network connections efficiently",
            "To provide cross-platform database access",
            "To implement a wide range of NoSQL databases",
            "To map database responses to Java classes"
        ],
        correctAnswer: "To provide cross-platform database access"
    },
    {
        question: "What type of model does EF Core use for database access?",
        options: [
            "Structural model",
            "Provider model",
            "Relational model",
            "Object-oriented model"
        ],
        correctAnswer: "Provider model"
    },
    {
        question: "What is the benefit of EF Core's provider model?",
        options: [
            "It limits database access to Microsoft SQL Server only",
            "It enables support for various relational databases",
            "It restricts the use of SQL queries",
            "It eliminates the need for database mapping"
        ],
        correctAnswer: "It enables support for various relational databases"
    },
    {
        question: "Which version of .NET Core introduced EF Core?",
        options: [
            "1.x",
            "2.x",
            "3.x",
            "5.x"
        ],
        correctAnswer: "2.x"
    },
    {
        question: "What is the primary motivation behind EF Core's development?",
        options: [
            "To provide low-level database access",
            "To promote SQL query building",
            "To improve performance and cross-platform support",
            "To replace ADO.NET libraries"
        ],
        correctAnswer: "To improve performance and cross-platform support"
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