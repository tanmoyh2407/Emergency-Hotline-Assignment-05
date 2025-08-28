// Heart Counter function

document.querySelectorAll('.heart_count').forEach(function(heart){
    heart.addEventListener("click", function(){
        const totalHeart = parseInt(document.getElementById('total_heart').innerText);
        const totalHeartUpdate = totalHeart + 1;
        document.getElementById('total_heart').innerText = totalHeartUpdate;
    })
})

// Handle call button function

function handleCallClick(btn) {
        const totalCoin = parseInt(document.getElementById('total_coin').innerText);

        if(totalCoin < 20){
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে ২০ কয়েন লাগবে।");
            return;
        }
            const card = btn.closest('.emergency-card');
            const serviceNameEng = card.querySelector('.service_name_eng').innerText;
            const serviceNameBng = card.querySelector('.service_name_bng').innerText;
            const callNumber = card.querySelector('.call_number').innerText;

            alert(`📞 Calling ${serviceNameEng} ${callNumber}...`);

        const coinAfterPerCall = totalCoin - 20;
        document.getElementById('total_coin').innerText = coinAfterPerCall;
        }

// Handle copy button function

document.querySelectorAll('.copy-btn').forEach(function(button) {
    button.addEventListener("click", function() {
        const number = button.closest('.emergency-card').querySelector('.call_number').innerText;
        navigator.clipboard.writeText(number);
        alert(`Copy this number: ${number}`);
    });
});