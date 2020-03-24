var fs = require('fs');
var shell = require('shelljs');
var sass = require('node-sass');

shell.echo('Creating a patch folder');
shell.rm('-rf', 'node_modules/materialize-css/sass-patch');
shell.cp('-R', 'node_modules/materialize-css/sass', 'node_modules/materialize-css/sass-patch');

var varScssFile = 'node_modules/materialize-css/sass-patch/components/_variables.scss';
shell.echo('Patching the file with secondary color');
shell.sed('-i', 'secondary-color: color\\("teal", "lighten-1"\\)',
                'secondary-color: color("blue", "lighten-1")',
                varScssFile);

shell.echo('Creating css file');
var scssFile = 'node_modules/materialize-css/sass-patch/materialize.scss';
var outFile ='node_modules/materialize-css/sass-patch/materialize.css';
sass.render({
  file: scssFile,
  },
  function(err, result){
    console.log(err);
    if(!err){
      fs.writeFile(outFile, result.css, function(err){
        console.log('sass cbk');
        if(!err){
          console.log('Successfully written to file ', outFile);
          shell.echo('Cleaning up');
          shell.rm('-rf', 'node_modules/materialize-css/sass-patch/components');
        }
      });
    }
  }

);
