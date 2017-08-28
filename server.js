var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

var app = express();
app
	.get('/', function(req, res){
			res.sendFile(path.join(__dirname+'/app/pages/index.html'));
	})
	.use(serveStatic(__dirname + '/public'))
	.use(error)
	.listen(3000)

function error(req, res){
	res.end('error');
}

//Tests
if (require.main.filename == '/usr/local/lib/node_modules/mocha/bin/_mocha') {
  var assert = require('assert');
  describe('server', function(){
  	it('should return all of the .use functions, in this case error', function(done){
  		var req = { 
        method: 'POST',
        url: '/'
      };
  		var res = { 
    		end: function(string){

          //console.log('string', string);
          assert(true);
    			done();
    		},
        setHeader: function(){

        }
    	};
  		//test starts here
      
      app(req, res);
  	});
  });
}