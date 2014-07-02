/*!
* index.js by @luizcubas
* Copyright 2014 MultDesafios
*/

var program = function(){
	
	var self = this;
	this.user = 'Fulano';
	this.age = 35;
	
	//this.name = 'Fulano de Souza';
	this.name = '';
	this.site = 'http://www.fulanosites.com';
	
	this.constructor = function(name){
		self.name = self.setName(name);
	}
	
	this.setName = function(newname){
		self.name = newname;
	}
	
	this.setAge = function(newAge){
		self.age = newAge;
	}
	
}
