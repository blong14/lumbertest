'use strict';

module.exports = function(app) {
  const mysqlDev = app.dataSources.mysqlDev,
        Student = app.models.Student;

  mysqlDev.autoupdate('Student', function(err) {
    if (err) throw err;
    console.log('\nAutoupdated table `Student`.');
  });
};
