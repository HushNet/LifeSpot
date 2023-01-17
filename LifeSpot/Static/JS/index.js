let session = new Map();

function filterContent(){
    let elements = document.getElementsByClassName(`video-container`);
    for (let i = 0; i < elements.length; i++){
        let videoName = elements[i].getElementsByClassName(`video-title`)[0].innerText.toLowerCase();

        if (!videoName.includes(userInput().toLowerCase())){
            elements[i].style.display = `none`;
        }else{
            elements[i].style.display = `inline-block`;
        }

    }
}

function checkAge(){
    if(session.get("age") >= 18){
        let startDate = new Date().toLocaleString();

        alert("Приветствуем на LifeSpot! " + '\n' +  "Текущее время: " + startDate );
        session.set("startDate", startDate)
    }
    else{
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com"
    }
}

function handleSession(){

    session.set("userAgent", window.navigator.userAgent)
    session.set("age", prompt("Пожалуйста, введите ваш возраст"))
    
    return session;
}

let sessionLog = function logSession(){
    for (let result of session){
        console.log(result)
    }
}

function subscribeAlert(){
    alert("Подпишитесь на наш Инстаграмм!");
}

