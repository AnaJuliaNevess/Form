createTable();

function addObject(key, obj) {
    return localStorage.setItem(key, JSON.stringify(obj));
}

function removeObject(key) {
    return localStorage.removeItem(key);
}

function getObject(key) {
    return JSON.parse(localStorage.getItem(key));
}

function verificaObjeto(key, obj) {
    const objSaved = getObject(key);
    const arr = [];

    if (objSaved === null) {
        return addObject(key, [obj]);
    } else {
        const t = objSaved.length;

        for (let i = 0; i < t; i++) {
            arr.push(objSaved[i]);
        }

        arr.push(obj);
        
        return addObject(key, arr);
    }
}

function enviar() {
    const obj = {
        nome: document.getElementById('input-name').value,
        sobrenome: document.getElementById('input-sobrenome').value,
        cpf: document.getElementById('input-cpf').value,
        email: document.getElementById('input-email').value,
        senha: document.getElementById('input-senha').value,
    }
    
    verificaObjeto('register', obj);
    alert(`Nome: ${obj.nome} ${obj.sobrenome} | CPF: ${obj.cpf} | E-mail: ${obj.email}`);
    clearFields();
    location.reload();
}

function clearFields() {
    document.getElementById('input-name').value = '';
    document.getElementById('input-sobrenome').value = '';
    document.getElementById('input-cpf').value = '';
    document.getElementById('input-email').value = '';
    document.getElementById('input-senha').value = '';
}

function createTable() {
    var div = document.getElementById('table-form');
    
    const arrObj = getObject('register');

    if (arrObj === null) {
        const p = document.createElement('p');

        p.innerHTML = 'Nenhum Registro.';

        p.className = 'text-no-register';
        
        return div.appendChild(p);
    } else {
        const t = arrObj.length;
        const table = document.createElement('table');
        const trTitle = document.createElement('tr');
        const thNome = document.createElement('th');
        const thSobrenome = document.createElement('th');
        const thCpf = document.createElement('th');
        const thEmail = document.createElement('th');
    
        table.className = 'customers';
    
        thNome.innerHTML = 'Nome';
        thSobrenome.innerHTML = 'Sobrenome';
        thCpf.innerHTML = 'CPF';
        thEmail.innerHTML = 'E-mail';
    
        trTitle.appendChild(thNome);
        trTitle.appendChild(thSobrenome);
        trTitle.appendChild(thCpf);
        trTitle.appendChild(thEmail);
    
        table.appendChild(trTitle);

        for (let i = 0; i < t; i++) {
            const tr = document.createElement('tr');

            const tdNome = document.createElement('td');
            const tdSobrenome = document.createElement('td');
            const tdCpf = document.createElement('td');
            const tdEmail = document.createElement('td');

            tdNome.innerHTML = arrObj[i].nome;
            tdSobrenome.innerHTML = arrObj[i].sobrenome;
            tdCpf.innerHTML = arrObj[i].cpf;
            tdEmail.innerHTML = arrObj[i].email;

            tr.appendChild(tdNome);
            tr.appendChild(tdSobrenome);
            tr.appendChild(tdCpf);
            tr.appendChild(tdEmail);

            table.appendChild(tr);
        }
        return div.appendChild(table);
    }
}