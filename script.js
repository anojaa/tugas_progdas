const kotaTujuan = [
    'Surabaya',
    'Malang',
    'Solo'
]

const namaKereta = [
    'Gajahyana',
    'Dhoho',
    'Penataran'
]

const kelasKereta = [
    'Ekonomi',
    'Standar',
    'Ekslusif'
]

const hargaTiket = [
    20000,
    50000,
    100000
]


var kota = document.querySelector('#nama_kota');
var kereta = document.querySelector('#nama_kereta');
var kelas = document.querySelector('#nama_kelas');
var html = '';

// perulangan untuk memasukkan list array menjadi seubuah opsi

    // perulangan kota 
    kotaTujuan.forEach((e,v) => {
        html += `<option value="${v}">${e}</option>`
    })
    kota.innerHTML = html
    html = ''

    // perulangan kereta
    namaKereta.forEach((e,v) => {
        html += `<option value="${v}">${e}</option>`
    })
    kereta.innerHTML = html
    html = ''

    // perulangan kelas
    kelasKereta.forEach((e,v) => {
        html += `<option value="${v}">${e}</option>`
    })
    kelas.innerHTML = html
    html = ''



function pesan() {

    let formStruk = document.querySelector('#form-struk')

    let namaPembeli = document.querySelector('#nama_pembeli').value;
    let inputKota = document.querySelector('#nama_kota').value;
    let inputKereta = document.querySelector('#nama_kereta').value;
    let inputKelas = document.querySelector('#nama_kelas').value;
    let jumlahTiket = document.querySelector('#jumlah_tiket').value;

    let tujuan = kotaTujuan[inputKota];
    let kereta = namaKereta[inputKereta];
    let harga  = hargaTiket[inputKelas];
    let kelas  = kelasKereta[inputKelas];

    if(tujuan=='Surabaya' && kereta != 'Gajahyana'){
        HTML = `<p>Data Tiket Tidak Ditemukan</p>`
    }
    else if(tujuan == 'Malang' && kereta != 'Dhoho'){
        HTML = `<p>Data Tiket Tidak Ditemukan</p>`
    }else if(tujuan == 'Solo' && kereta != 'Penataran'){
        HTML = `<p>Data Tiket Tidak Ditemukan</p>`
    }else{

        let totalHargaTiket = jumlahTiket*harga
    
        HTML = `
            <p> Atas Nama : ${namaPembeli} </p>
            <p> Kota Tujuan: ${tujuan} </p>
            <p> Kelas Kereta: ${kelas} </p>
            <p> Harga Tiket: ${harga} </p>
            <p> Jumlah Pembelian Tiket: ${jumlahTiket} </p>
            <p> Total Harga TIket: ${totalHargaTiket} </p>
        `
    }


    formStruk.innerHTML = HTML

}