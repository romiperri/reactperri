const data = [
    {
        id: 1,
        title: "Orgullo y Prejuicio",
        price: 5400,
        gender: "Novela romántica",
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
        category: "Ficción",
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

export function geItem() {
    return new Promise((resolve, rejetc) => {
        setTimeout(() => {
            resolve(data[1]);
        }, 2000);
    });
}