"use strict"


function getBatmanAttack(){
	console.log("1. Batarang");
	console.log("2. Batmobile Takedown");
	
	return prompt("Please choose a valid attack:");
}

function batmanAttacks(userAttack){
	let damageRoll = 0;	

	if(userAttack == 1){
		let attackRoll = rollDie(20);
		if(attackRoll > 5)
		{
			damageRoll = rollDie(6);
			console.log("Batman's Batarang hits for " + damageRoll + " damage!");
		} 
		else{
			console.log("Batman's Batarang misses.");
		}

		return damageRoll;
	}
	if(userAttack == 2) {
		let attackRoll = rollDie(20);
		if (attackRoll > 10){
			damageRoll = rollDie(8);
			console.log("Batman's Batmobile Takedown hits for " + damageRoll + " damage!");
		}
		else{
			console.log("Batman's Batmobile Takedown misses...");
		}

		return damageRoll;
	}
	else{
		console.log("Invalid attack for Batman. He deals no damage this turn.");
		return damageRoll;
	}	
}

function supermanAttacks(){
	let damageRoll = 0;	

	let attackRoll = rollDie(4);
	if(attackRoll != 4){
		let attackRoll = rollDie(20);
		if(attackRoll > 10){
			damageRoll = rollDie(10);
			console.log("Superman used heat vision. Superman hits for " + damageRoll + " damage!");
		} 
		else{
			console.log("Superman used heat vision. Superman misses...");
		}

		return damageRoll;
	}
	else{
		let attackRoll = rollDie(20);
		if (attackRoll > 15){
			damageRoll = rollDie(12);
			console.log("Superman used flying smash. Superman hits for " + damageRoll + " damage!");
		}
		else{
			console.log("Superman used flying smash. Superman misses...");
		}

		return damageRoll;
	}
}

function rollDie(sides){
	return Math.floor(Math.random() * sides) + 1;
}

function startFightSimulator(){
	console.log("Welcome to fight simulator, Batman versus Superman! In an alternate universe, Dark Superman leads the Insurgency. He must be stopped. When all hope seems to be lost, we look to the Dark Knight. While he might not be the hero this alternate universe wants, he is the hero they deserve.");

	let supermanHealth = 40;
	let batmanHealth = 40;
	
	while(supermanHealth > 0 && batmanHealth > 0) {
		console.log("Batman Health: " + batmanHealth);
		console.log("Superman Health: " + supermanHealth);

		let userAttack = 0;
		do{
			userAttack = getBatmanAttack();

			if(!userAttack){
				return;
			}
		} while(userAttack != 1 && userAttack != 2);

		let damage = batmanAttacks(userAttack);
		supermanHealth -= damage;

		if(supermanHealth > 0) {
			damage = supermanAttacks();
			batmanHealth -= damage;
		}
	}
	if (batmanHealth > 0){
		console.log("Batman wins! Time to go back to Gotham...");
	}
	else {
		console.log("Superman Wins! The Son of Krypton is victorious!");
	}
} 

startFightSimulator();