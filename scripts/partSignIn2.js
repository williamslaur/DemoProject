$(document).ready(function(){

/*
//retrieve data from json local storage

var participantjsonstring = localStorage.getItem("participantFound");

var jsonObject = JSON.parse(participantjsonstring); 

console.log(jsonObject);  

//input it into the section of the screen to verify

document.getElementById("groupName").innerHTML = jsonObject.groupName;
document.getElementById("emailAddress").innerHTML = jsonObject.participantEmail;
document.getElementById("matchEmail").innerHTML = jsonObject.matchEmail;   */

//task to save agreement to rules into array
var groupName = $("#grpName").val()
var myname2 = $("#partEmail").val()
var agree = $("#agreement").val();
var surveyDone = $("#completeProfile").val()

var myobject = partTable.find(function (element){
  return (element.participantEmail === myname2 && element.groupName === groupName);
})

$("#agreement").on("click", function (){
Object.assign(partTable.find(o => o.participantEmail === myname2) || {}, {terms: agree});
});

$("#completeProfile").on("click", function(){
Object.assign(partTable).find(o => o.participantEmail === myname2) || {}, {survey: surveyDone};

//need to save all the data to the Projile when save and save and complete is done

});

//event listener to find the matched secret Pal object in the profile array

document.getElementById("profile").addEventListener("click", retrieveProfiles);

//function module to find Profiles
function retrieveProfiles() {

var secretPal = document.getElementById("matchEmail").innerHTML = jsonObject.matchEmail;
var groupName = document.getElementById("groupName").innerHTML = jsonObject.groupName;
var myName = document.getElementById("emailAddress").innerHTML = jsonObject.participantEmail;


//search to find my previous answers
var myData = profiles.find(function (element){
  return (element.participantEmail === myName && element.groupName === groupName);
});

console.log(myData);

document.getElementById("mybdayDate").innerHTML = myData.bdayDate;
document.getElementById("myannDate").innerHTML = myData.annDate;
document.getElementById("mywkAnnDate").innerHTML = myData.wkAnnDate;
document.getElementById("myfamilyTime").innerHTML = myData.familyTime;
document.getElementById("mypets").innerHTML = myData.pets; 
document.getElementById("mystores").innerHTML = myData.stores;
document.getElementById("mycollect").innerHTML = myData.collect;
document.getElementById("mypersonMeet").innerHTML = myData.personMeet;
document.getElementById("mysweets").innerHTML = myData.sweets;
document.getElementById("myfood").innerHTML = myData.food;
document.getElementById("mydrink").innerHTML = myData.drink;
document.getElementById("myhobby").innerHTML = myData.hobby;
document.getElementById("mycolor").innerHTML = myData.color;
document.getElementById("mybookAuthor").innerHTML = myData.bookAuthor;
document.getElementById("mypoemPoet").innerHTML = myData.poemPoet;
document.getElementById("myvacation").innerHTML = myData.vacation;
document.getElementById("myfavoriteHoliday").innerHTML = myData.favoriteHoliday;
document.getElementById("myshowMovie").innerHTML = myData.showMovie;
document.getElementById("mymusicArtist").innerHTML = myData.musicArtist;
document.getElementById("myteamAthlete").innerHTML = myData.teamAthlete;
document.getElementById("myseason").innerHTML = myData.season;
document.getElementById("myrestaurants").innerHTML = myData.restaurants;
document.getElementById("mynoItem").innerHTML = myData.noItem;
document.getElementById("mynoFoodDrink").innerHTML = myData.noFoodDrink;
document.getElementById("mynoMedia").innerHTML = myData.noMedia;
document.getElementById("mynoTrinkets").innerHTML = myData.noTrinkets;


//search to find my secret pal's profile
var myPal = profiles.find(function (element){
  return (element.participantEmail === secretPal && element.groupName === groupName);
});

console.log(myPal);


document.getElementById("palbdayDate").innerHTML = myPal.bdayDate;
document.getElementById("palannDate").innerHTML = myPal.annDate;
document.getElementById("palwkAnnDate").innerHTML = myPal.wkAnnDate;
document.getElementById("palfamilyTime").innerHTML = myPal.familyTime;
document.getElementById("palpets").innerHTML = myPal.pets; 
document.getElementById("palstores").innerHTML = myPal.stores;
document.getElementById("palcollect").innerHTML = myPal.collect;
document.getElementById("palpersonMeet").innerHTML = myPal.personMeet;
document.getElementById("palsweets").innerHTML = myPal.sweets;
document.getElementById("palfood").innerHTML = myPal.food;
document.getElementById("paldrink").innerHTML = myPal.drink;
document.getElementById("palhobby").innerHTML = myPal.hobby;
document.getElementById("palcolor").innerHTML = myPal.color;
document.getElementById("palbookAuthor").innerHTML = myPal.bookAuthor;
document.getElementById("palpoemPoet").innerHTML = myPal.poemPoet;
document.getElementById("palvacation").innerHTML = myPal.vacation;
document.getElementById("palfavoriteHoliday").innerHTML = myPal.favoriteHoliday;
document.getElementById("palshowMovie").innerHTML = myPal.showMovie;
document.getElementById("palmusicArtist").innerHTML = myPal.musicArtist;
document.getElementById("palteamAthlete").innerHTML = myPal.teamAthlete;
document.getElementById("palseason").innerHTML = myPal.season;
document.getElementById("palrestaurants").innerHTML = myPal.restaurants;
document.getElementById("palnoItem").innerHTML = myPal.noItem;
document.getElementById("palnoFoodDrink").innerHTML = myPal.noFoodDrink;
document.getElementById("palnoMedia").innerHTML = myPal.noMedia;
document.getElementById("palnoTrinkets").innerHTML = myPal.noTrinkets;
};

});


