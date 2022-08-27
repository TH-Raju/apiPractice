function getApi() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => apiOut(data))
}

function apiOut(data) {
    const api = document.getElementById('apiPost');
    const ApiCom = document.getElementById('apiComment');
    ApiCom.style.display = 'none';
    api.style.display = 'block';

    for (let ata of data) {
        const ele = document.createElement('div');
        ele.classList.add('apii');


        ele.innerHTML = `
        <h3 class= 'id'> id ${ata.id}</h3>
        <h4> title ${ata.title}</h4>
        <p> Comment ${ata.body} </p>
    `
        api.appendChild(ele);


    }
}


function apiComments() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(data => commentApi(data))
}

function commentApi(data) {
    const ApiComments = document.getElementById('apiComment');
    const apis = document.getElementById('apiPost');
    ApiComments.style.display = 'block';
    apis.style.display = 'none';
    for (let obj of data) {
        const element = document.createElement('div');
        element.classList.add('api');

        element.innerHTML = `
            <h1> Name : ${obj.name}</h1>
            <h3> id : ${obj.id} </h3>
            <h3 class="email"> Email : ${obj.email} </h3><br>
            <p class="com"> Comment : ${obj.body} </p>
        `
        ApiComments.appendChild(element);
    }
}