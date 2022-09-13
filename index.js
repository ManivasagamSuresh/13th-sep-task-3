async function fun(){
    let res =await fetch("https://zoo-animal-api.herokuapp.com/animals/rand");
    let res1= await res.json();
    // console.log(res1);
    return res1;
    }
    
    async function main(){
       try{ 
        let value =await fun();
        console.log(value);
        console.log(value.name);
        console.log(value.lifespan);
        console.log(value.image_link);
        
        
    
     let div = document.createElement("div");
    div.setAttribute("class","main");
    div.innerHTML=`<div class="card" style="width: 18rem;">
    <img src="${value.image_link}" class="card-img-top" alt="..." height="200px" width="200px">
    <div class="card-body">
      <p class="card-text">Name: ${value.name}
      LifeSpan:${value.lifespan}</p>
    </div>
  </div>`;
    

    document.body.append(div);}
    
    catch(error) {
    console.log(error);
    }
    }
    main()
    
    
