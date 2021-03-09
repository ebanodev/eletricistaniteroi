let callbackScroll = (entries, ioScroll) => {
  
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    if (entry.isIntersecting)
	{
		
		content.classList.toggle('anim');
	}
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};

let content = document.querySelector('.content');
let optionScroll = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px 0px 150px 0px',
  threshold: 0
}

let ioScroll = new IntersectionObserver(callbackScroll, optionScroll);

ioScroll.observe(content);

