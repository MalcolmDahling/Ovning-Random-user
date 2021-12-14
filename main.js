function getUser(){
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => printUser(data));
}






function printUser(data){
    console.log(data.results);

    document.body.insertAdjacentHTML('beforeend',
    `<div>
        <p>Name: ${data.results[0].name.first} ${data.results[0].name.last}</p>
        <p>Gender: ${data.results[0].gender}</p>
        <p>Phone: ${data.results[0].cell}</p>
        <p>Age: ${data.results[0].dob.age}</p>
        <p>Email: ${data.results[0].email}</p>
        <p>Country: ${data.results[0].location.country}</p>
    </div>`);
}









document.getElementById('button').addEventListener('click', getUser);
getUser();