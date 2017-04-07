# "DnD DB" An exercise in typescript and the Angular2 framework

#### _DnD DB_, 04.07.2017

### By _Sam Kirsch_

## Description

#### A simple website built to track a DnD groups players and their most basic attributes. It allows users to add, save, edit, and delete players from a group, and view players in the group sorted by their character class. All data is persistent over firebase.

## Specifications

* Users may add and save members
* Users can view existing members
* Users can sort members by their character class
* Admin view allows for editing members
* Admin view allows for deleting members

#### Stretch Goals

* Add additional attributes to characters (Str, Dex, Spells, Feats, etc) to track
* Create a level-up check on experience modification

## Setup

* Clone this repository
* From inside the root level of the repository, run npm install, bower install, and bower install bootstrap
* Add Firebase:
  * create a new project in your firebase
  * import data from 'src/app/seed-data.json', if desired
  * on the main page, click "add to my web app" and copy everything inside the {} after "var config ="
  * Create the file 'src/app/api-keys.ts' and create this exported object, pasting in the copied text where indicated:
>export var masterFirebaseConfig = {PASTE COPIED TEXT HERE}

* run ng serve and navigate to http://localhost:4200/

### Technologies Used

* HTML and CSS
* TypeScript with Angular2 to manage packages and Firebase for data storage

[github link for this project](https://github.com/denalisk/dnd-club)

##### Copyright (c) 2017 Sam Kirsch.

##### Licensed under the MIT license.
