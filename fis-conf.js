
fis.match('*.{js,css,png}', {
    useHash:true
});

//fis.match('::packager',{
//    spriter:fis.plugin('csssprites')
//});
 //fis.match('*', {
 //  useHash: false
 //});

// fis.match('*.js', {
//   optimizer: fis.plugin('uglify-js')
// });

// fis.match('*.css', {
//   useSprite: true,
//   optimizer: fis.plugin('clean-css')
// });
fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});
// fis.match('*.png', {
//   optimizer: fis.plugin('png-compressor')
// });
fis.media('hi').match('*.{js,css,png}', {
    useHash: false,
    useSprite:false,
    optimizer:null
});