var profiles = [
  {groupName: "santa", participantEmail: "user3@pal.com", bdayDate: "03/31/1955", annDate: "07/01/1989", wkAnnDate: "11/15/1999", familyTime: "camping", pets: "5 dogs", stores: "cabelas", collect: "dust", personMeet: "great grandmother", sweets: "chocolate", food: "cherries", drink: "margaritas", hobby: "photography", color: "blue", bookAuthor: "a a milne", poemPoet: "kalil gabral", vacation: "all over", favoriteHoliday: "birthday", showMovie: "big bang theory", musicArtist: "janis ian", teamAthlete: "colts", season: "spring", restaurants: "mexican", noItem: "", noFoodDrink: "licorice", noMedia: "", noTrinkets: ""},
  {groupName: "santa", participantEmail: "user1@pal.com", bdayDate: "01/01/1970", annDate: "01/01/1990", wkAnnDate: "01/01/1995", familyTime: "fishing", pets: "5 dogs", stores: "sears", collect: "nothing", personMeet: "ghandi", sweets: "chocolate", food: "cherries", drink: "margaritas", hobby: "photography", color: "blue", bookAuthor: "a a milne", poemPoet: "kalil gabral", vacation: "all over", favoriteHoliday: "birthday", showMovie: "big bang theory", musicArtist: "janis ian", teamAthlete: "colts", season: "spring", restaurants: "mexican", noItem: "", noFoodDrink: "licorice", noMedia: "", noTrinkets: ""},
  {groupName: "santa", participantEmail: "user2@pal.com", bdayDate: "05/30/1955", annDate: "06/01/1989", wkAnnDate: "10/15/1997", familyTime: "shopping", pets: "goldfish", stores: "payless", collect: "cars", personMeet: "great grandmother", sweets: "chocolate", food: "cherries", drink: "margaritas", hobby: "photography", color: "blue", bookAuthor: "a a milne", poemPoet: "kalil gabral", vacation: "all over", favoriteHoliday: "birthday", showMovie: "big bang theory", musicArtist: "janis ian", teamAthlete: "colts", season: "spring", restaurants: "mexican", noItem: "", noFoodDrink: "licorice", noMedia: "", noTrinkets: ""},
  {groupName: "santa", participantEmail: "user4@pal.com", bdayDate: "06/13/1970", annDate: "08/01/1999", wkAnnDate: "11/15/2006", familyTime: "vacationing", pets: "fluffy", stores: "target", collect: "marbles", personMeet: "great grandmother", sweets: "snickers", food: "cherries", drink: "margaritas", hobby: "photography", color: "blue", bookAuthor: "a a milne", poemPoet: "kalil gabral", vacation: "all over", favoriteHoliday: "birthday", showMovie: "big bang theory", musicArtist: "janis ian", teamAthlete: "colts", season: "spring", restaurants: "mexican", noItem: "", noFoodDrink: "licorice", noMedia: "", noTrinkets: ""},
  {groupName: "elves", participantEmail: "user3@elves.com", bdayDate: "01/15/1965", annDate: "04/01/1989", wkAnnDate: "02/01/2010", familyTime: "", pets: "snake", stores: "", collect: "money", personMeet: "great grandmother", sweets: "chocolate", food: "cherries", drink: "beer", hobby: "photography", color: "blue", bookAuthor: "a a milne", poemPoet: "kalil gabral", vacation: "all over", favoriteHoliday: "birthday", showMovie: "big bang theory", musicArtist: "janis ian", teamAthlete: "colts", season: "spring", restaurants: "mexican", noItem: "", noFoodDrink: "licorice", noMedia: "", noTrinkets: ""},
  {groupName: "elves", participantEmail: "user1@elves.com", bdayDate: "03/31/1970", annDate: "07/01/2005", wkAnnDate: "04/15/2008", familyTime: "", pets: "2 catss", stores: "", collect: "memories", personMeet: "great grandmother", sweets: "chocolate", food: "cherries", drink: "margaritas", hobby: "photography", color: "blue", bookAuthor: "a a milne", poemPoet: "kalil gabral", vacation: "all over", favoriteHoliday: "birthday", showMovie: "big bang theory", musicArtist: "janis ian", teamAthlete: "colts", season: "spring", restaurants: "mexican", noItem: "", noFoodDrink: "licorice", noMedia: "", noTrinkets: ""},

]


var partTable = [
  {groupName: "santa", participantEmail: "user1@pal.com", terms: "x", survey: "x", matchEmail: "user3@pal.com"},
  {groupName: "santa", participantEmail: "user2@pal.com", terms: "x", survey: "x", matchEmail: "user5@pal.com"},
  {groupName: "santa", participantEmail: "user3@pal.com", terms: "x", survey: "x", matchEmail: "user1@pal.com"},
  {groupName: "santa", participantEmail: "user4@pal.com", terms: "x", survey: "x", matchEmail: "user2@pal.com"},
  {groupName: "santa", participantEmail: "user5@pal.com", terms: "x", survey: "x", matchEmail: "user4@pal.com"},
  {groupName: "elves", participantEmail: "user1@elves.com", terms: "x", survey: "x", matchEmail: "user3@elves.com"},
  {groupName: "elves", participantEmail: "user3@elves.com", terms: "x", survey: "x", matchEmail: "user1@elves.com"},
] 
