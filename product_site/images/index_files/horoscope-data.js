
var sign = "Gemini"
var birthMonth = "May"
var birthDate = "28"
var luckyNumber = "7"
var description = "Gemini is known for curiosity, adaptability, and communication skills"
var believe = false;

document.getElementById("sign").textContent = sign

document.querySelector(".birthday").textContent = "Birthday: " + birthMonth + " " + birthDate

document.querySelector(".luckyNum").textContent = "Lucky Number: " + luckyNumber

document.querySelectorAll("p")[0].textContent = description;

if(believe)document.querySelectorAll("p")[1].textContent = "Do I believe in astrology? " + believe;
else document.querySelectorAll("p")[1].textContent = "Do I believe in astrology? " + believe;

var geminiMood1 = 4;
var geminiMood2 = 5;
var capricornMood = 3;


var averageMood = (geminiMood1 + geminiMood2 + capricornMood) / 3

document.querySelectorAll("p")[2].textContent = 
"Today's mood rating for Gemini: " + geminiMood1 + " out of 5. The average mood rating of Gemini 1, Gemini 2, and Capricorn is: " + averageMood;
 
var signs = [ "Capricorn", "Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius"];

var mySign = signs[5];

var partnerSign1 = signs[1];

var partnerSign2 = signs[5];

document.getElementsByTagName('p')[3].textContent = "My zodiac sign is: " + mySign
document.getElementsByTagName('p')[4].textContent = "Ty's zodiac sign is: " + partnerSign1
document.getElementsByTagName('p')[5].textContent = "David's zodiac sign is: " + partnerSign2

var descriptions = ["Today is a day for new beginnings. Embrace change and seize opportunities.",
                    "Your determination will lead to success today. Stay focused on your goals.",
                    "Communication is key today. Express yourself clearly and listen to others.",
                    "Trust your intuition. It will guide you in making the right decisions.",
                    "Your creativity shines today. Use it to inspire and lead others.",
                    "Pay attention to the details. Your meticulous work will pay off.",
                    "Balance is essential. Find harmony in all aspects of your life.",
                    "Embrace transformation. Let go of what no longer serves you.",
                    "Adventure awaits. Explore new horizons and expand your horizons.",
                    "Hard work leads to success. Keep pushing toward your goals.",
                    "Your unique perspective is an asset. Share your ideas with others.",
                    "Trust your emotions. They will guide you in making the right choices."
                ]
                myDescription = descriptions[5]

                partnerDescription1 = descriptions[1]

                partnerDescription2 = descriptions[5]

                document.getElementsByTagName('p')[6].textContent = mySign + " Horoscope: " + myDescription
                document.getElementsByTagName('p')[7].textContent = partnerSign1 + " Horoscope: " + partnerDescription1
                document.getElementsByTagName('p')[8].textContent = partnerSign2 + " Horoscope: " + partnerDescription2



