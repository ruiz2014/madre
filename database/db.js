const { Sequelize } = require('sequelize');

const db = new Sequelize(
  'almacen', // Nombre de la base de datos
  'root',          // Nombre de usuario
  '<@3!re1978.R',       // Contraseña
  {
    host: '127.0.0.1',          // Host de tu base de datos
    dialect: 'mysql',           // El dialecto de tu base de datos
    // Puedes añadir otras opciones de configuración aquí, como:
    // port: 3306,
    // logging: false // para no ver las consultas SQL en la consola
  }
);

module.exports = db;