/**
* Reader module to interface with OS X built in speech to text
* drawing on say.js libary
*/

var say = require('say');
var ncp = require("copy-paste");
var process = require("child_process");
var spawn = process.spawn;
var child;


	
function readingSpeed(){
	
}	


function Player(){
	this.playing 	= false;
	this.paused 	= false;

	this.sentenceNumber= 0;
	this.currentSentence ="";
	this.selectedText="";
	this.selectedTextAr=[];
	
	this.voice = 'Alex';
	this.speed = {
		spd :400,
		changeIncrement:100,

		returnSpeed: function(){
			return this.spd ;
		},

		setSpeed: function(s){
			this.spd =s;
		},

		increase: function(){
			this.spd +=100;
		},
		decrease: function(){
			this.spd -=this.changeIncrement;
		}
	}



	//Speed
	this.returnSpeed = function(){
		return this.speed.returnSpeed();
	}

	this.increaseSpeed=function(){
		this.speed.increase();
	}
	this.decreaseSpeed=function(){
		this.speed.decrease();
	}
	///
	this.play = function(t){
		this.selectedText = t;
		if(this.playing){ //if it's playing
	      if(this.paused){//if it's paused
	      	//this shoudl use 
	      	t = this.selectedText;
	      	this.playText(t,this.sentenceNumber);
	      }else{//if it's playing and not pause and it play again it stops
	      	this.stop();
	      	this.playing = false;
	      }
	    }else{//if it's not playing, then it starts playing
	      this.playing = true;
	      this.sentenceNumber = 0;
	      this.playText(t,this.sentenceNumber );
	    }
	}

	this.playText = function (t,s){
		var text = t.split(". ");
		this.selectedTextAr= text;
		this.sayIt(this.voice, s, text, this.returnSpeed() );
	}
	/*
	* synchronouse say.speak using recursion
	* takes in the voice
	* s is a counter integer
	* and text is an array of strings you wish to have spoken.
	*/
	this.sayIt = function(voice,s, text, speed) {
	  
	   say.speak(voice, text[s],function () {
	     s++;
	     this.currentSentence=text[s];
	     this.sentenceNumber = s;
	     if(s >= text.length) {
	      	// currentSentence"";
	      	// selectedTextAr=[];
	       process.exit(0);
	     }
	     setTimeout( function() {//
	     	sayIt(voice,s,text,speed);
	      }, 0 )//
	   }, speed); 
	}

	this.pause =function(){
		if(playing){
			this.paused=true;
			this.playing=false;
			this.stop();
		}else if(paused){
			play(this.selectedText);
		}
	}

	this.stop = function(){
		this.playing = false;
		say.stop();
	}
	

}



reader = new Player();


module.exports = {
  increaseSpeed: function(){
  	return  reader.increaseSpeed();
  }, 
  decreaseSpeed: function(){
  	return  reader.decreaseSpeed();
  }, 
  read: function(text) {
  	// console.log(text);
    return reader.play(text);
  },
       
  stop: function() {
    return reader.stop();
  },
  pause: function(){
  	return reader.pause();
  }
};