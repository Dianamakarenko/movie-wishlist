let users = fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => drawUsersList(json))

let data 

function drawUsersList (users) {
    users.forEach(user => {
        let div = document.createElement('div')
        let usersList = document.getElementById('users')
        usersList.appendChild(div);

        const name = document.createElement('span')
        name.innerText = user.name
        div.appendChild(name);

        const address = document.createElement('span')
        address.innerText = `${user.address.city} ${user.address.street} ${user.address.suite}`
        div.appendChild(address);

        const phone = document.createElement('a')
        phone.innerText = user.phone.replace(/\D/g,'')
        console.log()
        phone.setAttribute('href', `tel:${user.phone.replace(/\D/g,'')}`)
        div.appendChild(phone);
    });
}

