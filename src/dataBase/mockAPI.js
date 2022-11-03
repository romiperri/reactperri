const data = [
    {
        id: 1,
        title: "Orgullo y Prejuicio",
        author: "Jane Austen",
        price: 2590,
        genre: "Novela de época",
        sinopsis: "Satírica, antirromántica, profunda y mordaz a un tiempo, la obra de Jane Austen nace de la observación de la vida doméstica y de un profundo conocimiento de la condición humana. Orgullo y prejuicio ha fascinado a generaciones de lectores por sus inolvidables personajes y su desopilante retrato de una sociedad, la Inglaterra victoriana y rural, tan contradictoria como absurda. Con la llegada del rico y apuesto señor Darcy a su región, las vidas de los Bennet y sus cinco hijas se vuelven del revés. El orgullo y la distancia social, la astucia y la hipocresía, los malentendidos y los juicios apresurados abocan a los personajes al escándalo y al dolor, pero también a la comprensión, el conocimiento y el amor verdadero.",
        img: "/img/JaneAusten-OrgulloYPrejuicio.png",
        stock: 5,
        category: "Romance",
    },
    {
        id: 2,
        title: "Cien años de soledad",
        author: "Gabriel García Márquez",
        price: 4500,
        genre: "Ficción épica",
        sinopsis: "Señalada como «catedral gótica del lenguaje», este clásico del siglo XX es el enorme y espléndido tapiz de la saga de la familia Buendía, en la mítica aldea de Macondo.Un referente imprescindible de la vida y la narrativa latinoamericana.«Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo. Macondo era entonces una aldea de veinte casas de barro y cañabrava construidas a la orilla de un río de aguas diáfanas que se precipitaban por un lecho de piedras pulidas, blancas y enormes como huevos prehistóricos. El mundo era tan reciente, que muchas cosas carecían de nombre, y para mencionarlas había que señalarlas con el dedo.»Con estas palabras empieza la novela ya legendaria en los anales de la literatura universal, una de las aventuras literarias más fascinantes de nuestro siglo. Millones de ejemplares de Cien años de soledad leídos en todas las lenguas y el Premio Nobel de Literatura coronando una obra que se había abierto paso «boca a boca» -como gusta decir al escritor- son la más palpable demostración de que la aventura fabulosa de la familia Buendía-Iguarán, con sus milagros, fantasías, obsesiones, tragedias, incestos, adulterios, rebeldías, descubrimientos y condenas, representaba al mismo tiempo el mito y la historia, la tragedia y el amor del mundo entero.Pablo Neruda dijo...«El Quijote de nuestro tiempo.»",
        img: "/img/GabrielGarciaMarquez.jpg",
        stock: 2,
        category: "Ficcion",
    },
    {
        id: 3,
        title: "La isla de los amores infinitos",
        author: "Daína Chaviano",
        price: 2500,
        genre: "Ficción histórica",
        sinopsis: "La isla de los amores infinitos es una novela de la escritora cubana Daína Chaviano, donde se aborda la fusión de las tres etnias que componen la nación cubana: española, africana y china. La música juega un papel clave en esta obra: cada capítulo lleva el título o línea de un bolero.",
        img: "/img/LaIsla.jpg",
        stock: 10,
        category: "Romance",
    },
]

export default function getData() {
    return new Promise((resolve, rejetc) => {
        setTimeout(() => {
            resolve(data)
        }, 2500)
    });
}

export function geItem(idItem) {
    return new Promise((resolve, rejetc) => {
        let itemFind = data.find((item) => {
            return item.id === parseInt(idItem);
        });
        setTimeout(() => {
            if (itemFind) resolve(itemFind);
            else rejetc(new Error('Item no encontrado'));
        }, 2000);
    });
}

export function getItemsCategory(cat) {

    return new Promise((resolve, rejetc) => {

        let itemFind = data.filter((item) => {
            return item.category === cat;
        });
        setTimeout(() => {
            if (itemFind) resolve(itemFind);
            else rejetc(new Error('Item no encontrado'));
        }, 2000);
    });

}