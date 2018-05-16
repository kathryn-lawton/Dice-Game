"use strict"


function getBatmanAttack(){
	console.log("1. Batarang");
	console.log("2. Batmobile Takedown");
	
	return prompt("Please choose a valid attack:");
}

function batmanAttacks(userAttack){
	let damageRoll = 0;	

	//weak attack
	if(userAttack == 1){
		let attackRoll = rollDie(20);
		if(attackRoll > 5)
		{
			damageRoll = rollDie(6);
			console.log("Batman's weak attack hits for " + damageRoll + " damage!");
		} 
		else{
		console.log("Batman's weak attack misses.");
	}
	return damageRoll
}

	//strong attack
	if(userAttack == 2) {
		let attackRoll = rollDie(20);
		 if (attackRoll > 10){
			damageRoll = rollDie(8);
			console.log("Batman's strong attack hits for " + damageRoll + " damage!");
		}
		else{
		console.log("Batman's strong attack misses...");
		}
	return damageRoll;
	}
	
}

function supermanAttacks(){
	let damageRoll = 0;	

	//weak attack
	let attackRoll = rollDie(4)
	if(attackRoll === 1 || attackRoll === 2 || attackRoll === 3){
		let attackRoll = rollDie(20);
		if(attackRoll > 10)
		{
			damageRoll = rollDie(10);
			console.log("Superman used heat vision. Superman's weak attack hits for " + damageRoll + " damage!");
		} 
		else{
		console.log("Superman used heat vision. Superman's weak attack misses...");
	}
	return damageRoll
}

	//strong attack
	else{
		let attackRoll = rollDie(20);
		 if (attackRoll > 15){
			damageRoll = rollDie(12);
			console.log("Superman used flying smash. Superman's strong attack hits for " + damageRoll + " damage!");
		}
		else{
		console.log("Superman used flying smash. Superman's strong attack misses...");
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
		let userAttack = getBatmanAttack();
		console.log(userAttack);

		// Cancel on input will end simulation
		if(!userAttack)
		{
			return;
		}

		let damage = batmanAttacks(userAttack);
		supermanHealth -= damage;

		if(supermanHealth > 0) {
			damage = supermanAttacks();
			batmanHealth -= damage;
		}
	}
	
	//while(supermanHealth > 0) {
	//	let damage = batmanAttacks();
	//	supermanHealth -= damage;
	//}

	if (batmanHealth > 0){
		console.log("Batman wins! Time to go back to Gotham...");
	}
	else {
		console.log("Superman Wins! The Son of Krypton is victorious!");
	}
} 

// Main Program

startFightSimulator();