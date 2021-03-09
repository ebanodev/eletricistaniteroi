var entries = [{
    
    image: 'img/c.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'Linguagem C'
  },
  {
    image: 'img/git.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'GIT'
  },
  {
    image: 'img/html.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'HTML'
  },
  {
    image: 'img/javascript.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'JavaScript'
  },
  {
    image: 'img/css.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'CSS'
  },
  {
    image: 'img/php.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'PHP'
  },
  {
    image: 'img/sql.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'SQL'
  },
  {
    image: 'img/gimp.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'Gimp'
  },
  {
    image: 'img/sass.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'Sass'
  },
  {
    image: 'img/Gnulinux.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'GNU/Linux'
  },
  {
    image: 'img/WordPress.svg',
    width: '100',
    height: '100',
    url: '#sobre',
    target: '_top',
    tooltip: 'WordPress'
  }




];

var settings = {

  entries: entries,
  width: '100%',
  height: '100%',
  radius: '60%',
  radiusMin: 30,
  radiusMax: 50,
  bgDraw: false,
  bgColor: 'transparent',
  opacityOver: 1.00,
  opacityOut: 0.05,
  opacitySpeed: 15,
  fov: 800,
  speed: 2,
  fontFamily: 'Anonymous Pro, sans-serif',
  fontSize: '14px',
  fontColor: 'black',
  fontWeight: 'normal', //bold
  fontStyle: 'normal', //italic 
  fontStretch: 'ultra-expanded', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
  fontToUpperCase: true,
  tooltipFontFamily: 'Oswald, Arial, sans-serif',
  tooltipFontSize: '16',
  tooltipFontColor: 'black',
  tooltipFontWeight: 'normal', //bold
  tooltipFontStyle: 'normal', //italic 
  tooltipFontStretch: 'normal', //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
  tooltipFontToUpperCase: false,
  tooltipTextAnchor: 'left',
  tooltipDiffX: 0,
  tooltipDiffY: 10

};

$('#tagcloud').svg3DTagCloud(settings);

