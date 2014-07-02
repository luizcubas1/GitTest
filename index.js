/*!
* index.js by @luizcubas
* Copyright 2014 MultDesafios
*/

var program = function(){
	
	var self = this;
	this.user = 'Fulano';
	this.age = false;	
	
	this.name = '';
	this.site = 'http://www.fulanosites.com';
	
	this.constructor = function(name){
		self.setName(name);
		self.setAge(name); 
	}
	
	this.setName = function(newName){
		self.name = newName;
	}
	
	this.setAge = function(newAge){
		self.age = newAge;
	}
	
}
