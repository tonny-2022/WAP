let animal = {
    eats: true
    };
    let rabbit = {
    jumps: true
    };

   // rabbit.__proto__=animal;
    //console.log(rabbit.__proto__=animal);

    let rabit1=Object.create(animal);
    rabit1.eats=false;
    rabit1.jumps="high";

   // console.log(rabit1);

    let animal1 = {
        walk: function() {
        if (!this.isSleeping) {
      
          console.log(`I walk`);
        }
        },
        sleep: function() {
        this.isSleeping = true
        console.log(`I sleep`);;
        }
        };

        let rabbit1 = Object.create(animal1);
        rabbit1.name = "White Rabbit";
        // modifies rabbit.isSleeping
        //rabbit1.sleep();
        //animal1.sleep();
        rabbit1.walk();
        animal1.walk();
        console.log(rabbit1.isSleeping); // true
        console.log(animal1.isSleeping); //true



         console.log("===========animal 3================"); 
         let animalx = {
            eats: true
            };
            let rabbitx = Object.create(animalx);
            rabbitx.jumps = true;
            // Object.keys only return own keys
           // console.log(Object.keys(rabbitx)); // jumps
           // console.log(Object.values(rabbitx));//{true}

            for(let prop in rabbitx){
                console.log(prop);

            }

            for(let prop in rabbitx){

                if(rabbitx.hasOwnProperty(prop)){
                  console.log("own"+" "+prop);

                }else{

                    console.log("Inherited"+" "+prop);
                }
            }