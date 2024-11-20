const friends = {
    "moksha": new Date('2024-08-17'),
    "gyaneswari": new Date('2024-06-14'),
    "vasini": new Date('2024-08-07'),
    "prathi": new Date('2024-12-05'),
    "rahul": new Date('2024-03-25'),
    "balaji": new Date('2024-08-07'),
    "jaswanth": new Date('2024-12-05'),
    "ashish": new Date('2024-01-12'),
    "thagur": new Date('2024-12-16'),
    "sreeja": new Date('2025-01-24'),
    "haritha": new Date('2024-01-24'),
    "somanadh": new Date('2024-12-31'),

};

document.getElementById('enter-btn').addEventListener('click', function() {
    const nameInput = document.getElementById('name');
    const name = nameInput.value.trim().toLowerCase();
    const messageDiv = document.getElementById('message');
    messageDiv.style.fontSize = "24px"; // Make the message text bigger
    messageDiv.style.color = "#000000"; // Make the message text color more attractive

    if (name in friends) {
        const today = new Date();
        const birthday = new Date(friends[name]);
        birthday.setFullYear(today.getFullYear());

        // If the birthday has already passed this year, set it for the next year
        if (today > birthday) {
            birthday.setFullYear(today.getFullYear() + 1);
        }

        // Calculate the difference in time and then convert to days
        const timeDiff = birthday.getTime() - today.getTime();
        const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

        // If the birthday was this year but has already passed
        if (today > friends[name]) {
            const daysAgo = Math.ceil((today.getTime() - friends[name].getTime()) / (1000 * 60 * 60 * 24));
            messageDiv.innerHTML = `<strong>${capitalizeFirstLetter(name)}'s Birthday was ${daysAgo} day(s) ago!</strong>`;
        } else if (daysLeft > 0) {
            messageDiv.innerHTML = `<strong>${capitalizeFirstLetter(name)}'s Birthday is in ${daysLeft} day(s)!</strong>`;
        } else if (daysLeft === 0) {
            messageDiv.innerHTML = `<strong>Happy Birthday to ${capitalizeFirstLetter(name)}! 🎉🎂 Wishing you a wonderful day and an amazing year ahead! ❤️</strong>`;
        }
    } else {
        messageDiv.innerHTML = `<strong>Sorry, we couldn't find ${capitalizeFirstLetter(name)} in our list. Please try another name!</strong>`;
    }
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
