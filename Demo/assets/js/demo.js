
window.addEvent('domready', function(){
    
    $$('article').each(function(article, i){
        var source = article.getElement('.grabcode').get('html'),
            target = article.getElement('.code');
        target.set('html', '<h2>Code</h2><pre><code>'+source.replace(/</g, '&lt;').replace(/class="scroller"/g, '')+'</code></pre>');
    });
    
    $$('.scroller').set(
        'html', 
        '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisi, adipiscing sit amet dictum auctor, placerat vitae lorem. Aliquam auctor est erat. Fusce massa nibh, euismod a dignissim eu, interdum eget leo. Vestibulum ut quam ut ante rhoncus consequat ut in diam. Aenean interdum consectetur diam a fermentum. Nam ac est vel orci congue tempus. Sed vulputate iaculis condimentum. Morbi consectetur venenatis lectus, laoreet luctus elit tempus ut. Etiam lobortis odio et diam sagittis et vehicula ante viverra. In eu porta massa. Praesent volutpat feugiat sapien, eu mollis arcu varius ut.</p>'
        +'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisi, adipiscing sit amet dictum auctor, placerat vitae lorem. Aliquam auctor est erat. Fusce massa nibh, euismod a dignissim eu, interdum eget leo. Vestibulum ut quam ut ante rhoncus consequat ut in diam. Aenean interdum consectetur diam a fermentum. Nam ac est vel orci congue tempus. Sed vulputate iaculis condimentum. Morbi consectetur venenatis lectus, laoreet luctus elit tempus ut. Etiam lobortis odio et diam sagittis et vehicula ante viverra. In eu porta massa. Praesent volutpat feugiat sapien, eu mollis arcu varius ut.</p>'
        +'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisi, adipiscing sit amet dictum auctor, placerat vitae lorem. Aliquam auctor est erat. Fusce massa nibh, euismod a dignissim eu, interdum eget leo. Vestibulum ut quam ut ante rhoncus consequat ut in diam. Aenean interdum consectetur diam a fermentum. Nam ac est vel orci congue tempus. Sed vulputate iaculis condimentum. Morbi consectetur venenatis lectus, laoreet luctus elit tempus ut. Etiam lobortis odio et diam sagittis et vehicula ante viverra. In eu porta massa. Praesent volutpat feugiat sapien, eu mollis arcu varius ut.</p>'
        +'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisi, adipiscing sit amet dictum auctor, placerat vitae lorem. Aliquam auctor est erat. Fusce massa nibh, euismod a dignissim eu, interdum eget leo. Vestibulum ut quam ut ante rhoncus consequat ut in diam. Aenean interdum consectetur diam a fermentum. Nam ac est vel orci congue tempus. Sed vulputate iaculis condimentum. Morbi consectetur venenatis lectus, laoreet luctus elit tempus ut. Etiam lobortis odio et diam sagittis et vehicula ante viverra. In eu porta massa. Praesent volutpat feugiat sapien, eu mollis arcu varius ut.</p>'
        +'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisi, adipiscing sit amet dictum auctor, placerat vitae lorem. Aliquam auctor est erat. Fusce massa nibh, euismod a dignissim eu, interdum eget leo. Vestibulum ut quam ut ante rhoncus consequat ut in diam. Aenean interdum consectetur diam a fermentum. Nam ac est vel orci congue tempus. Sed vulputate iaculis condimentum. Morbi consectetur venenatis lectus, laoreet luctus elit tempus ut. Etiam lobortis odio et diam sagittis et vehicula ante viverra. In eu porta massa. Praesent volutpat feugiat sapien, eu mollis arcu varius ut.</p>'
        +'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisi, adipiscing sit amet dictum auctor, placerat vitae lorem. Aliquam auctor est erat. Fusce massa nibh, euismod a dignissim eu, interdum eget leo. Vestibulum ut quam ut ante rhoncus consequat ut in diam. Aenean interdum consectetur diam a fermentum. Nam ac est vel orci congue tempus. Sed vulputate iaculis condimentum. Morbi consectetur venenatis lectus, laoreet luctus elit tempus ut. Etiam lobortis odio et diam sagittis et vehicula ante viverra. In eu porta massa. Praesent volutpat feugiat sapien, eu mollis arcu varius ut.</p>'
        +'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisi, adipiscing sit amet dictum auctor, placerat vitae lorem. Aliquam auctor est erat. Fusce massa nibh, euismod a dignissim eu, interdum eget leo. Vestibulum ut quam ut ante rhoncus consequat ut in diam. Aenean interdum consectetur diam a fermentum. Nam ac est vel orci congue tempus. Sed vulputate iaculis condimentum. Morbi consectetur venenatis lectus, laoreet luctus elit tempus ut. Etiam lobortis odio et diam sagittis et vehicula ante viverra. In eu porta massa. Praesent volutpat feugiat sapien, eu mollis arcu varius ut.</p>'
        +'<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisi, adipiscing sit amet dictum auctor, placerat vitae lorem. Aliquam auctor est erat. Fusce massa nibh, euismod a dignissim eu, interdum eget leo. Vestibulum ut quam ut ante rhoncus consequat ut in diam. Aenean interdum consectetur diam a fermentum. Nam ac est vel orci congue tempus. Sed vulputate iaculis condimentum. Morbi consectetur venenatis lectus, laoreet luctus elit tempus ut. Etiam lobortis odio et diam sagittis et vehicula ante viverra. In eu porta massa. Praesent volutpat feugiat sapien, eu mollis arcu varius ut.</p>'
    );
});