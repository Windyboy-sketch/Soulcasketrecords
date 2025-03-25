document.addEventListener('DOMContentLoaded', () => {
    const today = new Date();
    const month = today.getMonth(); // 0-11 (January is 0)
    const day = today.getDate();

    const celebrationDates = [
        { month: 0, day: 20, name: "Bossman’s Birthday" }, // January 20th
        { month: 9, day: 10, name: "Gayretardsmead’s Birthday" }, // October 10th
        { month: 4, day: 14, name: "Stroodietoodie’s Birthday" } // May 14th
		{ month: 3, day: 24, name: "SoulCasket.shop Website Opening Anniversary" } //March 24th
    ];

    const isCelebrationDay = celebrationDates.find(date => date.month === month && date.day === day);

    if (isCelebrationDay) {
        // Create confetti container
        const confettiContainer = document.createElement('div');
        confettiContainer.className = 'confetti';
        document.body.appendChild(confettiContainer);

        // Generate confetti pieces
        for (let i = 0; i < 100; i++) {
            const confettiPiece = document.createElement('div');
            confettiPiece.className = 'confetti-piece';
            confettiPiece.style.left = `${Math.random() * 100}vw`;
            confettiPiece.style.animationDelay = `${Math.random() * 5}s`;
            confettiContainer.appendChild(confettiPiece);
        }

        // Create celebration message
        const message = document.createElement('div');
        message.className = 'celebration-message';
        message.textContent = `Happy ${isCelebrationDay.name}!`;
        document.body.appendChild(message);
    }
});