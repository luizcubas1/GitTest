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
	
	this.constructor = function(newname){
		self.name = newname;
	}
	
}
