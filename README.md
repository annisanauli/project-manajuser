# Manajemen User

## Instalasi
Untuk instal aplikasi ini, clone/download dengan memilih Download ZIP : 

![screenshoot](https://user-images.githubusercontent.com/43631445/84107020-de2ac900-aa46-11ea-9811-cc16e8b465de.png)

atau menjalankan perintah :
```
$ git clone https://github.com/annisanauli/project-manajuser.git
```
### Database 
Sesuaikan konfigurasi database anda pada file config.js yang terdapat pada backend
```sh 
const sequelize = new Sequelize(
  'manajuser_db', //database name
  'root',         //username
  '',             //password
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
```
Kemudian import file database ``` manajuser_db.sql``` ke localhost phpMyAdmin

### Backend
Selanjutnya jalankan backend melalui terminal dengan perintah 
```sh
$ cd project-backend
$ npm run dev
```
Backend akan berjalan pada ``` http://localhost:3000/ ```

### Frontend
Jalankan frontend pada terminal yang berbeda
```
$ cd project-frontend
$ npm start
```
Frontend akan dijalankan pada ``` http://localhost:3001/``` dan akan terbuka sebuah tab di browser yang berisi projek yang sudah dijalankan.
Jika tidak terbuka, silahkan buka di browser dan tuliskan ``` http://localhost:3001/```

## Teknologi 
Berikut teknologi yang digunakan pada sistem ini :
1. Backend : Node JS
2. Frontend : React JS, AdminLTE
3. Database : MySQL
4. REST API : Express, Axios

