function createReview(){
    
    let review = {};
    
    review["userName"] = prompt("Ваше имя: ");
    review["comment"] = prompt("Текст комментария: ");
    review["date"] = Date().toLocaleString();
    writeReview(review);
}

const writeReview = (review) =>
{
    let reviewContainer = document.getElementsByClassName("review-container")[0];
    reviewContainer.innerHTML += '    <div class="review-text">\n' +
        `<p> <i> <b>${review['userName']}</b>  ${review['date']}</i></p>` +
        `<p>${review['comment']}</p>`  +
        '</div>';
}