 
 const barcaTransfer = {

    club : "Barcelona",

    goalkeepersList : ["Marc-Andre ter Stegen","Inaki Peña"],
    defendersList : ["Sergino Dest","Gerard Pique","Ronald Araujo","Samuel Umtiti"],
    midfieldersList : ["Sergio Busquets","Riqui Puig","Pedri"],
    forwardsList : ["Ansu Fati","Memphis Depay","Pierre-Emerick Aubameyang"],

    goalkeepersNumbers: "1,13",
    defendersNumbers: "2,3,4,5",
    midfieldersNumbers: "6,7,8",
    forwardsNumbers: "9,10,11",

    transferPlayers: ["Lionel Messi-Forward","Usman Dembele-Forward","Ederson-GK"],
    buyedPlayers: [],

    transferWindowOpen : true,

    run: function(p){
      
      if (p === "goalkeepers"){
         barcaTransfer.playersAndNumbers(barcaTransfer.goalkeepersList,barcaTransfer.goalkeepersNumbers)
         barcaTransfer.newTransFers(p)
      }else if (p === "defenders"){
         barcaTransfer.playersAndNumbers(barcaTransfer.defendersList,barcaTransfer.defendersNumbers)
         barcaTransfer.newTransFers(p)
      }else if (p === "midfielders"){
         barcaTransfer.playersAndNumbers(barcaTransfer.midfieldersList,barcaTransfer.midfieldersNumbers) 
      }else if (p === "forwards"){
         barcaTransfer.playersAndNumbers(barcaTransfer.forwardsList,barcaTransfer.forwardsNumbers)
         barcaTransfer.newTransFers(p)
      };

    },
    newTransFers: function(p){
      if(barcaTransfer.transferWindowOpen === false){console.log(`Տրանսֆերային Պատուհանը փակ է`)}
      else if(p === "goalkeepers" || p === "defenders" || p === "midfielders" || p === "forwards" ){
         let j = 0;
         for(i = barcaTransfer.transferPlayers.length ; i > 0; i--){
            barcaTransfer.buyedPlayers[j] = barcaTransfer.transferPlayers[j]
            console.log(`Նոր Ֆուտբոլիստներն են ${barcaTransfer.buyedPlayers[j].toUpperCase()} `)
            j++
         };
         console.log(`Նոր Ֆուտբոլիստներն են ${barcaTransfer.buyedPlayers.join().trim()} `)
         
      }else{`Նոր խաղացողներ գնված չեն`};
    },
    showMyObj: function(){
      barcaTransfer.transferWindowOpen ? console.log(barcaTransfer) : console.log("Base Closed");
    },
    playersAndNumbers : function(arrPlayerList,arrNumbers){
      arrNumbers.split(",", 50)
      arrPlayerList.forEach((element,index) => {
         console.log(`${element.toLowerCase()}   ${arrNumbers.split(",", 50)[index]} `  ) 
      });
    }

 }
 
 const {run} = barcaTransfer
 run("goalkeepers")//goalkeepers,defenders,midfielders,forwards