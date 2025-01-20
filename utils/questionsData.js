


const questionsData = [
    {
        question: "What is the capital of France?",
        correctAnswer: "Paris",
        incorrectAnswers: ["London", "Berlin", "Madrid"],
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        correctAnswer: "William Shakespeare",
        incorrectAnswers: ["Charles Dickens", "Jane Austen", "Mark Twain"],
    },
    {
        question: "What is the chemical symbol for water?",
        correctAnswer: "H2O",
        incorrectAnswers: ["CO2", "O2", "NaCl"],
    },
    {
        question: "Which planet is known as the Red Planet?",
        correctAnswer: "Mars",
        incorrectAnswers: ["Jupiter", "Saturn", "Venus"],
    },
    {
        question: "What is the largest mammal in the world?",
        correctAnswer: "Blue Whale",
        incorrectAnswers: ["Elephant", "Giraffe", "Great White Shark"],
    },
    {
        question: "What is the currency of Japan?",
        correctAnswer: "Yen",
        incorrectAnswers: ["Won", "Dollar", "Euro"],
    },
    {
        question: "What is the boiling point of water at sea level?",
        correctAnswer: "100°C",
        incorrectAnswers: ["50°C", "212°C", "150°C"],
    },
    {
        question: "What year did the Titanic sink?",
        correctAnswer: "1912",
        incorrectAnswers: ["1905", "1918", "1920"],
    },
    {
        question: "What is the smallest prime number?",
        correctAnswer: "2",
        incorrectAnswers: ["1", "3", "0"],
    },
    {
        question: "Which gas do plants primarily use during photosynthesis?",
        correctAnswer: "Carbon Dioxide",
        incorrectAnswers: ["Oxygen", "Nitrogen", "Helium"],
    },
    {
        question: "What is the hardest natural substance on Earth?",
        correctAnswer: "Diamond",
        incorrectAnswers: ["Gold", "Iron", "Graphite"],
    },
    {
        question: "How many continents are there on Earth?",
        correctAnswer: "7",
        incorrectAnswers: ["5", "6", "8"],
    },
    {
        question: "Which organ is responsible for pumping blood in the human body?",
        correctAnswer: "Heart",
        incorrectAnswers: ["Liver", "Brain", "Lungs"],
    },
    {
        question: "What is the square root of 64?",
        correctAnswer: "8",
        incorrectAnswers: ["6", "7", "9"],
    },
    {
        question: "Who painted the Mona Lisa?",
        correctAnswer: "Leonardo da Vinci",
        incorrectAnswers: ["Michelangelo", "Raphael", "Van Gogh"],
    },
    {
        question: "What is the main ingredient in guacamole?",
        correctAnswer: "Avocado",
        incorrectAnswers: ["Tomato", "Onion", "Cucumber"],
    },
    {
        question: "What is the largest ocean on Earth?",
        correctAnswer: "Pacific Ocean",
        incorrectAnswers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    },
    {
        question: "Who was the first President of the United States?",
        correctAnswer: "George Washington",
        incorrectAnswers: ["Thomas Jefferson", "Abraham Lincoln", "John Adams"],
    },
    {
        question: "What is the capital city of Australia?",
        correctAnswer: "Canberra",
        incorrectAnswers: ["Sydney", "Melbourne", "Perth"],
    },
    {
        question: "What is the smallest planet in our solar system?",
        correctAnswer: "Mercury",
        incorrectAnswers: ["Mars", "Venus", "Pluto"],
    },
    {
        question: "What is the tallest mountain in the world?",
        correctAnswer: "Mount Everest",
        incorrectAnswers: ["K2", "Kilimanjaro", "Denali"],
    },
    {
        question: "Which element has the atomic number 1?",
        correctAnswer: "Hydrogen",
        incorrectAnswers: ["Oxygen", "Carbon", "Helium"],
    },
    {
        question: "What is the longest river in the world?",
        correctAnswer: "Nile",
        incorrectAnswers: ["Amazon", "Yangtze", "Mississippi"],
    },
    {
        question: "What is the capital of Italy?",
        correctAnswer: "Rome",
        incorrectAnswers: ["Venice", "Milan", "Florence"],
    },
    {
        question: "Who discovered penicillin?",
        correctAnswer: "Alexander Fleming",
        incorrectAnswers: ["Marie Curie", "Isaac Newton", "Albert Einstein"],
    },
    {
        question: "What is the freezing point of water in Fahrenheit?",
        correctAnswer: "32°F",
        incorrectAnswers: ["0°F", "100°F", "212°F"],
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        correctAnswer: "Japan",
        incorrectAnswers: ["China", "Thailand", "South Korea"],
    },
    {
        question: "What is the main language spoken in Brazil?",
        correctAnswer: "Portuguese",
        incorrectAnswers: ["Spanish", "English", "French"],
    },
    {
        question: "Who wrote 'Pride and Prejudice'?",
        correctAnswer: "Jane Austen",
        incorrectAnswers: ["Charlotte Bronte", "Emily Dickinson", "Virginia Woolf"],
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        correctAnswer: "Brazil",
        incorrectAnswers: ["China", "United Kingdom", "Japan"],
    },
    {
        question: "What is the most abundant gas in the Earth's atmosphere?",
        correctAnswer: "Nitrogen",
        incorrectAnswers: ["Oxygen", "Carbon Dioxide", "Argon"],
    },
    {
        question: "Who painted the ceiling of the Sistine Chapel?",
        correctAnswer: "Michelangelo",
        incorrectAnswers: ["Leonardo da Vinci", "Raphael", "Donatello"],
    },
    {
        question: "What is the capital of Canada?",
        correctAnswer: "Ottawa",
        incorrectAnswers: ["Toronto", "Vancouver", "Montreal"],
    },
    {
        question: "What is the most spoken language in the world?",
        correctAnswer: "Mandarin Chinese",
        incorrectAnswers: ["English", "Spanish", "Hindi"],
    },
    {
        question: "What is the national flower of Japan?",
        correctAnswer: "Cherry Blossom",
        incorrectAnswers: ["Lotus", "Rose", "Tulip"],
    },
    {
        question: "Which planet is closest to the Sun?",
        correctAnswer: "Mercury",
        incorrectAnswers: ["Venus", "Earth", "Mars"],
    },
    {
        question: "How many bones are in the human body?",
        correctAnswer: "206",
        incorrectAnswers: ["205", "210", "215"],
    },
    {
        question: "What is the chemical symbol for gold?",
        correctAnswer: "Au",
        incorrectAnswers: ["Ag", "Fe", "Pb"],
    },
    {
        question: "Which U.S. state is known as the Sunshine State?",
        correctAnswer: "Florida",
        incorrectAnswers: ["California", "Texas", "Arizona"],
    },
    {
        question: "What is the largest desert in the world?",
        correctAnswer: "Sahara",
        incorrectAnswers: ["Gobi", "Arctic", "Antarctic"],
    },
    {
        question: "What is the national animal of Canada?",
        correctAnswer: "Beaver",
        incorrectAnswers: ["Moose", "Bear", "Eagle"],
    },
    {
        question: "What is the capital of Germany?",
        correctAnswer: "Berlin",
        incorrectAnswers: ["Munich", "Frankfurt", "Hamburg"],
    },
    {
        question: "Who invented the telephone?",
        correctAnswer: "Alexander Graham Bell",
        incorrectAnswers: ["Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    },
    {
        question: "What is the name of the longest bone in the human body?",
        correctAnswer: "Femur",
        incorrectAnswers: ["Tibia", "Fibula", "Humerus"],
    },
    {
        question: "In which year was the Theory of General Relativity published?",
        correctAnswer: "1915",
        incorrectAnswers: ["1905", "1921", "1898"],
    },
];


export default questionsData;