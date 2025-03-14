document.addEventListener("DOMContentLoaded", function() {          // Timer on the take-quiz.html page
    let timer;
    let isTimerRunning = false;
    let timeRemaining = 60 * 60; 

    function updateTimerDisplay() {
        let minutes = Math.floor(timeRemaining / 60);
        let seconds = timeRemaining % 60;
        document.getElementById('timeRemaining').textContent = `Time Remaining: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    document.getElementById("startQuizBtn").addEventListener("click", function() {
        if (!isTimerRunning) {
            isTimerRunning = true;
            timer = setInterval(function() {
                if (timeRemaining > 0) {
                    timeRemaining--;
                    updateTimerDisplay(); 
                } else {
                    clearInterval(timer);
                    alert('Time is up!');
                }
            }, 1000);
        }
    });

    document.getElementById("endQuizBtn").addEventListener("click", function() {
        clearInterval(timer);
        isTimerRunning = false;
        alert('Quiz Ended');
    });

    document.querySelectorAll('.quiz-name').forEach(item => {
        item.addEventListener('click', function() {
            document.getElementById('quiz-title').textContent = item.textContent;
            
        });
    });
});
