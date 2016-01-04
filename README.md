# Text To Speech Os X Node NW js Desktop app

![screenshot](screenshot.png)

<!-- ## Working version of app
You can download a working version of the app from [here](stt/osx64/tts.app) -->

## Gettins started

- `npm install` to install dependencies 
- install `nw` js [https://github.com/nwjs/nw.js]
- `nw .` to get preview of app
- install `nwbuild` [repo here](https://github.com/nwjs/nw-builder) `npm install nw-builder -save`
- run `nwbuild -p osx64 -o . ..` to package the app for os x. [more info here for cross os compatibility](https://github.com/nwjs/nw-builder#usage)

## `say.js` dependency
uses a fork of `say.js` [pietrop/say.js](https://github.com/pietrop/say.js)

modified version integrates this version of say for stop 
[https://github.com/thomascullen/voicebox/blob/6bffff743f86d9662c0a5f9e5d609b2e45216e13/say.js] and another version of say from pull request from speed controll.


<!-- which if you need to install on another project you can do so using 

```
npm install pietrop/say.js -save
``` -->

## os x native look 

https://github.com/GoBijan/maverix

# prerequisites

You need to have the languages installed.
In this case `Alex - english`, and `Luca - Italian`.


## deploy 

```
zip -r ../${PWD##*/}.nw *
```

move in `resources` folder and rename as app.nw



## TODO
- [ ] `cmd`+`q` quit the app. 
- [ ] `cmd` + `m` minimise the app
- [ ] check missing rendering of selection of special carachters in text area (ie ") 

###  advanced features
- [ ] preference window  to 
	 - [ ] set default language
	 - [ ] chose system languages to show
	 - [ ] define shortcuts for languages
	 - [ ] change shortcut speek 
	 
- [ ] app support for pause and restart. 

<!--  app support for pause and restart. 
issue a round asynchronous nature of the speech to text calls.
one solution keep array of sentences to play and keep track of state -->

- [ ] app support for increase speed while playing(?)
- [ ] skip to next sentence or previous. functionality + shortcut.

- [ ] hilight current word (?) or sentence

<!-- changing to content editable  -->

<!-- similar implementation. -->
