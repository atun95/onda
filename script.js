// Set the date we're counting down to (e.g., 30 days from now)
const countDownDate = new Date();
countDownDate.setDate(countDownDate.getDate() + 30);

// Update the countdown every 1 second
const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the countdown date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in elements with id
    document.getElementById("days").innerHTML = days < 10 ? "0" + days : days;
    document.getElementById("hours").innerHTML = hours < 10 ? "0" + hours : hours;
    document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
    document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<h2>Đã Đến Lúc!</h2>";
    }
}, 1000);

// Form submission (prevents reload and shows a thank you message)
document.getElementById('notify-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = '<i class="fas fa-check"></i> Đã đăng ký thành công!';
    btn.style.background = 'linear-gradient(135deg, #10b981 0%, #059669 100%)';
    this.querySelector('input').value = '';
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.style.background = '';
    }, 3000);
});
