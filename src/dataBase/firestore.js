// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCjwKZy1xmWVk4SUenjjWjvbw4Kx0EUDK8",
    authDomain: "reactperri.firebaseapp.com",
    projectId: "reactperri",
    storageBucket: "reactperri.appspot.com",
    messagingSenderId: "906454503260",
    appId: "1:906454503260:web:f13b72483ad2595d7bfb99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getData() {
    const miColleccion = collection(firestore, "libros");
    let respuesta = await getDocs(miColleccion);

    let dataDocs = respuesta.docs.map((documento) => {
        let docFormateado = { ...documento.data(), id: documento.id }
        return docFormateado
    });
    return dataDocs;
}

export async function geItem(idParams) {
    const docRef = doc(firestore, "libros", idParams);
    const docSnapshot = await getDoc(docRef);

    return { ...docSnapshot.data(), id: docSnapshot.id };
}
export async function getItemsCategory(catParams) {
    const collectionRef = collection(firestore, "productos");
    const queryCat = query(collectionRef, where("categoria", "==", catParams));
    const respuesta = await getDocs(queryCat)
    let dataDocs = respuesta.docs.map(documento => {
        let docFormateado = { ...documento.data(), id: documento.id }
        return docFormateado;
    })
    return dataDocs
}
export default firestore;