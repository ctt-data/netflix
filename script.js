$("#go").click(function(){
  country = $("#ans").val()
  
  if (country == "Canada"){
    myText = "Well done!"
  }
  else if (country == "United States" || country == "United States of America" || country == "US" || country == "USA" || country == "U.S." || country == "U.S.A."){
  myText = "Close... but wrong."
  }
  else if (country == "Brazil"){
  myText = "Nice try... but wrong."
  }
  else{
  myText = "Try again!"
  }
$("#Answer").text(myText)
})