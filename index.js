'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.8d425812-0efe-4487-99fc-4e7c70adcfd8"; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Daily Fact';

/**
 * Array containing space facts.
 */
var FACTS = [
    "The word \"nerd\" was first coined by Dr. Seuss in \"If I Ran the Zoo.\"",
    "A year on Mercury is just 88 days long.",
    "On Mars, the Sun appears about half the size as it does on Earth.",
    "Saturn radiates two and a half times more energy into space than it receives from the sun.",
    "The Moon is moving approximately 3.8 cm away from our planet every year.",
    "When a male penguin falls in love with female penguin, he searches the entire beach to find the perfect pebble to present to her.",
    "It is illegal to climb trees in Oshawa, a town in Ontario, Canada.",
    "The citrus soda 7-UP was created in 1929; "7" was selected because the original containers were 7 ounces. "UP" indicated the direction of the bubbles.",
    "The average person spends about 2 years on the phone in a lifetime.",
    "The Baby Ruth candy bar was actually named after Grover Cleveland's baby daughter, Ruth.",
    "On average, there are 178 sesame seeds on each McDonalds BigMac bun.",
    "Minus 40 degrees Celsius is exactly the same as minus 40 degrees Fahrenheit",
    "Revolvers cannot be silenced because of all the noisy gasses which escape the cylinder gap at the rear of the barrel.",
    "Paul Revere rode on a horse that belonged to Deacon Larkin.",
    "Brown eyes are blue underneath, and you can actually get a surgery to turn brown eyes blue.",
    "Nobody knows who built the Taj Mahal. The names of the architects, masons, and designers that have come down to us have all proved to be latter-day inventions, and there is no evidence to indicate who the real creators were.",
    "When you blush, the lining of your stomach also turns red.",
    "A bolt of lightning is six times hotter than the sun.",
    "Only 2% of Earth population naturally has green eyes.",
    "Earth is the only planet not named after a god.",
    "Having bridesmaids in a wedding wasn’t originally for moral support. They were intended to confuse evil spirits or those who wished to harm the bride.",
    "If you have 3 quarters, 4 dimes, and 4 pennies, you have $1.19. You also have the largest amount of money in coins without being able to make change for a dollar.",
    "The 57 on Heinz ketchup bottles represents the number of varieties of pickles the company once had.",
    "A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.",
    "Cats sleep 16 to 18 hours per day.",
    "Venus rotates counter-clockwise, possibly because of a collision in the past with an asteroid.",
    "Karoke means \"empty orchestra\" in Japanese.",
    "The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.",
    "Rhode Island is the smallest state with the longest name. The official name, used on all state documents, is \"Rhode Island and Providence Plantations\"",
    "The Sun contains 99.86% of the mass in the Solar System.",
    "When you die your hair still grows for a couple of months.",
    "It took Leo Tolstoy six years to write \"War & Peace\".",
    "The Neanderthal's brain was bigger than yours is.",
    "1 in 5,000 north Atlantic lobsters are born bright blue.",
    "Jupiter has the shortest day of all the planets.",
    "The king of hearts is the only king without a moustache.",
    "Every year about 98% of the atoms in your body are replaced.",
    "Diet Coke was only invented in 1982.",
    "The Sun is an almost perfect sphere.",
    "There are more than 1,700 references to gems and precious stones in the King James translation of the Bible.",
    "Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.",
    "There are twice as many kangaroos in Australia as there are people. The kangaroo population is estimated at about 40 million.",
    "Police dogs are trained to react to commands in a foreign language; commonly German but more recently Hungarian.",
    "The Australian $5 to $100 notes are made of plastic.",
    "The average person makes about 1,140 telephone calls each year",
    "Charlie Brown's father was a barber.",
    "The fist product to have a bar code was Wrigleys gum.",
    "A 41-gun salute is the traditional salute to a royal birth in Great Britain.",
    "Cats can hear ultrasound.",
    "Dueling is legal in Paraguay as long as both parties are registered blood donors.",
    "Every human spent about half an hour as a single cell.",
    "The earliest recorded case of a man giving up smoking was on April 5, 1679, when Johan Katsu, Sheriff of Turku, Finland, wrote in his diary \"I quit smoking tobacco.\" He died one month later.",
    "The temperature inside the Sun can reach 15 million degrees Celsius.",
    "The bagpipe was originally made from the whole skin of a dead sheep.",
    "Turning a clock's hands counterclockwise while setting it is not necessarily harmful. It is only damaging when the timepiece contains a chiming mechanism.",
    "American car horns beep in the tone of F.",
    "The international telephone dialing code for Antarctica is 672",
    "Elephants are the only mammals that can't jump.",
    "Cherophobia is the fear of fun.",
    "Human saliva has a boiling point three times that of regular water.",
    "If you lift a kangaroo’s tail off the ground it can’t hop.",
    "Hyphephilia are people who get aroused by touching fabrics",
    "The person who invented the Frisbee was cremated and made into frisbees after he died!",
    "During your lifetime, you will produce enough saliva to fill two swimming pools.",
    "Polar bears can eat as many as 86 penguins in a single sitting.",
    "King Henry VIII slept with a gigantic axe beside him.",
    "Bikinis and tampons invented by men.",
    "Ants never sleep in their whole life",
    "The pound key on a keyboard is clald an octotroph",
    "Polar Bear's skin is black. Its fur is not white, it is clear",
    "All Animals dream",
    "In a typical lifetime, we spend over 6 years dreaming",
    "Right handed people, on average, live 9 years longer than left-handed people",
    "Everyday, you are breathing about 14 of other people's farts",
    "No word in the english language rhymes with month",
    "An eagle can kill a young deer and fly away with it.",
    "The average woman uses her height in lipstick every 5 years.",
    "The elephant is the only animal with 4 knees.",
    "Kansas state law requires pedestrians crossing the highways at night to wear tail lights."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a random fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
