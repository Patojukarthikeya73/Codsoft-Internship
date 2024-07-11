
const Quiz=require('./models/quiz');
const DbConnect=require('./DBconn/connection');
DbConnect();
const quizData=[
    // 1st Quiz Card --> will have title, category, description, quiz,
    {
        category: "math",
        image: "https://img.freepik.com/premium-vector/open-book-icons-mathematics_74440-842.jpg",
        title: "Mathematics",
        description: " It  is the study of numbers and how they are related to each other and to the real world.",
        quiz: [
            //1st question and options
            {

                question: `What is the value of (3 \ times(4+2))?`,
                options: [
                    { option: "24", isCorrect: true },
                    { option: "18", isCorrect: false },
                    { option: "30", isCorrect: false },
                    { option: "15", isCorrect: false }
                ]
            },
             //2nd question and options
            {
                
                question: "solve for value of (3^4)?",
                options: [
                    {  option: "64", isCorrect: false },
                    {  option: "81", isCorrect: true },
                    {  option: "27", isCorrect: false },
                    {  option: "12", isCorrect: false }
                ]
            },
             //3rd question and options
            {
                
                question: "Solve x in the equation 3x-7=2?",
                options: [
                    {  option: "4", isCorrect: false },
                    {  option: "2", isCorrect: false },
                    {  option: "3", isCorrect: true },
                    {  option: "0", isCorrect: false }
                ]
            }, 
             //4th question and options
            {
                
                question: "What is the product of the prime factors of 24?",
                options: [
                    {  option: "18", isCorrect: false },
                    {  option: "6", isCorrect: false },
                    {  option: "12", isCorrect: false },
                    {  option: "24", isCorrect: true }
                ]
            },
            {
                
                question: "If the ratio of boys to girls in a class is 3:2 and there are 15boys,how many girls are there?",
                options: [
                    {  option: "8", isCorrect: false },
                    {  option: "10", isCorrect: true },
                    {  option: "12", isCorrect: false },
                    {  option: "5", isCorrect: false }
                ]
            },
            {
                
                question: "What is area of triangle with base 6 units and heigth 8 units?",
                options: [
                    {  option: "14 squnits", isCorrect: false },
                    {  option: "30 squnits", isCorrect: false },
                    {  option: "24 squnits", isCorrect: true },
                    {  option: "28 squnits", isCorrect: false }
                ]
            },
            {
                
                question: "The sum of two consecutive even integers is 46. What are the integers?",
                options: [
                    {  option: "22,24", isCorrect: false },
                    {  option: "20 22", isCorrect: false },
                    {  option: "24,26", isCorrect: true },
                    {  option: "28 30", isCorrect: false }
                ]
            },
            {
                
                question: "If a triangle has angles of 30°, 60°, and 90°, what type of triangle is it?",
                options: [
                    {  option: "Equilateral", isCorrect: false },
                    {  option: "Isosceles", isCorrect: false },
                    {  option: "Scalene", isCorrect: false },
                    {  option: "Right", isCorrect: true }
                ]
            },
            {
                
                question: "If the sum of two angles is 90°, and one angle is 35°, what is the measure of the other angle?",
                options: [
                    {  option: "45", isCorrect: false },
                    {  option: "55", isCorrect: true },
                    {  option: "65", isCorrect: false },
                    {  option: "85", isCorrect: false }
                ]
            },
            {
                
                question: "If a circle has a radius of 6 units, what is its circumference?",
                options: [
                    {  option: "12π units", isCorrect: false },
                    {  option: "18π units", isCorrect: false },
                    {  option: "24π units", isCorrect: true },
                    {  option: "36π units", isCorrect: false }
                ]
            },
        ]
    },
    //2nd quiz
    {
        category: "physics",
        image: "https://cdn3.vectorstock.com/i/1000x1000/66/77/physics-round-blue-science-and-education-vector-21096677.jpg",
        title: "Physics",
        description: "It the structure of matter and how the fundamental constituents of the universe interact.",
        quiz: [
            {
                
                question: "Which of the following is a vector quantity?",
                options: [
                    {  option: "mass", isCorrect: false },
                    {  option: "speed", isCorrect: false },
                    {  option: "distance", isCorrect: false },
                    {  option: "force", isCorrect: true }
                ]
            },
            {
            
                question: "What is the SI unit of electric current?",
                options: [
                    { option: "watt", isCorrect: false },
                    { option: "newton", isCorrect: false },
                    { option: "ampere", isCorrect: true },
                    { option: "joule", isCorrect: false }
                ]
            },
            {
                
                question: "Which of the following is a form of energy associated with motion?",
                options: [
                    {  option: "Potential Energy", isCorrect: false },
                    {  option: "Chemical Energy", isCorrect: false },
                    {  option: "Mechanical Energy", isCorrect: false },
                    {  option: "Kinetic Energy", isCorrect: true }
                ]
            },
            {
            
                question: "Which of the following is an example of a longitudinal wave?",
                options: [
                    { option: "light wave", isCorrect: false },
                    { option: "sound wave", isCorrect: true },
                    { option: "radio wave", isCorrect: false },
                    { option: "X-ray", isCorrect: false }
                ]
            },
            {
            
                question: "What is the speed of light in a vacuum",
                options: [
                    { option: "1,50,000 km/s", isCorrect: false },
                    { option: "3,00,000 km/s", isCorrect: true },
                    { option: "3,00,000 m/s", isCorrect: false },
                    { option: "30,000 km/s", isCorrect: false }
                ]
            },
            {
            
                question: "In which direction does electric current flow in a circuit?",
                options: [
                    { option: "from + to -", isCorrect: false },
                    { option: "from - to +", isCorrect: true },
                    { option: "depend on circuit", isCorrect: false },
                    { option: "doesn't flow", isCorrect: false }
                ]
            },
            {
            
                question: "What is the phenomenon where light bends as it passes from one medium to another?",
                options: [
                    { option: "Refraction", isCorrect: true },
                    { option: "Reflaction", isCorrect: false },
                    { option: "Diffraction", isCorrect: false },
                    { option: " Interference", isCorrect: false }
                ]
            },
            {
            
                question: "Which color of light has the highest frequency?",
                options: [
                    { option: "Red", isCorrect: false },
                    { option: "Green", isCorrect: false },
                    { option: "Blue", isCorrect: true },
                    { option: "Yellow", isCorrect: false }
                ]
            },
            {
            
                question: "In which type of circuit is the current the same everywhere?",
                options: [
                    { option: "Parallel", isCorrect: false },
                    { option: "Series ", isCorrect: true },
                    { option: "Both", isCorrect: false },
                    { option: "Neither", isCorrect: false }
                ]
            },
            {
            
                question: "Which law states that the pressure of a gas is inversely proportional to its volume at constant temperature?",
                options: [
                    { option: "Boyle's Law", isCorrect: true },
                    { option: "Charles's Law", isCorrect: false },
                    { option: "Gay-Lussac's Law", isCorrect: false },
                    { option: "Pascal's Law", isCorrect: false }
                ]
            },
        ]
    },

];

async function InserData(){
 await Quiz.deleteMany({});
 await Quiz.insertMany(quizData);
}

InserData();