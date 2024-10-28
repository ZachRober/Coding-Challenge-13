const myContainer = document.getElementById('container')
const paragraphContainer = document.getElementById('paragraph-container')
fetch("https://www.course-api.com/javascript-store-products")
    .then(response=>{//if fetch is ok resolve to json
        if(!response.ok){
            throw new Error("Bad URL");}
        return response.json();
    })
    .then(data=>{//for loop to display the images and format the data
        for (let i = 0; i < data.length; i++) {
            let companyName = data[i].fields.company;
            let companyImage = data[i].fields.image;
            let productName = data[i].fields.name;
            let productPrice = data[i].fields.price;
            let productNew = document.createElement("p");
            let imageNew = document.createElement("img");
            imageNew.src=companyImage[0].url
            productNew.textContent = `Sold by ${companyName}, ${productName}, Price: $${productPrice}`
            myContainer.append(productNew,imageNew);
            productNew.style.color = "Orange"
            productNew.style.fontSize = "30px"


            
            
        }
    })
    .catch(error=>console.error(error));//catch errors and handle gracefully
    document.body.style.backgroundColor = "lightblue"