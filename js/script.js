
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
      likes: 30,
    }
    
];



//variabile che bersaglia html
const mainElement = document.getElementById("main-element");

const arrayIdLiked = []

posts.forEach((actualPost,index) => {
    console.log(actualPost,index)

    //variabili per creare elementi da mettere in pagina
    const postElement = document.createElement("div");
    postElement.classList = "col-8 mb-5 my_background rounded-3";

    const rowElement = document.createElement("div");
    rowElement.classList = "row pt-2 align-items-center"

    //div per foto profilo
    const photoContainerElement = document.createElement("div");
    photoContainerElement.classList = "col-3 d-flex justify-content-center position-relative"    
    
    //div per nome e data
    const infoElement = document.createElement("div");
    infoElement.classList = "col-9"

    //div per testo
    const textElement = document.createElement("p");
    textElement.classList = "pt-3 fs-5"

    const imgContainerElement = document.createElement("div");


    //row che contiene bottone e counter "mi piace"
    const rowButton = document.createElement("div")
    rowButton.classList = "row row-cols-2 justify-content-evenly my-3 fs-5"


    const buttonLeftElement = document.createElement("button");
    buttonLeftElement.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> Mi piace`
    buttonLeftElement.classList = "col-6 col-lg-4 border-0 bg-transparent p-2"

    const spanElement = document.createElement("span");
    spanElement.classList = "col-6 col-lg-4 p-2"
    spanElement.innerHTML = `Piace a <b> ${actualPost.likes} </b> persone`
    

    for(let key in actualPost){

        //per inserire nome e cognome
        if (key == "author"){
            const authorElement = document.createElement("h3");
            authorElement.innerHTML = actualPost.author;
            authorElement.classList = "m-0"

            infoElement.append(authorElement);


           //per inserire foto profilo 
        } else if (key == "photo"){
            const photoElement = document.createElement("img");
            
            //se manca la foto-profilo
            if(actualPost.photo == ""){
                const substitutePhotoElement = document.createElement("div");

                photoElement.src = "https://fastly.picsum.photos/id/255/150/150.jpg?hmac=ZVq_hMvNCztcmGBGTm_bqKUiMmmSGYTw35OJ-o8zpjo";
                photoContainerElement.append(photoElement);
                photoElement.style = "width: 70%; border-radius: 50%; filter: opacity(0)";
                photoElement.classList = "align-content-center" ;


                let NameMaiusc = actualPost.author.charAt(0).toUpperCase();
                let SurMaiusc = actualPost.author.charAt(actualPost.author.indexOf(" ")+1).toUpperCase();
                substitutePhotoElement.innerHTML = NameMaiusc + SurMaiusc
                substitutePhotoElement.classList += "fw-bold fs-2 position-absolute top-50 translate-middle-y";
                photoContainerElement.style = "height: 80% ;"
                      
                
                photoContainerElement.append(substitutePhotoElement);
            } else {
                photoElement.src = actualPost.photo;
                photoElement.style = "width: 70%; border-radius: 50%"
                photoElement.classList = "align-content-center"
                photoContainerElement.append(photoElement); 
                
            }


            
            
            //per inserire data
        } else if (key == "date"){
            const dateElement = document.createElement("div");
            dateElement.innerHTML = new Date(actualPost.date).toLocaleDateString('it-IT');


            dateElement.classList = "fs-6"

            infoElement.append(dateElement); 
            
            //per inserire immagine
        } else if (key == "image"){
            const imgElement = document.createElement("img");
            imgElement.src = actualPost.image;

            imgElement.style = "width: 100%"

            imgContainerElement.append(imgElement);


            //per inserire testo
        } else if (key == "text"){
            textElement.innerHTML = actualPost.text;

        }
    }

    //click bottone "mi piace"
    buttonLeftElement.addEventListener("click",function(){

        if (!this.classList.contains("active")){
            console.log(index)


            document.querySelector(`#main-element div:nth-of-type(${index + 1}) span`).innerHTML = `Piace a <b> ${actualPost.likes+1} </b> persone`;
            document.querySelector(`#main-element div:nth-of-type(${index + 1}) span`).classList.add("liked");
            
            if(!this.classList.contains("liked")){
                arrayIdLiked.push(actualPost.id);
                
                console.log(arrayIdLiked)
            }
            
        } 
        else {
            document.querySelector(`#main-element div:nth-of-type(${index+1}) span`).innerHTML = `Piace a <b> ${actualPost.likes} </b> persone`;
            
            
        }        
        
        buttonLeftElement.classList.toggle("active");
        
    })


    //vari append in pagina
    mainElement.append(postElement);

    postElement.append(rowElement);
    rowElement.append(photoContainerElement,infoElement);
    postElement.append(textElement);
    postElement.append(imgContainerElement);
    postElement.append(rowButton)

    rowButton.append(buttonLeftElement,spanElement)


    
})

