import carSharing from '../../images/carSharing.png';
import bestShop from '../../images/bestShop.png';
import clothes from '../../images/clothes.png';
import rumholic from '../../images/rumholic.png';

const projects =[
    {
        name:"Best Shop",
        description:"Jest to projekt który rozbudowywałem wraz z poznanymi technologiami.",
        technology:"HTML, CSS, JS, Sass, RWD, Gulp",
        img:bestShop,
        link:'https://github.com/FilipowiczP/BestShop'
    },
    {
        name:"Car Sharing",
        description:"Jeden z moich pierwszych projektów przedstawiający wypożyczalnię aut.",
        technology:"HTML, CSS",
        img:carSharing,
        link:'https://github.com/FilipowiczP/CarSharing'
    },
    {
        name:"Give Clothes",
        description:"Projekt służący pomocy potrzebującym. Po zalogowaniu wypełniamy formularz w którym możemy wskazać miejsce i osobę której chcemy pomóc.",
        technology:"React, Sass, RWD, Npm, Firebase",
        img:clothes,
        link:'https://github.com/FilipowiczP/GiveClothes'
    },
    {
        name:"rumholic.pl",
        description:"Jest to blog opisujący świat rumów. Część funkcji jest wyłączona z użytku, ponieważ klient na chwilę " + 
        "obecną nie posiada wystarczającej ilości treści.",
        technology:"React, Sass, RWD, Npm",
        img:rumholic,
        link:'https://github.com/FilipowiczP/Rumhoolic'
    }
]

export default projects;