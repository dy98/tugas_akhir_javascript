function buatLogin() {
    // Tangkap Tag(tombol) yang id nya x
    let elem = document.getElementById('x');
    // Hilangkan tombol ketika di-klick
    elem.parentElement.removeChild(elem);

    // Buat element baru
    let p = document.createElement('p');
    // Buat kelas-nya
    p.className = 'tulisan-login';
    // Beri Tulsan element baru
    p.innerHTML = 'SILAHKAN MENDAFTAR';

    // Ambil Tag div yang pertama
    let divBaru = document.getElementsByTagName('div')[0];
    // Taruh Tag p -nya kedalam div
    divBaru.appendChild(p);

    // Start FORM

    // Buat element baru, yaitu element form
    let form = document.createElement('FORM');
    // Truh element form kedalam div tadi
    divBaru.appendChild(form);

    form.method = '';

    form.action = '';

    form.enctype = 'multipart/form-data';

    // End FORM

    // Start FORM INPUT USERNAME

    // Buat element baru(Label)
    let labelUser = document.createElement('label');
    // Beri tulisan pada Label
    labelUser.innerHTML = 'Nama User';
    // Taruh Tag label tadi kedalam div juga
    form.appendChild(labelUser);

    // Buat element baru(input) untuk username
    let inputNamaUser = document.createElement('input');
    // Beri input-nya type="text"
    inputNamaUser.type = 'text';
    // Beri input-nya name="username"
    inputNamaUser.name = 'nama-user';
    // Beri input-nya placeholder
    inputNamaUser.placeholder = 'Nama User..';
    // Beri nama Class
    inputNamaUser.className = 'form-login';
    // Taruh Tag input ke dalam tag div juga
    form.appendChild(inputNamaUser);

    // End FORM INPUT USERNAME
   
    // START FORM INPUT PASSOWRD

    // Buat element baru(Label)
    let labelHandphone = document.createElement('label');
    // Beri tulisan pada Label
    labelHandphone.innerHTML = 'Nomor Handphone';
    // Taruh Tag label tadi kedalam div juga
    form.appendChild(labelHandphone);

    // Buat element baru(input) untuk password
    let inputNomorHp = document.createElement('input');
    // Beri input-nya type="text"
    inputNomorHp.type = 'text';
    // Beri input-nya name="username"
    inputNomorHp.name = 'nomor-handphone';
    // Beri input-nya placeholder
    inputNomorHp.placeholder = 'Nomor Handphone..';
    // Beri nama Class
    inputNomorHp.className = 'form-login';
    // Taruh Tag input ke dalam tag div juga
    form.appendChild(inputNomorHp);

    // END FORM INPUT PASSOWRD

    // Start FORM INPUT USERNAME

    // Buat element baru(Label)
    let labelUsername = document.createElement('label');
    // Beri tulisan pada Label
    labelUsername.innerHTML = 'Username';
    // Taruh Tag label tadi kedalam div juga
    form.appendChild(labelUsername);

    // Buat element baru(input) untuk username
    let inputUsername = document.createElement('input');
    // Beri input-nya type="text"
    inputUsername.type = 'text';
    // Beri input-nya name="username"
    inputUsername.name = 'username';
    // Beri input-nya placeholder
    inputUsername.placeholder = 'Username..';
    // Beri nama Class
    inputUsername.className = 'form-login';
    // Taruh Tag input ke dalam tag div juga
    form.appendChild(inputUsername);

    // End FORM INPUT USERNAME

    // START FORM INPUT PASSOWRD

    // Buat element baru(Label)
    let labelPassword = document.createElement('label');
    // Beri tulisan pada Label
    labelPassword.innerHTML = 'Password';
    // Taruh Tag label tadi kedalam div juga
    form.appendChild(labelPassword);

    // Buat element baru(input) untuk password
    let inputPassword = document.createElement('input');
    // Beri input-nya type="text"
    inputPassword.type = 'password';
    // Beri input-nya name="username"
    inputPassword.name = 'password';
    // Beri input-nya placeholder
    inputPassword.placeholder = 'Password..';
    // Beri nama Class
    inputPassword.className = 'form-login';
    // Taruh Tag input ke dalam tag div juga
    form.appendChild(inputPassword);

    // END FORM INPUT PASSOWRD
    
    // START Tombol SUBMIT

    // Buat element baru(TOMBOL)
    let tombol = document.createElement('button');
    // Beri tulisan pada tombol
    tombol.innerHTML = 'Login';
    // Beri input-nya type="submit"
    tombol.type = 'submit';
    // Beri input-nya name="username"
    tombol.name = 'login';
    // Beri nama Class
    tombol.className = 'tombol-login';
    // Taruh Tag input ke dalam tag div juga
    form.appendChild(tombol);

    // END FORM INPUT PASSOWRD

}
