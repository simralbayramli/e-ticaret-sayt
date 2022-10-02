const productsDiv=document.getElementById('content')
/*const product=document.getElementById('product')
const aEl=document.getElementById('icon')
product.appendChild(aEl)
aEl.innerHTML='<i class="fa-regular fa-heart"></i>'*/

window.onload=getAllProducts


async function getAllProducts(){
    const unvan='products.json'

    try{
        const komuterinAnlamadigiData=await fetch(unvan)


        const komputerinAnladigiData=await komuterinAnlamadigiData.json()

        for(let i=0; i<komputerinAnladigiData.length; i++){
        productsDiv.innerHTML += `
       <div id="product-cards">
       <h1 class="name">${komputerinAnladigiData[i].name }  </h1>
       <div class="images"><img class="img" src="${komputerinAnladigiData[i].img}">
       <button class="button-icon"><i class="fa-solid fa-heart"></i></button>
       
       </div>
       
        
        <h4 class="endirim">Şok ${komputerinAnladigiData[i].endirim} endirim</h4>
        <p class="price">${komputerinAnladigiData[i].price}  </p>
        <button class="button">Sebete Indir</button>
        <h2><h2>
        
        
       

        </div>
        
        

        
        `
       

       }
      
    }

    


    catch(xeta){
        document.write("xeta oldu:"+ xeta);

        
}


}



