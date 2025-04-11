const questions = [
    { question: "What is the purpose of Razor Pages in ASP.NET Core?", options: ["To build single-page applications (SPAs)", "To provide a streamlined experience for building server-side rendered websites", "To handle database operations", "To manage client-side interactions"], correctAnswer: "To provide a streamlined experience for building server-side rendered websites" },
    { question: "How does a page-based website differ from other types of applications?", options: ["It heavily relies on client-side interactions", "It is not interactive", "It consists of multiple pages and forms for user interaction", "It does not involve browsing between pages"], correctAnswer: "It consists of multiple pages and forms for user interaction" },
    { question: "Which version of ASP.NET Core introduced the Razor Pages programming model?", options: ["ASP.NET Core 1.0", "ASP.NET Core 2.0", "ASP.NET Core 3.0", "ASP.NET Core 4.0"], correctAnswer: "ASP.NET Core 2.0" },
    { question: "How does Razor Pages utilize conventions to reduce boilerplate code?", options: ["By eliminating the need for HTML", "By providing built-in database management", "By automatically generating JavaScript code", "By simplifying routing and page structure"], correctAnswer: "By simplifying routing and page structure" },
    { question: "What will you understand by the end of the section on Razor Pages?", options: ["How to build single-page applications", "The MVC design pattern", "The overall design of Razor Pages and their relation to the MVC pattern", "How to manage client-side interactions"], correctAnswer: "The overall design of Razor Pages and their relation to the MVC pattern" },
    { question: "What is the primary goal of the MVC design pattern?", options: ["To focus solely on graphical user interface (GUI) apps", "To separate the management and manipulation of data from its visual representation", "To eliminate the need for data manipulation", "To simplify the visual representation of data"], correctAnswer: "To separate the management and manipulation of data from its visual representation" },
    { question: "What does the MVC pattern aim to achieve for applications with UIs?", options: ["Combine data management with visual representation", "Provide a single model for data and visual elements", "Separate concerns related to data, presentation, and user interaction", "Minimize user interaction in favor of automated processes"], correctAnswer: "Separate concerns related to data, presentation, and user interaction" },
    { question: "Which type of applications was the original MVC pattern primarily designed for?", options: ["Web applications", "Command-line applications", "Graphical user interface (GUI) apps", "Mobile applications"], correctAnswer: "Graphical user interface (GUI) apps" },
    { question: "How does the MVC pattern handle requests in an application?", options: ["By combining data management with visual representation", "By separating request handling into distinct components", "By directly manipulating the visual elements of the application", "By focusing solely on data manipulation"], correctAnswer: "By separating request handling into distinct components" },
    { question: "What aspect of the MVC pattern helps in generating the final response to a request?", options: ["The data management component", "The visual representation component", "The separation of concerns", "The integration with GUI environments"], correctAnswer: "The separation of concerns" },
    { question: "Which design pattern is commonly associated with Razor Pages in ASP.NET Core?", options: ["Model-View-Controller (MVC)", "Model-View-View-Model (MVVM)", "Model-View-Presenter (MVP)", "Model-View-Adapter (MVA)"], correctAnswer: "Model-View-Controller (MVC)" },
    { question: "How does the MVVM pattern differ from the MVC pattern?", options: ["MVVM involves bidirectional interaction between the view and the model, while MVC focuses on unidirectional flow of data.", "MVC relies on two-way data binding, whereas MVVM does not.", "MVVM separates the view from the controller, while MVC does not.", "MVC emphasizes encapsulating business logic in the view model, unlike MVVM."], correctAnswer: "MVVM involves bidirectional interaction between the view and the model, while MVC focuses on unidirectional flow of data." },
    { question: "What is a characteristic feature of MVVM?", options: ["Two-way data binding between view and model", "Direct manipulation of the view by the controller", "Encapsulation of data access logic in the view", "Unidirectional flow of data from model to view"], correctAnswer: "Two-way data binding between view and model" },
    { question: "Why does the author of the text disagree with describing Razor Pages as MVVM?", options: ["Because Razor Pages are primarily used for desktop applications, not web applications", "Because Razor Pages lack bidirectional interaction between the view and the PageModel", "Because Razor Pages are based on the ASP.NET Core MVC framework and follow MVC principles", "Because Razor Pages do not involve any interaction between the view and the model"], correctAnswer: "Because Razor Pages are based on the ASP.NET Core MVC framework and follow MVC principles" },
    { question: "In which scenarios is MVVM commonly used?", options: ["In server-side web development", "In mobile and desktop applications", "In low-level system programming", "In network protocol design"], correctAnswer: "In mobile and desktop applications" },
    { question: "In which scenario is it recommended to use MVC controllers instead of Razor Pages in ASP.NET Core?", options: ["When building page-based server-side rendered applications", "When developing a mobile application", "When rendering views is not required, such as for Web APIs", "When transitioning from an existing Razor Pages application"], correctAnswer: "When rendering views is not required, such as for Web APIs" },
    { question: "What is a practical reason for not converting existing MVC controllers to Razor Pages?", options: ["Razor Pages offer better performance compared to MVC controllers", "Converting MVC controllers to Razor Pages requires extensive refactoring", "Razor Pages lack support for partial page updates", "MVC controllers provide better support for client-side JavaScript"], correctAnswer: "Converting MVC controllers to Razor Pages requires extensive refactoring" },
    { question: "When might it be easier to achieve partial page updates using MVC controllers instead of Razor Pages?", options: ["When developing a single-page application (SPA)", "When using Web Forms for server-side rendering", "When building page-based server-side rendered applications", "When doing a lot of partial page updates with JavaScript"], correctAnswer: "When doing a lot of partial page updates with JavaScript" },
    { question: "Which development approach is most suitable for building a Web API in ASP.NET Core?", options: ["MVC controllers", "Razor Pages", "Blazor components", "Web Forms"], correctAnswer: "MVC controllers" },
    { question: "In which scenario is it recommended to use Razor Pages instead of MVC controllers?", options: ["When building a Web API", "When transitioning from an existing MVC application to ASP.NET Core", "When doing a lot of partial page updates with JavaScript", "When rendering views for page-based applications"], correctAnswer: "When rendering views for page-based applications" },
    { question: "Which IActionResult type would you use to generate an HTML view for a given Razor view when using MVC controllers?", options: ["PageResult", "ViewResult", "RedirectToPageResult", "RedirectResult"], correctAnswer: "ViewResult" },
    { question: "Which IActionResult type would you use to send a 302 HTTP redirect response to automatically send a user to another page in Razor Pages?", options: ["RedirectToPageResult", "RedirectResult", "FileResult", "ContentResult"], correctAnswer: "RedirectToPageResult" },
    { question: "When would you use RedirectToPageResult over RedirectResult?", options: ["When you need to return a file as the response", "When you need to send a 404 HTTP status code", "When you want to automatically send a user to another page in Razor Pages", "When you want to send a user to a specified URL"], correctAnswer: "When you want to automatically send a user to another page in Razor Pages" },
    { question: "Which IActionResult type would you use to return a file as the response?", options: ["RedirectToPageResult", "RedirectResult", "FileResult", "ContentResult"], correctAnswer: "FileResult" },
    { question: "What does StatusCodeResult IActionResult type do?", options: ["Generates an HTML view for an associated page in Razor Pages", "Returns a provided string as the response", "Sends a raw HTTP status code as the response", "Sends a raw 404 HTTP status code as the response"], correctAnswer: "Sends a raw HTTP status code as the response" }
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