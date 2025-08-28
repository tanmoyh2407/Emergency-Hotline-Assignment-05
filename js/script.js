document.querySelectorAll('.heart_count').forEach(function(heart){
    heart.addEventListener("click", function(){
        const totalHeart = parseInt(document.getElementById('total_heart').innerText);
        const totalHeartUpdate = totalHeart + 1;
        document.getElementById('total_heart').innerText = totalHeartUpdate;
    })
})