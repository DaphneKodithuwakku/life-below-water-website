let step = 1; // Track the current step
const progressBar = document.getElementById('myBar');
let step1Info = [];
let step2Info = [];
let step3Info = [];
let step4Info = [];

//An array for the question names
let questionNames = [
    ["Name: ","Surname: ", "Age: ","Gender: ","Agree with privacy terms? "], //for step 1
    ["Rational: ","DoA: ","Volunteering task: ","Place"], //for step 2
    ["Area of study: ","Highest educational level: ","University/Institution: ","Completion year: ","Country: "], //for step 3
    ["Availability of volunteering hours per week: ","Surname: ","Telephone No.: ","Email: "]//for step 4
];

// Function to display prompts based on the current step
function displayPrompts() {
    switch(step) {
        case 1:
            let name = prompt("STEP 1 Personal Details | Question 1/5 \n Your name:");
            let surname = prompt("STEP 1 Personal Details | Question 2/5 \n Your surname:");
            let age = prompt("Step 1 Personal Details | Question 3/5 \n Your age:");
            let gender = prompt("STEP 1 Personal Details | Question 4/5 \n Gender: \n 1.Male \n 2.Female \n 3.Prefer not to say");
            let privacyTerms = prompt("STEP 1 Personal Details | Question 5/5 \n Agree with privacy terms? (Yes/No)")
            return [name, surname, age, gender, privacyTerms];
        case 2:
            let rational = prompt("STEP 2 Volunteering tasks | Question 1/4 \n What brings you to this cause?:");
            let DoA = prompt("STEP 2 Volunteering tasks | Question 2/4 \n How do you prefer volunteering? (Online/Physical):");
            let task = prompt("STEP 2 Volunteering tasks | Question 3/4 \n What task do you like volunteering in? \n 1.Beach Cleaning \n 2.Underwater Cleaning \n 3.Fundraising \n 4. Marine/Animal/coral conservation");
            let place = prompt("STEP 2 Volunteering tasks | Question 4/4 \n In what Area do you like to volunteer? \n 1.Unawatuna \n 2.Trincomalee \n 3.Mirissa \n 4.Passikudah \n 5.Kalpitiya \n 6.Weligama \n 7.Hikkaduwa");
            return [rational, DoA, task, place];
        case 3: 
            let areaOfStudy = prompt("STEP 3 Qualifications | Question 1/5 \n Main field of study:");
            let degree = prompt("STEP 3 Qualifications | Question 2/5 \n Highest education level : \n 1.O/L \n 2.A/L \n 3.Bachelors \n 4.MSc");
            let university = prompt("STEP 3 Qualifications | Question 3/5 \n In which university/institution you completed your studies?");
            let year = prompt("STEP 3 Qualifications | Question 4/5 \n In which year you completed your studies?");
            let country = prompt("STEP 3 Qualifications | Question 5/5 \n In which country did you complete your studies?");
            return [areaOfStudy, degree, university, year, country];
        case 4:
            let availability = prompt("STEP 4 Availability and contact | Question 1/4 \n The minimum number of hours you can volunteer per week : ");
            let Name = prompt("STEP 4 Availability and contact | Question 2/4 \n What name would you prefer to use? ");
            let telephone = prompt("STEP 4 Availability and contact | Question 3/4 \n Enter your telephone number : ");
            let email = prompt("STEP 4 Availability and contact | Question 4/4 \n Enter your email address : ");
            return [availability, Name, telephone, email];
    }
}

// Function to display collected data

function displayData() {
    let output = document.getElementById('output');
    output.innerHTML = "<h2>Profile Information</h2>";
    
    output.innerHTML += "<h3> User Profile </h3>";
    step1Info.forEach ((answer, index) => {
        output.innerHTML += `<p> ${questionNames[0][index]}: ${answer}</p>`;
    });

    output.innerHTML += "<hr>"; //to add a horizontal line

    if (step >1){
    output.innerHTML += "<h3>Volunteering tasks</h3>";
    step2Info.forEach ((answer, index) => {
        output.innerHTML += `<p> ${questionNames[1][index]}: ${answer}</p>`;
    });
    output.innerHTML += "<hr>";
}


    if (step >2){
    output.innerHTML += "<h3>Qualifications</h3>";
    step3Info.forEach ((answer, index) => {
        output.innerHTML += `<p> ${questionNames[2][index]}: ${answer}</p>`;
    });
    output.innerHTML += "<hr>";
}


    if (step >3){
    output.innerHTML += "<h3>Availabliity and contact information </h3>";
    step4Info.forEach ((answer, index) => {
        output.innerHTML += `<p> ${questionNames[1][index]}: ${answer}</p>`;
    });
    
    //To hide the next button
    if (step>4){
        let nextButton = document.getElementById('nextButton');
        nextButton.style.display = 'none';
        updateProgressBar();
    }
}
// Add next button if more steps are available
    let nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.addEventListener('click', nextStep);
    output.appendChild(nextButton);
output.classList.remove('hidden');
}
// Function to handle the next step
function nextStep() {
    let data = displayPrompts();
    if(data.every(answer => answer !== null)) {
        if(step === 1){
            step1Info = data;
            displayData();
        }
        if(step === 2){
            step2Info = data;
            displayData();
        }
        if(step === 3){
            step3Info = data;
            displayData();
        }
        if(step === 4){
            step4Info = data;
            displayData();
        }
            step ++ ;
            updateProgressBar();
            displayData();
        
    } else {
        alert("Please provide answers to all questions.");
    // Decrement step to stay on the current step
    }
}

// Event listener for the start button
document.getElementById('startButton').addEventListener('click', function() {
    nextStep();
});

// Event listener for the next button
document.getElementById('nextButton').addEventListener('click', function() {
    nextStep();
});
function updateProgressBar(){
    let progressBar = document.getElementById('progress-bar');
    let width = parseInt(progressBar.getAttribute('value'));
    let id;
    if(width <100 && step ===4){
        id = setInterval(frame,10);
        function frame(){
            if(width >= step*25){
                clearInterval(id);
            }else{
                width ++ ;
                progressBar.setAttribute('value',width);
            }
        }
    }
    
} 
 