//body
var bodyvar=document.body

//four buttons
var climateVar= document.getElementById("climate")
console.log("climate",climate)
var consumptionVar= document.getElementById("consumption")
console.log("consumption",consumption)
var resourceVar=document.getElementById("resources")
console.log("resources",resources)
var peopleVar=document.getElementById("people")
console.log("people",people)

//save
var saveText = document.getElementById("save")

//frame
var frame = document.getElementById("frame")

//variable declaration done----------

consumptionVar.onclick = ()=>{
    //background
    bodyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/food-wastage-bg%5B1%5D.png')"
    bodyvar.style.backgroundSize = "100% 100%"
    
    //frame
    frame.src = "https://www.theworldcounts.com/embed/challenges/107?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    //text
    saveText.innerHTML = "Do your bit! Shop only what you need,eat only what you need and always save the leftovers."
    //buttons
    consumptionVar.style.background ="#27AE60"
     peopleVar.style.background = "transparent"
     resourceVar.style.background ="transparent"
     climateVarVar.style.background="transparent"
    

}

climateVar.onclick =()=>{
    bodyvar.style.background = "url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/climate-change-bg%5B1%5D.png')"

    frame.src ="https://www.theworldcounts.com/embed/challenges/23?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    saveText.innerHTML ="Do your bit! Save trees, use renewable energy sources and prefer to travel green"

    climateVar.style.background ="#367EFE"
    resourceVar.style.background ="transparent"
    peopleVar.style.background="transparent"
    consumptionVar.style.background="transparent"
}

resourceVar.onclick = ()=>{
    bodyvar.style.background ="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/natural-resources-bg%5B1%5D.png')"

    frame.src ="https://www.theworldcounts.com/embed/challenges/5?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

    saveText.innerHTML ="Do your bit! Avoid all things plastic. Believe in Reduce, Reuse and Recycle"

    resourceVar.style.background ="#EB9455"
    climateVar.style.background ="transparent"
    peopleVar.style.background="transparent"
    consumptionVar.style.background="transparent"
    
}

peopleVar.onclick =()=>{
    bodyvar.style.background ="url('https://kq-storage.s3.ap-south-1.amazonaws.com/Github/earth/poverty-bg%5B1%5D.png')"

     frame.src = "https://www.theworldcounts.com/embed/challenges/2?background_color=transparent&color=white&font_family=%22Helvetica+Neue%22%2C+Arial%2C+sans-serif&font_size=20"

     saveText.innerHTML ="Do your bit! Never waste  food.Rather offer it to people or animals who are in need."

     peopleVar.style.background = "#DF4855"
     resourceVar.style.background ="transparent"
     climateVarVar.style.background="transparent"
     consumptionVar.style.background="transparent"
}
