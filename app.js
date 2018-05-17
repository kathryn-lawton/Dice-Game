"use strict"

function getBatmanAttack(){
	console.log("1. Batarang");
	console.log("2. Batmobile Takedown");
	
	return prompt("Please choose a valid attack:");
}

function attackRoll(hitChance, damageDie, superHeroName, attackName){
	let attackRoll = rollDie(20);
	let damageRoll = 0;
	if(attackRoll > hitChance)
	{
		 damageRoll = rollDie(damageDie);
		console.log(superHeroName + "'s " + attackName + " hits for " + damageRoll + " damage");
	} 
	else{
		console.log(superHeroName + "'s attack missed");
	}

	return damageRoll;
}

function batmanAttackSequence(userAttack){
	let damageRoll = 0;	

	if(userAttack == 1){
		damageRoll = attackRoll(5, 6, "Batman", "batarang");
	}
	else if(userAttack == 2){
		damageRoll = attackRoll(10, 8, "Batman", "batmobile takedown");
	}
	else{
		console.log("Invalid attack for Batman. He deals no damage this turn.");
	}

	return damageRoll;	
}

function supermanAttackSequence(){
	let damageRoll = 0;	

	let abilityRoll = rollDie(4);
	if(abilityRoll != 4){
		damageRoll = attackRoll(10, 10, "Superman", "heat vision");
	}
	else{
		damageRoll = attackRoll(15, 12, "Superman", "flying smash");
	}
	return damageRoll;
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

		let damage = batmanAttackSequence(userAttack);
		supermanHealth -= damage;

		if(supermanHealth > 0) {
			damage = supermanAttackSequence();
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