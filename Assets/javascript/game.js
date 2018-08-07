  var images = ["Assets/images/player1.png","Assets/images/player2.png","Assets/images/player3.png","Assets/images/player4.png","Assets/images/player5.png","Assets/images/player6.png","Assets/images/player7.png","Assets/images/player8.png"]
  var tempImages=['','','','','',''];
  var playerData = {
    imagePD: "",
    health: 0,
    attackVal: 0,
    counterVal:0
  }
  var char0 = {
    imagePD: tempImages[0],
    health: 90,
    attackVal: 20,
    counterVal:20
  }
  var char1 = {
    imagePD: tempImages[1],
    health: 100,
    attackVal: 15,
    counterVal:15
  }
  var char2 = {
    imagePD: tempImages[2],
    health: 110,
    attackVal: 10,
    counterVal:10
  }
  var char3 = {
    imagePD: tempImages[3],
    health: 120,
    attackVal: 5,
    counterVal:5
  }
  var playerChoices=[char0,char1,char2,char3];
  var player= playerData;
  var playerNumber=0;
  var enemiesSet = false;
  var enemies = playerChoices;
  var tempArray =[0,0,0,0];
  var imagePlayer = $("<img>");
  var imageEnemy = $("<img>");
  var readyToFight =false;
  var  enemyNumber=0;
  var playerBAV=0;
  var fightsFought=0;
  var restartNeeded = false;
  $(document).ready(function() {
    StartGame();

    function StartGame(){
      $(".restartB").attr("style", "visibility: hidden");
      $("h3").attr("style", "visibility: hidden") 

      for (var i = 0; i < 4; i++) {
      setImage();
      function setImage()
      {
        
        var tempX=Math.floor(Math.random()*images.length)//pick random image
        if(tempArray.indexOf(tempX)===-1)//check for duplicates
        {
          tempArray[i]=tempX;
          
        }
        else setImage();
        playerChoices[i].imagePD=images[tempArray[i]];
        enemies = playerChoices;
      };//end set image
  
      
        // console.log(playerChoices[i]);
        imagePlayer = $("<img>");
        imagePlayer.addClass("player-image");
        imagePlayer.addClass("player-number");
        //$( "#players" ).add( "div" );
        // imagePlayer.addClass("bottom-left");
        imagePlayer.attr("src", playerChoices[i].imagePD);
        imagePlayer.attr("player-number", i);
        //$("#bottom-left").append("HP");
        // $("#players").append("<p>"+playerChoices[i].health+"</p>");
        $("#players").append(imagePlayer);
        $("#players").append("<p class='bottom-left'>HP: "+playerChoices[i].health+"; Attack: "+playerChoices[i].attackVal+"</p>");
        
        enemies = playerChoices;
  
      //   imageEnemy = $("<img>");
      //   imageEnemy.addClass("enemy-image");
      //   imageEnemy.attr("src", enemies[i].imagePD);
      //   imageEnemy.attr("style", "visibility: hidden")
      //   imageEnemy.attr("enemy-number", i);
      //  $("#enemies").append(imageEnemy);
        // console.log(enemies[i]);
      };//end for loop setting pictures
    }//end start game


    $(document).on("click", ".restartB",function() {
      $("#enemies").empty();
      tempImages=['','','','','',''];
      playerData = {
      imagePD: "",
      health: 0,
      attackVal: 0,
      counterVal:0
    }
     char0 = {
      imagePD: tempImages[0],
      health: 100,
      attackVal: 20,
      counterVal:20
    }
     char1 = {
      imagePD: tempImages[1],
      health: 120,
      attackVal: 15,
      counterVal:15
    }
     char2 = {
      imagePD: tempImages[2],
      health: 110,
      attackVal: 10,
      counterVal:10
    }
     char3 = {
      imagePD: tempImages[3],
      health: 120,
      attackVal: 5,
      counterVal:5
    }
     playerChoices=[char0,char1,char2,char3];
     player= playerData;
     playerNumber=0;
     enemiesSet = false;
     enemies = playerChoices;
     tempArray =[0,0,0,0];
     imagePlayer = $("<img>");
     imageEnemy = $("<img>");
     readyToFight =false;
      enemyNumber=0;
     playerBAV=0;
     fightsFought=0;
     $("h2").text("Pick yer brawler!");
     $(".playerPic").attr("style", "visibility: hidden")
    //  $("#player-fight").empty();
    
     StartGame();
    });//end on("click", ".restartB",function() {



////start click
$(document).on("click", ".player-image",function() {
    // $(".player-image").on("click", function() {

      player.imagePD=($(this).attr("src"));
      $(".playerPic").attr("style", "visibility: visible")
      $(".playerPic").attr("src", player.imagePD)
      playerNumber=($(this).attr("player-number"));
      $("#players").empty();
      $("h2").text("Pick yer opponent!");
      playerBAV=playerChoices[playerNumber].attackVal;
      for(var i=0;i<4;i++)  
      {
        if(i==playerNumber){}
        else{
        // console.log(i==playerNumber);
            imageEnemy = $("<img>");
            imageEnemy.addClass("enemy-image");
            imageEnemy.attr("src", enemies[i].imagePD);
            // imageEnemy.attr("style", "visibility: hidden")
            imageEnemy.attr("enemy-number", i);
            $("#enemies").append(imageEnemy);
          }
        }
      // $(".enemy-image").attr("style", "visibility: visible")
      // for(var i=0;i<enemies.length;i++)
      // {
      //   if(i==playerNumber)
      //   {
      //     // console.log($(".enemy-image").attr("enemy-number",2));
      //   }
      //   else {
      //     $(".enemy-image").attr("style", "visibility: visible")
      //   }
      // }
    });
    
    //end click function
    $(document).on("click", ".enemy-image",function() {
      if(readyToFight)return;
      enemyNumber =($(this).attr("enemy-number"));
      console.log(playerNumber);
      if(enemyNumber!==playerNumber)
      {
        $(".enemyPic").attr("style", "visibility: visible")
        $(".enemyPic").attr("src", enemies[enemyNumber].imagePD)
        readyToFight=true;
        $("h2").text("");
        $(".fightB").attr("style", "visibility: visible");
        $(this).attr("style", "visibility: hidden");
        
      }
      else {
        readyToFight=false;
        $(".fightB").attr("style", "visibility: hidden");

      }
    });
   
  });  //end ready
  function fightOn()
  {
    if(readyToFight){
     
      enemies[enemyNumber].health-=playerChoices[playerNumber].attackVal;
      console.log(playerChoices[playerNumber]);
      console.log(enemies[enemyNumber]);
      $("h3").attr("style", "visibility: visible") 
      $(".attack-info").text("You did "+playerChoices[playerNumber].attackVal + " damage to your opponent. They have "+enemies[enemyNumber].health+ "HP left.");
      if(enemies[enemyNumber].health<=0)
      {
        fightsFought++;
        $(".fightB").attr("style", "visibility: hidden");
        if(fightsFought===3)$(".restartB").attr("style", "visibility: visible");
        readyToFight=false;
        if(fightsFought===1)
        $("h2").text("Pick yer next opponent!"); 
        if(fightsFought===2)
        $("h2").text("Pick yer final opponent!");
        $(".enemyPic").attr("style", "visibility: hidden")
        $(".attack-info").text("You did "+playerChoices[playerNumber].attackVal + " damage to your opponent. You knocked them out.");

        return;
      }
      var CA=enemies[enemyNumber].counterVal;
      playerChoices[playerNumber].health-=CA;
      $(".counterattack-info").text("You took "+CA + " damage from your opponent. You have "+playerChoices[playerNumber].health+" HP left.");
      if(playerChoices[playerNumber].health<=0)
      {
        $(".counterattack-info").text("You took "+CA + " damage from your opponent and were knocked out!");
        $(".fightB").attr("style", "visibility: hidden");
        //readyToFight=false;
        $(".playerPic").attr("style", "visibility: hidden");
        $(".enemyPic").attr("style", "visibility: hidden");
        $(".restartB").attr("style", "visibility: visible");
        readyToFight=false;
        return;
      }
      
      
      // document.getElementById("textBlock").innerHTML = "<h2>You wasted five seconds waiting!</h2>"; 
      playerChoices[playerNumber].attackVal+=playerBAV;
    }
    
  }//end fightOn

  function restart()
    {
      
    tempImages=['','','','','',''];
    playerData = {
    imagePD: "",
    health: 0,
    attackVal: 0,
    counterVal:0
  }
   char0 = {
    imagePD: tempImages[0],
    health: 100,
    attackVal: 20,
    counterVal:20
  }
   char1 = {
    imagePD: tempImages[1],
    health: 120,
    attackVal: 15,
    counterVal:15
  }
   char2 = {
    imagePD: tempImages[2],
    health: 110,
    attackVal: 10,
    counterVal:10
  }
   char3 = {
    imagePD: tempImages[3],
    health: 120,
    attackVal: 5,
    counterVal:5
  }
   playerChoices=[char0,char1,char2,char3];
   player= playerData;
   playerNumber=0;
   enemiesSet = false;
   enemies = playerChoices;
   tempArray =[0,0,0,0];
   imagePlayer = $("<img>");
   imageEnemy = $("<img>");
   readyToFight =false;
    enemyNumber=0;
   playerBAV=0;
   fightsFought=0;

   restartNeeded=true;
    }//end restart
