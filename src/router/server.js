var sql = require('mssql');

var config = {
    user: 'sa',
    password: 'dnjem!1',
    server: 'localhost',
    port: '1433',
    database: 'Shopping',
    stream: true
}

function Test() {
    //sql.connect(config);
    sql.connect(config, function(err) {
        var request = new sql.Request();
        request.stream = true;
        request.query('select top 10 * from sys.all_objects');
    
        request.on('row', function(row) {
            console.log('name      : '+ row.name); 
            console.log('object_id : '+ row.object_id);
            console.log(''); 
        });
    
        request.on('error', function(err) {
            console.log(err); 
        });
    
        request.on('done', function(returnValue) {
            console.log('Data End'); 
        });
    });
}