(function(doc, win) {
    document.addEventListener('DOMContentLoaded', function() {
            if (window.FastClick) {window.FastClick.attach(document.body);}
        }, false);

    var _root = doc.documentElement,
        resizeEvent = 'orientationchange' in win ? 'orientationchange' : 'resize',
        resizeCallback = function() {
            var clientWidth = _root.clientWidth;
            _root.style.fontSize = parseInt(clientWidth / 7.5) + 'px';
            document.body && (document.body.style.fontSize = 0.28 + 'rem');
        };

    if (!doc.addEventListener) {return;}
    win.addEventListener(resizeEvent, resizeCallback, false);
    doc.addEventListener('DOMContentLoaded', resizeCallback, false);
})(document, window);
window.PointerEvent = undefined;