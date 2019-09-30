export default () => {
  window.WebFontConfig = {
    google: {families: ['Montserrat:400,600,700&amp;subset=latin-ext']},
  };

  (function (d) {
    let wf = d.createElement('script'), s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
    wf.async = true;
    s.parentNode.insertBefore(wf, s);
  })(document);

  console.log('blah?');
}
