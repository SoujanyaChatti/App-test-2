var gamest=0;
var player1score=0;
var player2score=0;
var playerCount=0;
var allPlayers;
var database,Hydrogen,Hydrogen1,Iron,Iron2,sodium,sodium2,oxygen,oxygen2,chlo,chlo2,alum,alum2,copper,copper2;
var leftgroup,rightgroup;

var playerCount;
var distance=0;
var Hy,Li,Hd,Lid;
var car1,car2,car3,car4;
var form, player, game;
var cars=[];
var im1,im2,im3,im4,track,ground;

function preload(){
    periot=loadImage("images/periodic ta ww.png");
    H=loadImage("images/1.png");
    O=loadImage("images/8.png");
    Fe=loadImage("images/26.png");
    Ca=loadImage("images/20.png");
    Na=loadImage("images/11.png");
    Zn=loadImage("images/30.png");
    Cu=loadImage("images/29.png");
    Al=loadImage("images/13.png");
    Cl=loadImage("images/17.png");
    S=loadImage("images/16.png");
    tabl=loadImage("images/wt.png");
    bgcover=loadImage("images/bgcover.jpg");



    Hy=loadImage("images/Hydrogen.jpg")
//group 1
    Li=loadImage("images/Lithium.jpg");
    Sodium=loadImage("images/Sodium.jpg");
    K=loadImage("images/potassium.jpg");
    Rb=loadImage("images/Rb.jpg");
    Cs=loadImage("images/Cs.jpg");
    Fr=loadImage("images/Fr.jpg");
//group2
    Be=loadImage("images/Be.jpg");
    Mg=loadImage("images/mg.jpg");
    Ca=loadImage("images/ca.jpg");
    Sr=loadImage("images/Sr.jpg");
    Ba=loadImage("images/Ba.jpg");
    Ra=loadImage("images/Ra.jpg");
    Hd=loadImage("images/Hd.jpg");

 //group3
    Sc=loadImage("images/Sc.jpg");
    Y=loadImage("images/Y.jpg");
    Lanthst=loadImage("images/lanthanoids start.jpg");   
   
    //group4
    Ti=loadImage("images/Ti.jpg");
    Zr=loadImage("images/Zr.jpg");
    Hf=loadImage("images/Hf.jpg");

//group5
Va=loadImage("images/Va.jpg");
Nb=loadImage("images/Nb.jpg");
Ta=loadImage("images/Ta.jpg");

//group6
Cr=loadImage("images/Cr.jpg");
Mo=loadImage("images/Mo.jpg");
W=loadImage("images/W.jpg");

//group7
Mn=loadImage("images/Mn.jpg");
Tc=loadImage("images/Tc.jpg");
Re=loadImage("images/Re.jpg");

//group8
Fe=loadImage("images/Fe.jpg");
Ru=loadImage("images/Ru.jpg");
Os=loadImage("images/Os.jpg");

//group9
Co=loadImage("images/Co.jpg");
Rh=loadImage("images/Rh.jpg");
Ir=loadImage("images/Ir.jpg");

//group9
Ni=loadImage("images/Ni.jpg");
Pd=loadImage("images/Pd.jpg");
Pt=loadImage("images/Pt.jpg");
    Lid=loadImage("images/Lid.jpg");
}

function setup(){
 createCanvas(displayWidth,displayHeight-140);
 database = firebase.database();
 
leftgroup=new Group();
rightgroup=new Group();
 background(32,42,64);
 

m=createSprite(mouseX,mouseY,1,1);
    
}

