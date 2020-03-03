document.getElementById('button1').addEventListener('click', function () {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function () {

      if (this.status === 200) {
           const outputs = JSON.parse(this.responseText);
           output = `<ul>
              <li>ID:${outputs.id}</li>
              <li>NAME:${outputs.name}</li>
              <li>COMPANY:${outputs.company}</li>
              <li>PHONE:${outputs.phone}</li>
           
           
           
           </ul>`


           document.getElementById('customer').innerHTML = output;
      }
     
    }

    xhr.send();
})



document.getElementById('button2').addEventListener('click', function () {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'customers.json', true);

  xhr.onload = function () {

    if (this.status === 200) {
     
       let outputs = ''
        const users = JSON.parse(this.responseText)

        users.forEach(user => {
          outputs += `<ul>
          <li>ID:${user.id}</li>
          <li>NAME:${user.name}</li>
          <li>COMPANY:${user.company}</li>
          <li>PHONE:${user.phone}</li>

          
          </ul>`
          
        });


         document.getElementById('customers').innerHTML = outputs;
    }
   
  }

  xhr.send();
})