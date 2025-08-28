// Heart Counter function

document.querySelectorAll('.heart_count').forEach(function (heart) {
    heart.addEventListener("click", function () {
        const totalHeart = parseInt(document.getElementById('total_heart').innerText);
        const totalHeartUpdate = totalHeart + 1;
        document.getElementById('total_heart').innerText = totalHeartUpdate;
    })
})

// Handle call button function

function handleCallClick(btn) {
    const totalCoin = parseInt(document.getElementById('total_coin').innerText);

    if (totalCoin < 20) {
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

    // Call History Add...
    const historyList = document.getElementById('call_history_list');
    const timeNow = new Date().toLocaleTimeString();

    const historyItem = document.createElement('div');
    historyItem.className = "bg-[#FAFAFA] rounded-[8px] p-4 flex justify-between items-center";

    historyItem.innerHTML =
        `<div>
            <div class="text-lg text-[#111111]">
                ${serviceNameBng}
            </div>
            <div class="text-[#5C5C5C] text-lg">
                ${callNumber}
            </div>
        </div>
        <div class="text-lg text-[#111111]">
            ${timeNow}
        </div>`;

    historyList.append(historyItem);
}

// Call history clear button event

    document.getElementById('clear_history_btn').addEventListener("click", function(){
        document.getElementById('call_history_list').innerHTML = '';
    });

// Handle copy button function

document.querySelectorAll('.copy-btn').forEach(function (button) {
    button.addEventListener("click", function () {
        const number = button.closest('.emergency-card').querySelector('.call_number').innerText;
        navigator.clipboard.writeText(number);
        alert(`নাম্বার কপি হয়েছে: ${number}`);

        const totalCopy = parseInt(document.getElementById('total_copy').innerText);
        const totalCopyUpdate = totalCopy + 1;
        document.getElementById('total_copy').innerText = totalCopyUpdate;
    });
});