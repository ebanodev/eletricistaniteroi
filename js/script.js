
//MENU ACENDENDO
function brightMenu() {
	
	
	var brightMenu = document.querySelector("ul.menu-items");
	brightMenu.classList.toggle('lightOn');
}

function changecolor(){
//pega o conteúdo texto do objeto .fancy e separa cada caracter em um array com a função split.

var brightBx = document.getElementById("brightBx");
brightBx.classList.add('changecolor');


setTimeout(function(){brightMenu();}, 1000);

/* const text = document.querySelector(".changecolor"); 
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = ""; //para tirar a duplicação que ocorre no textContent após o laço de adição da tag span pra cada letra


//laço para adição da tag span para cada letra da constante text
for (let i = 0; i < splitText.length; i++) 
{ text.innerHTML += "<span>" + splitText[i] + "</span>";   }

//Setando os intervalos para a animação executando a função da animação que adiciona a classe de efeito a cada tag span.

let char = 0;
let timer = setInterval(onTick, 5);

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('color');
    char++
    //para fazer o loop parar
    if (char === splitText.length) {
        complete();
        return;
    }
    function complete()
    {
        clearInterval(timer);
        timer = null;
		
    }
} */
}


//FANCY

function fancy(){
//pega o conteúdo texto do objeto .fancy e separa cada caracter em um array com a função split.
const text = document.querySelector(".fancy"); 
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = ""; //para tirar a duplicação que ocorre no textContent após o laço de adição da tag span pra cada letra


//laço para adição da tag span para cada letra da constante text
for (let i = 0; i < splitText.length; i++) 
{ text.innerHTML += "<span>" + splitText[i] + "</span>";   }

//Setando os intervalos para a animação executando a função da animação que adiciona a classe de efeito a cada tag span.

let char = 0;
let timer = setInterval(onTick, 50);
let animeTag = document.getElementById("animeTag")

function onTick() {
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    //para fazer o loop parar
    if (char === splitText.length) {
        complete();
        return;
    }
    function complete()
    {
        clearInterval(timer);
        timer = null;
		
		setTimeout(function(){changecolor();}, 800);
    }
}
}

//TYPED
fancy();
      
        
       



        //Inicia o typed quando estiver no viewport
const callback = (entries, observer) => {

    entries.forEach(entry => {
       let menuItems = document.querySelector(".menu-items")
		let acenderMenu = document.querySelector(".header")
		let portifolio = document.querySelector(".logo")
        if (entry.isIntersecting == false)              
        {
			acenderMenu.classList.add('acender');
		portifolio.innerHTML = "Ébano Assumpção";
        }
        else
        {
			
			portifolio.innerHTML = "Portifolio";
			acenderMenu.classList.remove('acender');
        };

      });
    };

let io = new IntersectionObserver(callback);
io.observe(document.querySelector('#brightBx'));
//toggleMenu();


			
//MENU MOBILE

        //para funcionar o menu no modo moblie
//			const menuToggle = document.querySelector('.toggle');
        const menu = document.querySelector('.menu-items'); 
        const btnMenu = document.querySelector('.menu-btn');
        const menuItem = document.querySelectorAll('.menu-item');	
const roll = document.querySelector('.roll');

        
        btnMenu.addEventListener('click', () => {toggle()});

        
        
        menuItem.forEach((item) =>
        {item.addEventListener("click", () => 
            {if (btnMenu.classList.contains("open")) 
                {toggle();}
             });
        });
        
        function toggle()
        {menu.classList.toggle('open');
        btnMenu.classList.toggle('open');
            roll.classList.toggle('nop');
//			menuToggle.classList.toggle('active'); 
        }
