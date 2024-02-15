
//array di oggetti che rappresentano singoli post
const posts = [
    {
      id: 1,
      author: "Mario Rossi",
      photo: "",
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

const arrayIdLiked = []

posts.forEach((actualPost,index) => {

    
    
    

    //variabili per creare elementi da mettere in pagina
    const postElement = document.createElement("div");
    postElement.classList = "col-8 bg-body-secondary mb-5";

    const rowElement = document.createElement("div");
    rowElement.classList = "row pt-2 align-items-center"

    const photoContainerElement = document.createElement("div");
    photoContainerElement.classList = "col-3"
    

    const infoElement = document.createElement("div");
    infoElement.classList = "col-9"

    const textElement = document.createElement("p");
    textElement.classList = "pt-3"

    const imgContainerElement = document.createElement("div");

    const rowButton = document.createElement("div")
    rowButton.classList = "row row-cols-2 justify-content-around my-3 align-items-center"


    const buttonLeftElement = document.createElement("button");
    buttonLeftElement.innerHTML = "Mi piace"
    buttonLeftElement.classList = " fw-bold col-3 ms-5 border-0 bg-body-secondary"

    const spanElement = document.createElement("span");
    spanElement.classList = " fw-bold col-5"
    spanElement.innerHTML = `Piace a ${actualPost.likes} persone`
    

    for(let key in actualPost){
        if (key == "author"){
            const authorElement = document.createElement("h3");
            authorElement.innerHTML = actualPost.author;
            authorElement.classList = "m-0 fs-4"

            infoElement.append(authorElement);
        } else if (key == "photo"){
            const photoElement = document.createElement("img");
            
            //se manca la foto-profilo
            if(actualPost.photo == ""){
                const substitutePhotoElement = document.createElement("div");
                let NameMaiusc = actualPost.author.charAt(0).toUpperCase();
                let SurMaiusc = actualPost.author.charAt(actualPost.author.indexOf(" ")+1).toUpperCase();
                substitutePhotoElement.innerHTML = NameMaiusc + SurMaiusc
                substitutePhotoElement.classList = "text-center mt-3 fw-bold"

                photoContainerElement.append(substitutePhotoElement);
            } else {
                photoElement.src = actualPost.photo;
                
            }


            photoElement.style = "width: 70px; border-radius: 50%"

            photoContainerElement.append(photoElement);            
        } else if (key == "date"){
            const dateElement = document.createElement("div");
            dateElement.innerHTML = new Date(actualPost.date).toLocaleDateString('it-IT');


            dateElement.classList = "fs-6"

            infoElement.append(dateElement);            
        } else if (key == "image"){
            const imgElement = document.createElement("img");
            imgElement.src = actualPost.image;

            imgElement.style = "width: 100%"

            imgContainerElement.append(imgElement);
        } else if (key == "text"){
            textElement.innerHTML = actualPost.text;

        }
    }

    buttonLeftElement.addEventListener("click",function(){
        
        if (!this.classList.contains("active")){
            document.querySelector(`#main-element div:nth-of-type(${index+1}) span`).innerHTML = `Piace a ${actualPost.likes++ + 1} persone`
            document.querySelector(`#main-element div:nth-of-type(${index+1}) span`).classList.add("liked");
            
            if(!this.classList.contains("liked")){
                arrayIdLiked.push(actualPost.id)
                
                console.log(arrayIdLiked)
            }
            
        } else {
            document.querySelector(`#main-element div:nth-of-type(${index+1}) span`).innerHTML = `Piace a ${actualPost.likes-- -1} persone`
            
            
        }
        
        
        buttonLeftElement.classList.toggle("active");
        
        
    })



    mainElement.append(postElement);

    postElement.append(rowElement);
    rowElement.append(photoContainerElement,infoElement);
    postElement.append(textElement);
    postElement.append(imgContainerElement);
    postElement.append(rowButton)

    rowButton.append(buttonLeftElement,spanElement)


    
})

const currentDate = new Date();
console.log(currentDate)
console.log(currentDate.toLocaleDateString('it-IT'));
//Freitag, 2. Juli 2021