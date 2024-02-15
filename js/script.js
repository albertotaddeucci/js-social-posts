
//array di oggetti che rappresentano singoli post
const posts = [
    {
      id: 1,
      author: "Mario Rossi",
      photo: "https://fastly.picsum.photos/id/656/150/150.jpg?hmac=cVwVPMxkfGYiZQg0FNIk7_OJA7qbWSiwZ9WU0J8QuGQ",
      date: "09-15-2023",
      text: "Questo è il primo post!",
      image: "https://fastly.picsum.photos/id/1049/500/350.jpg?hmac=rLYoBRfn-8WmagqQddBaNWKagYz5scRilAOtNVj8Aak",
      likes: 10,
    },
    {
      id: 2,
      author: "Luigi Verdi",
      photo: "https://fastly.picsum.photos/id/30/150/150.jpg?hmac=oWRixVFbKVj8pf77bpmaIn4kHjJYnw5EHEwl0LSYTMQ",
      date: "11-27-2023",
      text: "Un altro post interessante...",
      image: "https://fastly.picsum.photos/id/590/500/350.jpg?hmac=VtiOJf5l-brYbljXI13Fv7IB58h9q1UZF2ayi03CET8",
      likes: 25,
    },
    {
      id: 3,
      author: "Alice Bianchi",
      photo: "https://fastly.picsum.photos/id/306/150/150.jpg?hmac=e_YpJsqiL4M4eHqvxPS_USwyFCqj_uhw46cTH1L037M",
      date: "02-13-2024",
      text: "Condivido questa bella foto!",
      image: "https://fastly.picsum.photos/id/391/500/350.jpg?hmac=Vc4aNyqB1sibkCj6haOxC-H-CBCFg9jWAtPAAW4zOhg",
      likes: 50,
    },    
];

//variabile che bersaglia html
const mainElement = document.getElementById("main-element");

posts.forEach(actualPost => {

    const postElement = document.createElement("div");

    const rowElement = document.createElement("div");

    const photoContainerElement = document.createElement("div");
    const infoElement = document.createElement("div");
    const textElement = document.createElement("p");
    const imgContainerElement = document.createElement("div");
    

    for(let key in actualPost){
        if (key == "author"){
            const authorElement = document.createElement("h2");
            authorElement.innerHTML = actualPost.author;
            infoElement.append(authorElement);
        } else if (key == "photo"){
            const photoElement = document.createElement("img");
            photoElement.src = actualPost.photo;
            photoContainerElement.append(photoElement);            
        } else if (key == "date"){
            const dateElement = document.createElement("div");
            dateElement.innerHTML = actualPost.date;
            infoElement.append(dateElement);            
        } else if (key == "image"){
            const imgElement = document.createElement("img")
            imgElement.src = actualPost.image;
            imgContainerElement.append(imgElement);
        }
    }

    mainElement.append(postElement);

    postElement.append(rowElement);
    rowElement.append(photoContainerElement,infoElement);
    postElement.append(textElement);
    postElement.append(imgContainerElement);





})