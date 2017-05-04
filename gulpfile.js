var gulp = require("gulp");
var util = require("gulp-util");
var fs = require("fs");
var replace = require("stream-replace");


gulp.task("novaPagina", function(){
    const ROOT_DESTINO = "./containers/pages/";
    const ORIGEM  = "./dev/page/Template.js";
    var nome =  util.env.nome;
    fs.createReadStream( ORIGEM )
        .pipe(replace(/NOME/g,nome))
        .pipe(fs.createWriteStream(ROOT_DESTINO+util.env.nome+'.js'));
    console.log("Adicione a pagina no arquivo Root.js(/containers/Root.js) "+ROOT_DESTINO+util.env.nome+'.js')
});

