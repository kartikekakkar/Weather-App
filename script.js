document.getElementById("bring").onclick =() =>{ 
    let city= document.getElementById("mycity").value;
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f6c88832be59eead36945713ac64657e`)
      .then(data=>{
          return data.json()
      }).then(data2=>{
         //  console.log(data2.name)
           console.log(data2.main.temp)
            console.log(data2.weather[0].description)
           document.getElementById("all").innerHTML=`
            <h1>Location :<br> ${data2.name}</h1>
            <h3>Temperature : ${data2.main.temp}  <span>&#176 C</span> </h3>
            <h3>Desccription :<br> ${data2.weather[0].description}</h3>
         `
          })
       }