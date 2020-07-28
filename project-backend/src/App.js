const app = require('./index');
app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'),()=>{
  console.log("Start server on port "+app.get('port'))
});

