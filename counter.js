document.addEventListener('DOMContentLoaded', function() {
    let mainNum = parseInt(document.querySelector('.mainNum').textContent);

    document.querySelector('.upper').addEventListener('click', (event) => {
        event.preventDefault();
        mainNum++;
        document.querySelector('.mainNum').textContent = mainNum;
    });

    document.querySelector('.lower').addEventListener('click', (event) => {
        event.preventDefault();
        mainNum--;
        document.querySelector('.mainNum').textContent = mainNum;
    });
});
