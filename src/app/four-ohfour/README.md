excercice 1

<!-- HTML = template -->

<p class="font-weight-bold">1er exemple</p>

<button class="btn btn-success" (click)="onButtonClick()">
    Envoyer
</button>

<p class="font-weight-bold">2eme exemple</p>

<h2 class="bg-secondary text-warning w-50" (mouseover)="onMouseOver()">Survol moi</h2>

<input #input  type="text">

<br>

<button class="btn btn-info my-2" (click)="onButtonSend(input.value)">Envoyer</button>

<img [src]="input.value" >

<!-- class = ts -->

onButtonClick(){
    alert("Yes");
  }

  onMouseOver(){
    console.info("C'est tout ?");
  }

  onButtonSend(inputValue:string){

    console.log(inputValue);

  }


  exercice 2

  --------------Template-----------------


<p *ngIf="isOnline">Bienvenue, 
    <span *ngIf="userName">{{userName}}</span>
    <span *ngIf="!userName">inconnu</span>
</p>

--------------Class-----------------

 isOnline:boolean = false;

  userName:string = "Maëva";


excercice 3
--------------------template-------------------------

<p>titre: {{book.title}}</p>
<p>prix: 
<span *ngIf="book.price">{{book.price}}</span>

<span *ngIf="book.price == null">N.C</span>

</p>

--------------Class-----------------
  
    book:any = {
    title:"Harry Plotter",
    price: 278
  };


excercice 4
---------------template----------------------
<div class="border border-warning my-2 " *ngFor="let fruit of fruits ; let i = index">

    <h1> {{ i  +1 }} - {{ fruit }} </h1>


    <p *ngIf="i >= 2" > Mais du coup !</p>

    <p>qui est l'index: {{ i  +1 }}</p>
    
    <button>Acheter</button>

</div>

<ol>
    <li *ngFor="let fruit of fruits">
         {{ fruit | titlecase }}
    </li>
</ol>

--------------Class-----------------

  fruits: string[] =["pomme", "banane", "fraise", "framboise"]


excercice 5
------------------template-----------------------

<p [style.color]="maCouleur()">
    style.color et couleur en propriété dans la class
</p>


<div class="my-5 border border-info" 
[style.background-color]="flag ? colorA : colorB" (mouseover)="onCaresse()">
    Couleur selon un condition
</div>


<div [ngStyle]="{color:maCouleur(), margin:'20px', padding:paduk}">
    NgStyle plusieurs propriétés css 
    dynamiques depuis ma class
</div>

<p [ngClass]="{'text-center':true}">Un text center avec ngClass</p>


<p [ngClass]="{ 'badge':true,
                'badge-success': stock >= 1,
                'badge-danger':  stock <= 0  }">
                Disponibilité: {{stock}} en stock(s)</p>


<p [ngClass]="{'text-center':isCentred}">

    Un Texte center avec ngClass + event binding + ngIf !

</p>

<button class="btn btn-info" (click)="onClickTextCenter()">
    
    <span *ngIf="!isCentred">Centrer le texte</span>
    <span *ngIf="isCentred">Ne pas centrer</span>

</button>

--------------Class-----------------

  flag:boolean = false;

  colorA:string = "bisque";
  colorB:string = "yellow";

  color:string = "aqua";

  paduk:string = "20px";

  constructor() { }

  maCouleur(){
    return "red";
  }

  onCaresse(){
    this.flag = true;
  }
  stock:number = 2;

  isCentred:boolean = false;


  
  onClickTextCenter(){

    if(this.isCentred){
      return this.isCentred = false;
    }else{
      return this.isCentred = true;
    }

  };