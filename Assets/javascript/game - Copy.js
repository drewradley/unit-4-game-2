var targetNumber = 0;
  var numberOptions = [1, 1, 1, 1];
  var buttonNumbers=[0,1,2,3];
  var counter = 0;
  var wins=0;
  var losses=0 ;
  var imagePlayer = $("<img>");
  var playerValue = 0;
  var images = ["Assets/images/player1.png","Assets/images/player2.png","Assets/images/player3.png","Assets/images/player4.png","Assets/images/player5.png","Assets/images/player6.png","Assets/images/player7.png","Assets/images/player8.png"]
  
  var playerData = {
    imagePD: "",
    health: 0,
    attackVal: 0,
    counterVal:0
  }

  var playerChoices=[playerData,playerData,playerData,playerData];
  var player= playerData;
  var enemyA= playerData;
  var enemyB= playerData;
  var enemyC= playerData;
  var enemies =[enemyA,enemyB,enemyC];
  var tempArray =[0,0,0,0];
  // for (var i = 0; i < 4; i++) {
  //   playerChoices[i].imagePD=images[i];
    
  // }
  playerChoices[0].imagePD=images[0];
  playerChoices[1].imagePD=images[1];
  playerChoices[2].imagePD=images[2];
  playerChoices[3].imagePD=images[3];
  console.log(playerChoices[0].imagePD);
  console.log(playerChoices[1].imagePD);
  console.log(playerChoices[2].imagePD);
  console.log(playerChoices[3].imagePD);
//   $(document).ready(function() {
   
    
//     // numbersLoop();
//     // onGUI();
    
    
//   function numbersLoop()
//   {
//     // for (var i = 0; i < playerChoices.length; i++) {
//     //   assignplayerValues(i)
      
//     // }

//   };//end of numbersloop
    
    
//   function assignplayerValues(i)
//   {
//       // imagePlayer = $("<img>");

//       // imagePlayer.addClass("player-image");
      
      
//       // setImage();
//       // function setImage()
//       // {
        
//       //   var tempX=Math.floor(Math.random()*images.length)//pick random image
//       //   if(tempArray.indexOf(tempX)===-1)//check for duplicates
//       //   {
//       //     tempArray[i]=tempX;
//       //     imagePlayer.attr("src", images[tempX]);
//       //     // var tempIMG =$(imagePlayer).attr('src');
//       //     //playerData.imagePD=tempIMG;
          
//       //     // console.log(playerChoices);
//       //   }
//       //   else setImage();
        
//       //   // console.log(playerChoices[i].imagePD);
//       // }
      
      
//       // $("#players").append(imagePlayer);
      
//   };//end assignplayerValues


//   $(".player-image").on("click", function() {
   
//       // // player.imagePD=($(this).attr("src"));
//       // $(".catPic").attr("style", "visibility: visible")
//       // $(".catPic").attr("src", player.imagePD)
//       // console.log(player);
//       // imgID= ($(this).attr("data-playerValue"));
//       // playerValue = numberOptions[imgID]
//       // playerValue = parseInt(playerValue);
//       // // console.log(numberOptions);
//       // // console.log(numberOptions[imgID]);
//       // // console.log(imgID);
    
//       // counter += playerValue;
    
//       // if (counter === targetNumber) {
//       //   wins++;
//       //   // restart();
//       //   $("#win-lose").text("Winner! Winner! Chicken Dinner!");
//       // }

//       // else if (counter >= targetNumber) {
//       //   losses++
//       //   // restart();
//       //   $("#win-lose").text("You lost.");
//       // }
//       // onGUI();
//     }); //end click function

//   function onGUI()
//   {
//     // $("#number-to-guess").text(targetNumber);
//     // $("#number-guessed").text(counter);
//     // $("#wins").text(wins);
//     // $("#losses").text(losses);
    
//   };//end onGUI
//   function restart()
//   {
//   //$( "#crystals" ).empty();
//     //numberOptions=[1,1,1,1];
//     // targetNumber = Math.ceil(Math.random()*102)+18;
//     // counter = 0;
//   // numbersLoop();
//   //   onGUI();
//   // for(var i=0;i<numberOptions.length;i++)
//   //     {
//   //       var tempVal = 2;
//   //         randomize();
//   //         function randomize()
//   //         {
//   //           tempVal = Math.ceil(Math.random()*11)+1;
//   //           if(numberOptions.indexOf(tempVal)===-1)//check for duplicates again
//   //           {
//   //             numberOptions[i]=tempVal;
//   //             // console.log(numberOptions[i]);
//   //           }
//   //           else randomize();
//   //         }
//       // }
  
//   //  $("#crystals").append(imagePlayer);
    
//     //numbersLoop();

//   };//end restart

// });

