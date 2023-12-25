// script.js

function typeEffect(element, text, delay = 20) {
    let i = 0;
    return new Promise((resolve, reject) => {
        const interval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text[i];
                i++;
            } else {
                clearInterval(interval);
                resolve();
            }
        }, delay);
    });
}

let commandHistory = [];
let commandIndex = -1;

window.addEventListener('DOMContentLoaded', (event) => {
    const output = document.getElementById('output');
    const cmdline = document.querySelector('.cmdline');

    // Apply typing effect to welcome message
    const welcomeMessageElement = document.getElementById('welcome-message');
    const welcomeMessage = welcomeMessageElement.textContent;
    welcomeMessageElement.textContent = '';
    typeEffect(welcomeMessageElement, welcomeMessage).then(() => {
        // Replace "help" with highlighted version
        welcomeMessageElement.innerHTML = welcomeMessageElement.innerHTML.replace(/help/g, '<span class="highlight">help</span>');
    });

    // Helper function to create a span
    function createSpan(className, text) {
        const span = document.createElement('span');
        span.className = className;
        span.textContent = text;
        return span;
    }

    cmdline.addEventListener('keydown', function(e) {
        if (e.keyCode === 13) { // Enter key
            const cmd = this.value;
            commandHistory.push(cmd);
            commandIndex = commandHistory.length;

            const div = document.createElement('div');
            div.className = 'prompt'; // Add class

            // Use helper function to create spans
            div.appendChild(createSpan('user', 'guest'));
            div.appendChild(createSpan('symbol','@'));
            div.appendChild(createSpan('host', 'dewansnehra.xyz'));
            div.appendChild(createSpan('symbol',':'));
            div.appendChild(createSpan('symbol', '$'));
            div.appendChild(document.createTextNode(` ${cmd}`));

            output.appendChild(div);

            if (window.commands[cmd.split(' ')[0]]) {
                window.commands[cmd.split(' ')[0]](output, cmd.split(' ').slice(1));
            } else {
                const errorDiv = document.createElement('div');
                errorDiv.className = 'error'; // Add class
                errorDiv.textContent = `${cmd}: command not found`;
                output.appendChild(errorDiv);
            }

            this.value = '';
        } else if (e.keyCode === 9) { // Tab key
            e.preventDefault();
            const partial = this.value;
            const matches = Object.keys(window.commands).filter(c => c.startsWith(partial));
            if (matches.length === 1) {
                this.value = matches[0];
            }
        } else if (e.keyCode === 38) { // Up Arrow key
            if (commandIndex > 0) {
                commandIndex--;
                this.value = commandHistory[commandIndex];
            }
        } else if (e.keyCode === 40) { // Down Arrow key
            if (commandIndex < commandHistory.length - 1) {
                commandIndex++;
                this.value = commandHistory[commandIndex];
            } else if (commandIndex === commandHistory.length - 1) {
                commandIndex++;
                this.value = '';
            }
        }
    });

    cmdline.addEventListener('blur', function(e) {
        e.preventDefault();
        this.focus();
    });
});



// Get the preloader and progress bar divs
const preloader = document.getElementById('preloader');
const progressBar = document.getElementById('progress-bar');

// Start the ASCII art loader
startAsciiLoader(progressBar);

function startAsciiLoader(progressBar) {
    let loaderLength = 0;
    const clientIcon = document.getElementById('client');
    const serverIcon = document.getElementById('server');
    const loggingInIcon = document.getElementById('logging-in');
    
    const loaderInterval = setInterval(function() {
        progressBar.innerHTML = '<span style="color: var(--ascii-art);">[</span>' + `<span style="color: var(--ascii-art);">#</span>`.repeat(loaderLength) + '<span style="color: var(--ascii-art);">#</span>' + '.'.repeat(20 - loaderLength) + '<span id="done">]</span>';
        loaderLength += 4;
        if (loaderLength > 20) {
            const donesymbol = document.getElementById('done');
            donesymbol.style.color = 'var(--ascii-art)';
            clearInterval(loaderInterval);
            serverIcon.style.color = 'var(--ascii-art)';
            setTimeout(function() {
                clientIcon.style.display = 'none';
                serverIcon.style.display = 'none';
                progressBar.style.display = 'none';
                loggingInIcon.style.display = 'block';
                loggingInIcon.classList.add('blink');
                setTimeout(function() {
                    loggingInIcon.style.display = 'none';
                    loggingInIcon.classList.remove('blink');
                    preloader.style.display = 'none';
                }, 1500);
            }, 1000);
        }
    }, 500);
}


document.addEventListener('DOMContentLoaded', (event) => {
    const closeBtn = document.querySelector('.closebtn');

    closeBtn.addEventListener('click', function() {
        // Create an iframe and load the new HTML file in it
        const iframe = document.createElement('iframe');
        iframe.src = '404.html'; // Replace with the path to your HTML file
        iframe.style.width = '100%';
        iframe.style.height = '90vh';
        iframe.style.border = '0';

        // Clear the body, change the background color to black, and append the iframe
        document.body.innerHTML = '';
        document.body.style.backgroundColor = 'black';
        document.body.appendChild(iframe);
    });
});


