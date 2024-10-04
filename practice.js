
const imgUrlsArr = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-06cAXHm7uL3BYiE5N2cvw4komK_7352Z3Q&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcdZa0XcB6lvfV4VuEynpSBK4GIR2HFYavRg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSauhGSjUsGSJCFs8gRdOQbA75EhtVQ_L7sVA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQITjkCqWRxdwDTT8EphNatOL0JYsWR7i9GPQ&s"
]

let articleContainer = document.getElementById("article-container");
articleContainer.innerHTML = `<img src="${imgUrlsArr[0]}" class="image" />`;
console.log(articleContainer);
let imgIndex = 0;
function previousImg() {
    if (imgIndex > 0 && imgIndex < imgUrlsArr.length) {
        imgIndex--;
    } else {
        imgIndex = imgUrlsArr.length - 1;
    }
    articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
    console.log(articleContainer);
};
document.getElementById("leftArrow").addEventListener('click', previousImg);
document.getElementById("rightArrow").addEventListener('click', nextImg);
function nextImg() {
    if (imgIndex >= 0 && imgIndex < imgUrlsArr.length - 1) {
        imgIndex++;
    } else {
        imgIndex = 0;
    }
    articleContainer.innerHTML = `<img src="${imgUrlsArr[imgIndex]}" class="image" />`;
    console.log(articleContainer);
};
