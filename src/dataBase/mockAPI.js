const data = [
    {
        id: 1,
        title: "Orgullo y Prejuicio",
        author: "Jane Austen",
        price: 5400,
        gender: "Novela de época",
        sinopsis: "Satírica, antirromántica, profunda y mordaz a un tiempo, la obra de Jane Austen nace de la observación de la vida doméstica y de un profundo conocimiento de la condición humana. Orgullo y prejuicio ha fascinado a generaciones de lectores por sus inolvidables personajes y su desopilante retrato de una sociedad, la Inglaterra victoriana y rural, tan contradictoria como absurda. Con la llegada del rico y apuesto señor Darcy a su región, las vidas de los Bennet y sus cinco hijas se vuelven del revés. El orgullo y la distancia social, la astucia y la hipocresía, los malentendidos y los juicios apresurados abocan a los personajes al escándalo y al dolor, pero también a la comprensión, el conocimiento y el amor verdadero.",
        img: "/img/JaneAusten-OrgulloYPrejuicio.png",
        stock: 5,
        category: "Romance",
    },
    {
        id: 2,
        title: "Cien años de soledad",
        price: 8500,
        gender: "Ficción épica",
        img: "/img/GabrielGarciaMarquez.jpg",
        stock: 2,
        category: "Ficcion",
    },
    {
        id: 3,
        title: "La isla de los amores infinitos",
        price: 2500,
        gender: "Ficción histórica",
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