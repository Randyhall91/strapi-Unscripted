const path = require('path');

module.exports = ({ env }) => ({
  "defaultConnection": "default",
  "connections": {
    "default": {
      "connector": "bookshelf",
      "settings": {
        "client": "postgres",
        "host": env('DATABASE_HOST', '127.0.0.1'),
        "port": env('DATABASE__PORT', 27017),
        "database": env('DATABASE__NAME', 'strapi'),
        "username": env('DATABASE__USERNAME', ''),
        "password": env('DATABASE__PASSWORD', '')
      },
      "options": {
        "ssl": false
      }
    }
  }
});
