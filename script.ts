// Function to update the clock and date
function updateClock(): void {
    const now: Date = new Date();

    // Get the current time
    let hours: number = now.getHours();
    let minutes: number|string = now.getMinutes();
    let seconds: number|string = now.getSeconds();
    let ampm: string = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    if (hours > 12) {
        hours -= 12;
    }
    if (hours === 0) {
        hours = 12;
    }

    // Add leading zeros for single digit minutes and seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Get the current date
    // const dayOfWeek: string = now.toLocaleString('default', { weekday: 'long' });
    const month: string = now.toLocaleString('default', { month: 'long' });
    const date: number = now.getDate();
    const year: number = now.getFullYear();

    // Format the date as "Day, Month Date, Year"
    const dateString: string = `, ${month} ${date}, ${year}`;

    // Update the elements in the DOM
    const hoursElement: HTMLElement | null = document.getElementById('hours');
    const minutesElement: HTMLElement | null = document.getElementById('munites');
    const secondsElement: HTMLElement | null = document.getElementById('seconds');
    const ampmElement: HTMLElement | null = document.getElementById('ampm');
    const dateElement: HTMLElement | null = document.getElementById('date'); // New element for the date

    if (hoursElement && minutesElement && secondsElement && ampmElement && dateElement) {
        hoursElement.textContent = hours.toString();
        minutesElement.textContent = minutes.toString();
        secondsElement.textContent = seconds.toString();
        ampmElement.textContent = ampm;
        dateElement.textContent = dateString; // Set the date
    }
}

// Call updateClock every second (1000 milliseconds)
setInterval(updateClock, 1000);

// Initial call to set time immediately when the page loads
updateClock();