function draw(){
    console.log(gamest);
   if(gamest==0){
        background(bgcover);
        pertab=createButton("GO TO PERIODIC TABLE")
        pertab.position(displayWidth/2-100,displayHeight/2);
       pertab.style('width', '200px');
       pertab.style('height', '40px');
        pertab.style('background', 'lightpink');
       pertab.mousePressed(gamest2)
            
      react=createButton("GO TO REACTION CENTRE")
      react.position(displayWidth/2-100,displayHeight/2-200);
      react.style('width', '200px');
      react.style('height', '40px');
      react.style('background', 'lightpink');
      react.mousePressed(gamest1)

      game=createButton("GO TO THE GAME")
      game.position(displayWidth/2-100,displayHeight/2-100);
      game.style('width', '200px');
      game.style('height', '40px');
      game.style('background', 'lightpink');
      game.mousePressed(gamest3)
           
        
    }
    if(gamest==1){
        background("white");
        pertab.hide();

        back=createButton("BACK")
        back.position(displayWidth/11,displayHeight/10)
        back.style('width','70px');
        back.style('height','40px');
        back.style('background','yellow');
        back.mousePressed(gamest0);
     Hydrogen=createSprite(300,displayHeight/10);
     Hydrogen.addImage(H);
     Hydrogen.scale=0.2;
     Hydrogen1=createSprite(displayWidth/1.07,displayHeight/10);
     Hydrogen1.addImage(H);
     Hydrogen1.scale=0.2;

     oxygen2=createSprite(displayWidth/1.07,displayHeight/5);
     oxygen2.addImage(O);
     oxygen2.scale=0.2;
     oxygen=createSprite(100,displayHeight/5);
     oxygen.addImage(O);
     oxygen.scale=0.2;

     Iron=createSprite(100,displayHeight/3.3);
     Iron.addImage(Fe);
     Iron.scale=0.2;
     Iron2=createSprite(displayWidth/1.07,displayHeight/3.3);
     Iron2.addImage(Fe);
     Iron2.scale=0.2;

     sodium=createSprite(100,displayHeight/2.45);
     sodium.addImage(Na);
     sodium.scale=0.2;
     sodium2=createSprite(displayWidth/1.07,displayHeight/2.45);
     sodium2.addImage(Na);
     sodium2.scale=0.2;

     chlo=createSprite(100,displayHeight/1.95);
     chlo.addImage(Cl);
     chlo.scale=0.2;
     chlo2=createSprite(displayWidth/1.07,displayHeight/1.95);
     chlo2.addImage(Cl);
     chlo2.scale=0.2;

     copper=createSprite(100,displayHeight/1.62);
     copper.addImage(Cu);
     copper.scale=0.2;
     copper2=createSprite(displayWidth/1.07,displayHeight/1.62);
     copper2.addImage(Cu);
     copper2.scale=0.2;

     alum=createSprite(100,displayHeight/1.38);
     alum.addImage(Al);
     alum.scale=0.2;
     alum2=createSprite(displayWidth/1.07,displayHeight/1.38);
     alum2.addImage(Al);
     alum2.scale=0.2;
    

     leftgroup.add(Hydrogen);
     leftgroup.add(oxygen);
     leftgroup.add(Iron);
     leftgroup.add(chlo);
     leftgroup.add(alum);
     leftgroup.add(copper);
     leftgroup.add(sodium);

     rightgroup.add(Hydrogen1);
     rightgroup.add(oxygen2);
     rightgroup.add(Iron2);
     rightgroup.add(chlo2);
     rightgroup.add(alum2);
     rightgroup.add(copper2);
     rightgroup.add(sodium2);

     table=createSprite(displayWidth/2,displayHeight/2,displayWidth/2,displayHeight/3);
     table.addImage(tabl);
     if(mouseIsOver(alum)){
         text("hey",600,200);
        alum.x=mouseX;
         alum.y=mouseY;
     }
    
     for(var i=0;i<leftgroup.length;i++){
        if(leftgroup.get(i).isTouching(table)){
           leftgroup.get(i).x=displayWidth/2-70;
           leftgroup.get(i).x=displayHeight/2+50;            
}   
  }
    
    for(var i=0;i<rightgroup.length;i++){
        if(rightgroup.get(i).isTouching(table)){
            rightgroup.get(i).x=displayWidth/2+70;
            rightgroup.get(i).x=displayHeight/2+50;            
}   
  }
  drawSprites(); 
}

if(gamest==2){
    background(65,68,94);
   d=createSprite(displayWidth/2,displayHeight/2,100,100);
    d.visible=false;

   d.addImage(Na);
    H=createSprite(displayWidth/2,displayHeight/10);
    H.addImage(Hy);
    H.scale=0.8;
    
    if(mousePressedOver(H)){
   Na=Hd;
   d.visible=true;
    }
   
   
 /* if(d.visible==true){
        Cross=createSprite(displayWidth/2,displayHeight/3,40,40)
        if(mousePressedOver(Cross)){
            d.visible=false;
        }
    }*/
    Lit=createSprite(displayWidth/11,displayHeight/5);
    Lit.addImage(Li);
    Lit.scale=0.8;
    
    
    if(mousePressedOver(Lit)){
        Na=Lid;
        d.visible=true;
         }
        
        Sod=createSprite(displayWidth/11,displayHeight/3.75);
         Sod.addImage(Sodium);
         Sod.scale=0.8;

         Pot=createSprite(displayWidth/11,displayHeight/2.95);
         Pot.addImage(K);
         Pot.scale=0.8;
         

         Rubidium=createSprite(displayWidth/11,displayHeight/2.46);
         Rubidium.addImage(Rb);
        Rubidium.scale=0.8;

        Cesium=createSprite(displayWidth/11,displayHeight/2.1);
        Cesium.addImage(Cs);
        Cesium.scale=0.8;

        Fran=createSprite(displayWidth/11,displayHeight/1.84);
        Fran.addImage(Fr);
        Fran.scale=0.8;

         Ber=createSprite(displayWidth/7.5,displayHeight/5);
         Ber.addImage(Be);
         Ber.scale=0.8;

         Mag=createSprite(displayWidth/7.5,displayHeight/3.75);
         Mag.addImage(Mg);
         Mag.scale=0.8;
        
         Cal=createSprite(displayWidth/7.5,displayHeight/2.952);
         Cal.addImage(Ca);
         Cal.scale=0.8;
         
         Str=createSprite(displayWidth/7.5,displayHeight/2.46);
         Str.addImage(Sr);
        Str.scale=0.8;

        Barium=createSprite(displayWidth/7.5,displayHeight/2.1);
        Barium.addImage(Ba);
        Barium.scale=0.8;
        
        Radium=createSprite(displayWidth/7.5,displayHeight/1.84);
        Radium.addImage(Ra);
        Radium.scale=0.8;
        

       //group 3
       Scandium=createSprite(displayWidth/5.7,displayHeight/2.95);
       Scandium.addImage(Sc);
       Scandium.scale=0.8;
       
       Yttrium=createSprite(displayWidth/5.7,displayHeight/2.46);
       Yttrium.addImage(Y);
       Yttrium.scale=0.8;

       Lanst=createSprite(displayWidth/5.7,displayHeight/2.1);
      Lanst.addImage(Lanthst);
      Lanst.scale=0.8;


      //group4
      Titan=createSprite(displayWidth/4.6,displayHeight/2.95);
      Titan.addImage(Ti);
      Titan.scale=0.8;
      
     Zirc=createSprite(displayWidth/4.6,displayHeight/2.46);
     Zirc.addImage(Zr);
     Zirc.scale=0.8;

     Haf=createSprite(displayWidth/4.6,displayHeight/2.1);
     Haf.addImage(Hf);
     Haf.scale=0.8;

     //group5

    Vanad=createSprite(displayWidth/3.85,displayHeight/2.95);
    Vanad.addImage(Va);
    Vanad.scale=0.8;
     
    Niob=createSprite(displayWidth/3.85,displayHeight/2.46);
    Niob.addImage(Nb);
    Niob.scale=0.8;

    Tal=createSprite(displayWidth/3.85,displayHeight/2.1);
    Tal.addImage(Ta);
    Tal.scale=0.8;
    

  //  group6
    
  Crom=createSprite(displayWidth/3.32,displayHeight/2.95);
  Crom.addImage(Cr);
  Crom.scale=0.8;
   
 Moly=createSprite(displayWidth/3.32,displayHeight/2.46);
 Moly.addImage(Mo);
 Moly.scale=0.8;

  Tung=createSprite(displayWidth/3.32,displayHeight/2.1);
  Tung.addImage(W);
  Tung.scale=0.8;
  
 // group7

 Mang=createSprite(displayWidth/2.9,displayHeight/2.95);
 Mang.addImage(Mn);
 Mang.scale=0.8;
   
 Tech=createSprite(displayWidth/2.9,displayHeight/2.46);
 Tech.addImage(Tc);
 Tech.scale=0.8;

  Rhen=createSprite(displayWidth/2.9,displayHeight/2.1);
 Rhen.addImage(Re);
  Rhen.scale=0.8;
  
//group8
Ferr=createSprite(displayWidth/2.58,displayHeight/2.95);
Ferr.addImage(Fe);
Ferr.scale=0.8;
   
 Ruth=createSprite(displayWidth/2.58,displayHeight/2.46);
 Ruth.addImage(Ru);
 Ruth.scale=0.8;

  Osm=createSprite(displayWidth/2.58,displayHeight/2.1);
  Osm.addImage(Os);
  Osm.scale=0.8;
  
//group9
Coba=createSprite(displayWidth/2.32,displayHeight/2.95);
Coba.addImage(Co);
Coba.scale=0.8;
   
 Rho=createSprite(displayWidth/2.32,displayHeight/2.46);
 Rho.addImage(Rh);
 Rho.scale=0.8;

  Iri=createSprite(displayWidth/2.32,displayHeight/2.1);
  Iri.addImage(Ir);
  Iri.scale=0.8;
  
//group10
Nick=createSprite(displayWidth/2.11,displayHeight/2.95);
Nick.addImage(Ni);
Nick.scale=0.8;
   
Pall=createSprite(displayWidth/2.32,displayHeight/2.46);
Pall.addImage(Pd);
Pall.scale=0.8;

Plat=createSprite(displayWidth/2.32,displayHeight/2.1);
Plat.addImage(Pt);
Plat.scale=0.8;
  


    drawSprites();

}
 if(gamest==3){

background("yellow");

game = new Game();
 game.getState();
 game.start();
 if(playerCount==4){
    game.update(1);
   }
   if(gamest==4){
  clear();
  game.play();
   }
   if(gamest==5){
     game.end();
   }
 }
}//end of draw function



function gamest1(){
    gamest=1;
    
}
function gamest2(){
    gamest=2;
    
}
function gamest0(){
    gamest=0;
    
}
function gamest3(){
    gamest=3;
    
}
