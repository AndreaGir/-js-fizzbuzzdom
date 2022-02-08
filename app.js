let dentroHtml = document.getElementById('container');


for (let i = 1; i <= 100 ; i++){

    const div = document.createElement('div')
    div.classList.add('divDimensioni')
     
     if (i % 3 === 0 && i % 5 === 0  ){
        console.log('fizzbuzz')
        div.append('fizzbuzz')
        div.classList.add('bc-rd')
    }
    else if(i % 3 === 0){
         console.log(   'fizz') 
         div.append('fizz')
         div.classList.add('bc-yl')
    }
    else if (i % 5 === 0){
        console.log(   'buzz')
        div.append('buzz')
        div.classList.add('bc-gr')
    }
    else{
        console.log(i)
        div.append(i)
    }
    
    
    dentroHtml.append(div)
   
}






