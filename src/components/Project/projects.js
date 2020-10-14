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
    },
    {
        name:"Car Sharing",
        description:"Jeden z moich pierwszych projektów przedstawiający wypożyczalnię aut.",
        technology:"HTML, CSS",
        img:carSharing,
    },
    {
        name:"Give Clothes",
        description:"Projekt służący pomocy. Na którym po zalogowaniu wypełniamy formularz w którym możemy wskazać miejsce i komu pomagamy.",
        technology:"React, Sass, RWD, Npm, Firebase",
        img:clothes,
    },
    {
        name:"rumholic.pl",
        description:"Jest to blog opisujący świat rumów. Część funkcji jest wyłączona z użytku, ponieważ klient na chwilę " + 
        "obecną nie posiada wystarczającą ilość treści.",
        technology:"React, Sass, RWD, Npm",
        img:rumholic,
    }
]

export default projects;