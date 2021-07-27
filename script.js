let show_info = document.getElementById('more-info-btn');

show_info.onclick = function () {
    let more_info__text = document.querySelector('.more-info__text');
    var actualDisplay = getComputedStyle(more_info__text).display;
    if (actualDisplay == 'none') {
        more_info__text.style.display = 'block';
        document.getElementById('more-info__text').scrollIntoView();
    } else {
        more_info__text.style.display = 'none';
    }
}