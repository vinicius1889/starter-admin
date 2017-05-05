var gulp = require("gulp");
var util = require("gulp-util");
var fs = require("fs");
var replace = require("stream-replace");
var war = require("gulp-war");
var zip = require("gulp-zip");

gulp.task("novaPagina", function(){
    const ROOT_DESTINO = "./containers/pages/";
    const ORIGEM  = "./dev/page/Template.txt";
    var nome =  util.env.nome;
    fs.createReadStream( ORIGEM )
        .pipe(replace(/NOME/g,nome))
        .pipe(fs.createWriteStream(ROOT_DESTINO+util.env.nome+'.js'));
    console.log("Adicione a pagina no arquivo Root.js(/containers/Root.js) "+ROOT_DESTINO+util.env.nome+'.js')
});



gulp.task("buildWar",function(){
   console.log("certifique-se que o /dist está atualizado.")
    var arr  = [
                "./dist/js/**",
                "./dist/fonts/**",
                "./dist/images/**",
                "./dist/css/*.css"
                ];
    gulp.src(arr,{base: './dist/'})
        .pipe(war({
            welcome: 'index.html',
            displayName: 'Grunt WAR',
        }))
        .pipe(zip('app.war'))
        .pipe(gulp.dest("./war"));



});
