// commands.js

const password = Math.floor(100000 + Math.random() * 900000);
console.log('Password: ' + password);
// Initialize super user variable
let superUser = false;

window.commands = {
    help: async function(output) {
        const helpDiv = document.createElement('div');
        helpDiv.className = 'help'; // Add class
        output.appendChild(helpDiv); // Move this line up

        const helpCmd = document.createElement('p');
        helpDiv.appendChild(helpCmd);
        await typeEffect(helpCmd, 'help - Show help');

        const aboutCmd = document.createElement('p');
        helpDiv.appendChild(aboutCmd);
        await typeEffect(aboutCmd, 'about - Show about');

        const lsCmd = document.createElement('p');
        helpDiv.appendChild(lsCmd);
        await typeEffect(lsCmd, 'ls - List files');

        const echoCmd = document.createElement('p');
        helpDiv.appendChild(echoCmd);
        await typeEffect(echoCmd, 'echo - Echo input');

        const whoamiCmd = document.createElement('p');
        helpDiv.appendChild(whoamiCmd);
        await typeEffect(whoamiCmd, 'whoami - Show current user');

        const clearCmd = document.createElement('p');
        helpDiv.appendChild(clearCmd);
        await typeEffect(clearCmd, 'clear - Clear the terminal');

        const pwdCmd = document.createElement('p');
        helpDiv.appendChild(pwdCmd);
        await typeEffect(pwdCmd, 'pwd - Show current directory');

        const rmCmd = document.createElement('p');
        helpDiv.appendChild(rmCmd);
        await typeEffect(rmCmd, 'rm - Delete files [ Usage: rm <file> ]');

        const sudoCmd = document.createElement('p');
        helpDiv.appendChild(sudoCmd);
        await typeEffect(sudoCmd, 'sudo - Switch to super user [ Usage: sudo <password> ]');

        const contactCmd = document.createElement('p');
        helpDiv.appendChild(contactCmd);
        await typeEffect(contactCmd, 'send - Send a message to me [ Usage: send <message> ]');

        
        
    },
    about: async function(output) {
        const div = document.createElement('div');
        div.className = 'about'; // Add class
        output.appendChild(div);
        await typeEffect(div, 'Hi my name is Dewans Nehra. I am a student at Lovely Professional University.');
    
        // Add the details with hyperlinks
        div.innerHTML += `
            <div style = 'padding-left:40px'>
            <p style = 'display:flex;'><ion-icon name="mail" style='font-size:20px; padding-right:5px;'></ion-icon> Email: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <a href="mailto:dewansnehra@gmail.com">dewansnehra@gmail.com</a></p>
            <p style = 'display:flex;'><ion-icon name="logo-github" style='font-size:20px; padding-right:5px;'></ion-icon>Github: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <a href="https://github.com/DewanshNehra" target="_blank">github/DewanshNehra</a></p>
            <p style = 'display:flex;'><ion-icon name="logo-linkedin" style='font-size:20px; padding-right:5px;'></ion-icon>Linkedin: &nbsp&nbsp&nbsp&nbsp&nbsp <a href="https://www.linkedin.com/in/dewansnehra/" target="_blank">linkedin/dewansnehra</a></p>
            <p style = 'display:flex;'><ion-icon name="logo-instagram" style='font-size:20px; padding-right:5px;'></ion-icon>Instagram: &nbsp&nbsp&nbsp&nbsp <a href="https://instagram.com/tobortech" target="_blank">instagram/tobortech</a></p>
            <p style = 'display:flex;'><ion-icon name="logo-discord" style='font-size:20px; padding-right:5px;'></ion-icon>Discord: &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <a href="https://discordapp.com/users/746777830121013349" target="_blank">newname#9981</a></p>
            </div>   
            `;
    },
    clear: function(output) {
        output.innerHTML = '';
    },
    echo: async function(output, args) {
        const div = document.createElement('div');
        div.className = 'echo'; // Add class
        output.appendChild(div);
        await typeEffect(div, args.join(' '));
    },
    pwd: async function(output) {
        const div = document.createElement('div');
        div.className = 'pwd'; // Add class
        output.appendChild(div);
        await typeEffect(div, '/home/dewansnehra/');
    },
    whoami: async function(output) {
        const div = document.createElement('div');
        div.className = 'whoami'; // Add class
        output.appendChild(div);
        await typeEffect(div, 'Current user: guest');
    },
    sudo: async function(output, args) {
        const div = document.createElement('div');
        div.className = 'sudo'; // Add class
        output.appendChild(div);
        if (args.length === 0) {
            await typeEffect(div, 'Please enter a password. \n Usage: sudo [password]');
        } else if (args[0] === password.toString()) {
            superUser = true;
            await typeEffect(div, 'Password accepted. Switched to super user. You now have access to delete files and run the rm command.');
        } else {
            await typeEffect(div, 'Incorrect password.');
        }
    },
    ls: async function(output) {
        const div = document.createElement('div');
        div.className = 'ls'; // Add class
        output.appendChild(div);
        await typeEffect(div, 'index.html style.css script.js');
    },
    rm: async function(output, args) {
        const div = document.createElement('div');
        div.className = 'rm'; // Add class
        output.appendChild(div);
        if (superUser) {
            if (args[0] === 'index.html' || args[0] === 'style.css' || args[0] === 'script.js') {
                await typeEffect(div, 'What made you think that was a good idea? Now everything is ruined.');

                // Create an iframe and load the new HTML file in it
                const iframe = document.createElement('iframe');
                iframe.src = '404.html'; // Replace with the path to your HTML file
                iframe.style.width = '100%';
                iframe.style.height = '90vh';
                iframe.style.border = '0';

                // Clear the body and append the iframe
                document.body.innerHTML = '';
                document.body.style.backgroundColor = 'black';
                document.body.appendChild(iframe);
            } else {
                await typeEffect(div, 'File ' + args[0] + ' not found.');
            }
        } else {
            await typeEffect(div, 'You do not have permission to run this command.');
        }
    },
    send: async function(output, args) {
        const message = args.join(' '); // Join the arguments to form the message
        const currentTime = new Date(); // Get the current time
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        div.className = 'send'; // Add class
        output.appendChild(div);
        output.appendChild(div2);
        typeEffect(div, 'Sending message...');

    
        const payload = {
            content: "\n**Message:** " + "`" + message + "`" + "\n**Time:** " + "`" + currentTime + "`" + "\n", 
        };
    
        // Send a POST request to the Discord webhook URL
        fetch('<webhook_url_here', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        }).then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            // If the response is ok, print the success message without parsing the response
            console.log('Message sent successfully');
            typeEffect(div2, 'Message sent successfully.');
        }).catch(e => {
            console.error('An error occurred', e);
            typeEffect(div2, 'An error occurred. Please try again.' + e);
        });
    },



};