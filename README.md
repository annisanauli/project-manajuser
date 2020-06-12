# Manajemen User

## Instalasi
Untuk menginstal aplikasi ini, clone/download terlebih dahulu dengan :

![Screenshot_1](https://user-images.githubusercontent.com/43631445/84479920-e93b5e80-acbd-11ea-8516-3530b3b46f07.png)


atau dapat dengan menjalankan perintah :
```sh
git clone https://github.com/annisanauli/project-manajuser.git
```

### Database
Sesuaikan konfigurasi database anda pada file ```database.js``` yang terdapat pada folder config backend
```sh
const sequelize = new Sequelize(
  'manajuser_db',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);
```
Kemudian import database ```manajuser_db.sql``` pada localhost phpMyAdmin

### Backend
Jalankan backend melalui terminal/cmd dengan perintah :
```sh
$ cd project-backend
$ npm run dev
```
Backend akan berjalan pada ```http://localhost:3000```

### Frontend
Selanjutnya jalankan juga frontend pada terminal yang berbeda dengan perintah
```sh
$ cd project-frontend
$ npm start
```
Frontend akan berjalan pada port lain yaitu ```http://localhost:3001```. 
Secara otomatis, tab browser akan membuka aplikasinya, namun bila tidak langsung terbuka dapat mengetikkan ```http://localhost:3001``` pada browser.

### Testing
Untuk melakukan testing pada frontend, jalankan perintah dibawah untuk instalasi Jest dan Enzyme
```sh
$ npm i -D react-test-renderer                  //Jest
$ npm i -D enzyme enzyme-adapter-react-16       //Enzyme
```
Mulai lakukan test dengan jalankan perintah 
```sh
npm run test
npm run test:coverage
``` 

### Teknologi
1. Frontend : React JS, AdminLTE
2. Backend : Node JS, Sequelize
3. Database : MySQL
4. REST API : Express, Axios



