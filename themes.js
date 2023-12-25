let currentTheme = 0;
const themes = [
    // Default
    {
        '--background': '#0e1c1a',
        '--windowtopbar': '#1d2929',
        '--terminal': '#0e0f0f',
        '--ascii-art': '#2AFFAD',
        '--welcome-text': '#23F2FF',
        '--closebtn': '#FF5151',
        '--closebtn1': '#F7D674',
        '--closebtn2': '#66DB7A',
        '--prompt': '#FFFFFF',
        '--error': '#f79292',
        '--prompt-user': '#f79292',
        '--prompt-host': '#f7d674',
        '--prompt-symbol': '#66db7a',
        '--prompt-cmdline': '#ffffff'
    },
    {
        '--background': '#007B7F',
        '--windowtopbar': '#009688',
        '--terminal': '#005F63',
        '--ascii-art': '#FFD700', // Gold
        '--welcome-text': '#4CAF50', // Green
        '--closebtn': '#E57373', // Light Red
        '--closebtn1': '#FFB74D', // Orange
        '--closebtn2': '#81C784', // Light Green
        '--prompt': '#FFFFFF',
        '--error': '#FF5252',
        '--prompt-user': '#FF4081',
        '--prompt-host': '#00BCD4',
        '--prompt-symbol': '#FFD700',
        '--prompt-cmdline': '#FFFFFF'
    },
    {
        '--background': '#121111',
        '--windowtopbar': '#00FF00',
        '--terminal': '#000000',
        '--ascii-art': '#00FF00', // Matrix Green
        '--welcome-text': '#00FF00', // Matrix Green
        '--closebtn': '#FF0000', // Red
        '--closebtn1': '#FFFF00', // Yellow
        '--closebtn2': '#ffffff', // Matrix Green
        '--prompt': '#00FF00', // Matrix Green
        '--error': '#FF0000', // Red
        '--prompt-user': '#00FF00', // Matrix Green
        '--prompt-host': '#FFFF00', // Yellow
        '--prompt-symbol': '#00FF00', // Matrix Green
        '--prompt-cmdline': '#FFFFFF' // White
    },
    {
        '--background': '#000000',
        '--windowtopbar': '#FF00FF', // Magenta
        '--terminal': '#000000',
        '--ascii-art': '#00FFFF', // Cyan
        '--welcome-text': '#00FF00', // Green
        '--closebtn': '#FF0000', // Red
        '--closebtn1': '#FFFF00', // Yellow
        '--closebtn2': '#00FF00', // Green
        '--prompt': '#FFFFFF', // White
        '--error': '#FF0000', // Red
        '--prompt-user': '#FF00FF', // Magenta
        '--prompt-host': '#00FFFF', // Cyan
        '--prompt-symbol': '#00FF00', // Green
        '--prompt-cmdline': '#FFFFFF' // White
    },
    {
        '--background': '#87CEEB', // Sky Blue
        '--windowtopbar': '#8B4513', // Saddle Brown
        '--terminal': '#CD853F', // Peru
        '--ascii-art': '#32CD32', // Lime Green
        '--welcome-text': '#FFD700', // Gold
        '--closebtn': '#DC143C', // Crimson
        '--closebtn1': '#FFD700', // Gold
        '--closebtn2': '#228B22', // Forest Green
        '--prompt': '#FFFFFF', // White
        '--error': '#DC143C', // Crimson
        '--prompt-user': '#8B4513', // Saddle Brown
        '--prompt-host': '#32CD32', // Lime Green
        '--prompt-symbol': '#228B22', // Forest Green
        '--prompt-cmdline': '#FFFFFF' // White
    },
    {
        '--background': '#000000', // Black
        '--windowtopbar': '#FFD700', // Gold
        '--terminal': '#000000', // Black
        '--ascii-art': '#00FF00', // Green
        '--welcome-text': '#FFD700', // Gold
        '--closebtn': '#FF0000', // Red
        '--closebtn1': '#FFFF00', // Yellow
        '--closebtn2': '#00FF00', // Green
        '--prompt': '#FFFFFF', // White
        '--error': '#FF0000', // Red
        '--prompt-user': '#FFD700', // Gold
        '--prompt-host': '#00FF00', // Green
        '--prompt-symbol': '#FFFF00', // Yellow
        '--prompt-cmdline': '#FFFFFF' // White
    },
    {
        '--background': '#FDF6E3', // Background color
        '--windowtopbar': '#93A1A1', // Base2 color
        '--terminal': '#EEE8D5', // Base3 color
        '--ascii-art': '#B58900', // Yellow
        '--welcome-text': '#268BD2', // Blue
        '--closebtn': '#DC322F', // Red
        '--closebtn1': '#D33682', // Magenta
        '--closebtn2': '#859900', // Green
        '--prompt': '#073642', // Base02 color
        '--error': '#DC322F', // Red
        '--prompt-user': '#B58900', // Yellow
        '--prompt-host': '#268BD2', // Blue
        '--prompt-symbol': '#859900', // Green
        '--prompt-cmdline': '#002B36' // Base03 color
    },
    {
        '--background': '#120037',
        '--windowtopbar': '#2B0A3D',
        '--terminal': '#1E004E',
        '--ascii-art': '#9D4EDD',
        '--welcome-text': '#BB86FC',
        '--closebtn': '#CF6679',
        '--closebtn1': '#FFD700',
        '--closebtn2': '#29B6F6',
        '--prompt': '#FFFFFF',
        '--error': '#FF5252',
        '--prompt-user': '#BB86FC',
        '--prompt-host': '#536DFE',
        '--prompt-symbol': '#FFD700',
        '--prompt-cmdline': '#FFFFFF'
    },
    {
        '--background': '#757575',
        '--windowtopbar': '#9E9E9E',
        '--terminal': '#616161',
        '--ascii-art': '#FFD700', // Gold
        '--welcome-text': '#BDBDBD', // Grey
        '--closebtn': '#E57373', // Light Red
        '--closebtn1': '#FFB74D', // Orange
        '--closebtn2': '#81C784', // Light Green
        '--prompt': '#FFFFFF',
        '--error': '#FF5252',
        '--prompt-user': '#BDBDBD',
        '--prompt-host': '#9E9E9E',
        '--prompt-symbol': '#FFD700',
        '--prompt-cmdline': '#FFFFFF'
    },
    {
        '--background': '#00695C',
        '--windowtopbar': '#00796B',
        '--terminal': '#004D40',
        '--ascii-art': '#FFD700', // Gold
        '--welcome-text': '#009688', // Teal
        '--closebtn': '#E57373', // Light Red
        '--closebtn1': '#FFB74D', // Orange
        '--closebtn2': '#81C784', // Light Green
        '--prompt': '#FFFFFF',
        '--error': '#FF5252',
        '--prompt-user': '#009688',
        '--prompt-host': '#00796B',
        '--prompt-symbol': '#FFD700',
        '--prompt-cmdline': '#FFFFFF'
    },
    {
        '--background': '#000000',
        '--windowtopbar': '#00FF00',
        '--terminal': '#000000',
        '--ascii-art': '#00FF00', // Matrix Green
        '--welcome-text': '#00FF00', // Matrix Green
        '--closebtn': '#FF0000', // Red
        '--closebtn1': '#FFFF00', // Yellow
        '--closebtn2': '#00FF00', // Matrix Green
        '--prompt': '#00FF00', // Matrix Green
        '--error': '#FF0000', // Red
        '--prompt-user': '#00FF00', // Matrix Green
        '--prompt-host': '#FFFF00', // Yellow
        '--prompt-symbol': '#00FF00', // Matrix Green
        '--prompt-cmdline': '#FFFFFF' // White
    },
    {
        '--background': '#000000',
        '--windowtopbar': '#FF00FF', // Magenta
        '--terminal': '#000000',
        '--ascii-art': '#00FFFF', // Cyan
        '--welcome-text': '#00FF00', // Green
        '--closebtn': '#FF0000', // Red
        '--closebtn1': '#FFFF00', // Yellow
        '--closebtn2': '#00FF00', // Green
        '--prompt': '#FFFFFF', // White
        '--error': '#FF0000', // Red
        '--prompt-user': '#FF00FF', // Magenta
        '--prompt-host': '#00FFFF', // Cyan
        '--prompt-symbol': '#00FF00', // Green
        '--prompt-cmdline': '#FFFFFF' // White
    },
    {
        '--background': '#87CEEB', // Sky Blue
        '--windowtopbar': '#8B4513', // Saddle Brown
        '--terminal': '#CD853F', // Peru
        '--ascii-art': '#32CD32', // Lime Green
        '--welcome-text': '#FFD700', // Gold
        '--closebtn': '#DC143C', // Crimson
        '--closebtn1': '#FFD700', // Gold
        '--closebtn2': '#228B22', // Forest Green
        '--prompt': '#FFFFFF', // White
        '--error': '#DC143C', // Crimson
        '--prompt-user': '#8B4513', // Saddle Brown
        '--prompt-host': '#32CD32', // Lime Green
        '--prompt-symbol': '#228B22', // Forest Green
        '--prompt-cmdline': '#FFFFFF' // White
    },
    {
        '--background': '#000000', // Black
        '--windowtopbar': '#FFD700', // Gold
        '--terminal': '#000000', // Black
        '--ascii-art': '#00FF00', // Green
        '--welcome-text': '#FFD700', // Gold
        '--closebtn': '#FF0000', // Red
        '--closebtn1': '#FFFF00', // Yellow
        '--closebtn2': '#00FF00', // Green
        '--prompt': '#FFFFFF', // White
        '--error': '#FF0000', // Red
        '--prompt-user': '#FFD700', // Gold
        '--prompt-host': '#00FF00', // Green
        '--prompt-symbol': '#FFFF00', // Yellow
        '--prompt-cmdline': '#FFFFFF' // White
    },
    {
        '--background': '#FDF6E3', // Background color
        '--windowtopbar': '#93A1A1', // Base2 color
        '--terminal': '#EEE8D5', // Base3 color
        '--ascii-art': '#B58900', // Yellow
        '--welcome-text': '#268BD2', // Blue
        '--closebtn': '#DC322F', // Red
        '--closebtn1': '#D33682', // Magenta
        '--closebtn2': '#859900', // Green
        '--prompt': '#073642', // Base02 color
        '--error': '#DC322F', // Red
        '--prompt-user': '#B58900', // Yellow
        '--prompt-host': '#268BD2', // Blue
        '--prompt-symbol': '#859900', // Green
        '--prompt-cmdline': '#002B36' // Base03 color
    }
    
    
    
    
    
    
    // Continue adding themes as needed

    // Add more themes as needed
];

// Apply the first theme when the page loads
Object.keys(themes[currentTheme]).forEach(function(key) {
    document.documentElement.style.setProperty(key, themes[currentTheme][key]);
});

document.querySelector('.closebtn1').addEventListener('click', function() {
    if (currentTheme > 0) {
        currentTheme--;
        Object.keys(themes[currentTheme]).forEach(function(key) {
            document.documentElement.style.setProperty(key, themes[currentTheme][key]);
        });
    }
});

document.querySelector('.closebtn2').addEventListener('click', function() {
    if (currentTheme < themes.length - 1) {
        currentTheme++;
        Object.keys(themes[currentTheme]).forEach(function(key) {
            document.documentElement.style.setProperty(key, themes[currentTheme][key]);
        });
    }
});

