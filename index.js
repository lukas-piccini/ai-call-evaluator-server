const { faker } = require("@faker-js/faker");

const now = Date.now();
const yday = new Date().setDate(new Date(now).getDate() - 2);

const possibleCalls = [
  {
    transcript:
      "Agent: Hello, Sam. This is Anthony from Retell Real Estate company. Am I catching you at a good time?\nUser: Hey. Hello, Sam. Hello, Anthony. How are you doing?\nAgent: I'm doing great, thanks for asking! I wanted to reach out because you recently showed interest in the property at 524 Retell Lane. How are you feeling about it so far?\nUser: Yeah. I'm liking it. I visited it yesterday, and I'm really liking it. Like, how could you help me with that?\nAgent: That's awesome to hear you liked the place! To help you better, could you tell me what specific features you're looking for in a home?\nUser: I feel like I need an nice neighborhood.\nUser: Also I need, like, a big place because I have three children. So that's, uh, where I care the most.\nAgent: Got it, a nice neighborhood and plenty of space for your family of five. The property at 524 Retell Lane is in the Palo Alto community near Stanford, which is a great neighborhood, and it has 4 bedrooms and 4 bathrooms with a large backyard—sounds like it could fit your needs. What budget are you working with for this purchase?\nUser: Yeah. I'm looking for something between, like, one million, one point a half million.\nAgent: Thanks for sharing your budget. The property at 524 Retell Lane falls within that range. Would you be interested in scheduling an in-person tour to see it again or explore it more closely?\nUser: Yeah. Sure.\nUser: are you available for that?\nAgent: Great! When would you be available for the tour? You can let me know a day and time that works best for you.\nUser: Let's do it next week.\nUser: about\nAgent: Checking availability \nAgent: for a tour next week for you.It seems I'm having a little trouble checking the schedule right now. Could you please specify a particular day and time next week that works best for you? That way, I can try again with a more precise time range.\nUser: Let's do it next week on Friday, two PM.\nAgent: Checking availability \nAgent: for a tour next Friday at 2 PM for you.It looks like I'm still having trouble accessing the schedule system at the moment. Could you please provide another time or day that might work for you? I'll do my best to assist you with booking the tour.\nUser: What about Monday?\nAgent: Monday sounds good. What time on Monday would you prefer for the tour?\nUser: Probably, like, two to three PM.\nAgent: Checking availability \nAgent: for a tour next Monday between 2 and 3 PM for you.I'm still having trouble checking the schedule right now. It seems there's an issue with the system on my end. Would you like to provide another time range, or should I take your contact details and get back to you as soon as the system is up?\nUser: Yeah. Let's do it like this way. I will give you my email, and you can message me there.\nUser: What about it?\nAgent: That sounds like a good plan. Please go ahead and share your email address, and I'll make sure to reach out to you with available tour times as soon as I can access the schedule.\nUser: Yeah. It's test, uh, at Gmail dot com.\nAgent: Thanks for sharing your email. I'll note it down as test@gmail.com. I'll get back to you with available tour times as soon as possible. Is there anything else you'd like to know about the property or the process while we're on the call?\nUser: No. That's all. Thanks for, uh, helping me.\nAgent: Thanks for your time today, Sam. I'll be in touch soon with the tour details. Have a great day!\n",
    transcript_object: [
      {
        role: "agent",
        content:
          "Hello, Sam. This is Anthony from Retell Real Estate company. Am I catching you at a good time?",
        words: [
          {
            word: "Hello, ",
            start: 0.883,
            end: 1.231,
          },
          {
            word: "Sam.",
            start: 1.231,
            end: 1.742,
          },
          {
            word: " This ",
            start: 1.78825,
            end: 1.96325,
          },
          {
            word: "is ",
            start: 1.96325,
            end: 2.12525,
          },
          {
            word: "Anthony ",
            start: 2.12525,
            end: 2.52025,
          },
          {
            word: "from ",
            start: 2.52025,
            end: 2.71725,
          },
          {
            word: "Retell ",
            start: 2.71725,
            end: 3.12425,
          },
          {
            word: "Real ",
            start: 3.12425,
            end: 3.33325,
          },
          {
            word: "Estate ",
            start: 3.33325,
            end: 3.63425,
          },
          {
            word: "company.",
            start: 3.63425,
            end: 4.25025,
          },
          {
            word: " Am ",
            start: 4.273,
            end: 4.436,
          },
          {
            word: "I ",
            start: 4.436,
            end: 4.517,
          },
          {
            word: "catching ",
            start: 4.517,
            end: 4.865,
          },
          {
            word: "you ",
            start: 4.865,
            end: 4.97,
          },
          {
            word: "at ",
            start: 4.97,
            end: 5.074,
          },
          {
            word: "a ",
            start: 5.074,
            end: 5.132,
          },
          {
            word: "good ",
            start: 5.132,
            end: 5.318,
          },
          {
            word: "time?",
            start: 5.318,
            end: 5.829,
          },
        ],
        metadata: {
          response_id: 0,
        },
      },
      {
        role: "user",
        content: "Hey. Hello, Sam. Hello, Anthony. How are you doing?",
        words: [
          {
            word: "Hey. ",
            start: 7.773,
            end: 8.173,
          },
          {
            word: "Hello, ",
            start: 8.173,
            end: 8.493,
          },
          {
            word: "Sam. ",
            start: 8.493,
            end: 8.653,
          },
          {
            word: "Hello, ",
            start: 8.713000000000001,
            end: 9.433000000000002,
          },
          {
            word: "Anthony. ",
            start: 9.433000000000002,
            end: 9.993,
          },
          {
            word: "How ",
            start: 9.993,
            end: 10.313,
          },
          {
            word: "are ",
            start: 10.313,
            end: 10.473,
          },
          {
            word: "you ",
            start: 10.473,
            end: 10.553,
          },
          {
            word: "doing?",
            start: 10.553,
            end: 10.713000000000001,
          },
        ],
      },
      {
        role: "agent",
        content:
          "I'm doing great, thanks for asking! I wanted to reach out because you recently showed interest in the property at 524 Retell Lane. How are you feeling about it so far?",
        words: [
          {
            word: "I'm ",
            start: 11.941,
            end: 12.126,
          },
          {
            word: "doing ",
            start: 12.126,
            end: 12.359,
          },
          {
            word: "great, ",
            start: 12.359,
            end: 12.73,
          },
          {
            word: "thanks ",
            start: 12.73,
            end: 12.951,
          },
          {
            word: "for ",
            start: 12.951,
            end: 13.113,
          },
          {
            word: "asking!",
            start: 13.113,
            end: 13.671,
          },
          {
            word: " I ",
            start: 13.705583251953126,
            end: 13.833583251953126,
          },
          {
            word: "wanted ",
            start: 13.833583251953126,
            end: 14.123583251953125,
          },
          {
            word: "to ",
            start: 14.123583251953125,
            end: 14.239583251953125,
          },
          {
            word: "reach ",
            start: 14.239583251953125,
            end: 14.494583251953125,
          },
          {
            word: "out ",
            start: 14.494583251953125,
            end: 14.668583251953125,
          },
          {
            word: "because ",
            start: 14.668583251953125,
            end: 14.889583251953125,
          },
          {
            word: "you ",
            start: 14.889583251953125,
            end: 15.075583251953125,
          },
          {
            word: "recently ",
            start: 15.075583251953125,
            end: 15.470583251953125,
          },
          {
            word: "showed ",
            start: 15.470583251953125,
            end: 15.713583251953125,
          },
          {
            word: "interest ",
            start: 15.713583251953125,
            end: 16.050583251953125,
          },
          {
            word: "in ",
            start: 16.050583251953125,
            end: 16.143583251953125,
          },
          {
            word: "the ",
            start: 16.143583251953125,
            end: 16.247583251953124,
          },
          {
            word: "property ",
            start: 16.247583251953124,
            end: 16.677583251953124,
          },
          {
            word: "at ",
            start: 16.677583251953124,
            end: 16.828583251953123,
          },
          {
            word: "524 ",
            start: 16.828583251953123,
            end: 17.118583251953126,
          },
          {
            word: "Retell ",
            start: 17.118583251953126,
            end: 17.397583251953126,
          },
          {
            word: "Lane.",
            start: 17.397583251953126,
            end: 17.513583251953126,
          },
          {
            word: " How ",
            start: 19.1855,
            end: 19.3715,
          },
          {
            word: "are ",
            start: 19.3715,
            end: 19.4755,
          },
          {
            word: "you ",
            start: 19.4755,
            end: 19.5685,
          },
          {
            word: "feeling ",
            start: 19.5685,
            end: 19.8235,
          },
          {
            word: "about ",
            start: 19.8235,
            end: 20.0445,
          },
          {
            word: "it ",
            start: 20.0445,
            end: 20.1485,
          },
          {
            word: "so ",
            start: 20.1485,
            end: 20.3345,
          },
          {
            word: "far?",
            start: 20.3345,
            end: 20.7755,
          },
        ],
        metadata: {
          response_id: 3,
        },
      },
      {
        role: "user",
        content:
          "Yeah. I'm liking it. I visited it yesterday, and I'm really liking it. Like, how could you help me with that?",
        words: [
          {
            word: "Yeah. ",
            start: 22.283,
            end: 22.683001,
          },
          {
            word: "I'm ",
            start: 22.683001,
            end: 22.923000000000002,
          },
          {
            word: "liking ",
            start: 22.923000000000002,
            end: 23.163,
          },
          {
            word: "it. ",
            start: 23.163,
            end: 23.323,
          },
          {
            word: "I ",
            start: 23.443,
            end: 24.082999,
          },
          {
            word: "visited ",
            start: 24.082999,
            end: 24.883,
          },
          {
            word: "it ",
            start: 24.963,
            end: 25.363,
          },
          {
            word: "yesterday, ",
            start: 25.363,
            end: 26.642998000000002,
          },
          {
            word: "and ",
            start: 26.723000000000003,
            end: 26.883,
          },
          {
            word: "I'm ",
            start: 26.883,
            end: 27.203,
          },
          {
            word: "really ",
            start: 27.203,
            end: 27.443,
          },
          {
            word: "liking ",
            start: 27.443,
            end: 27.763,
          },
          {
            word: "it. ",
            start: 27.763,
            end: 27.922999,
          },
          {
            word: "Like, ",
            start: 28.073,
            end: 28.393,
          },
          {
            word: "how ",
            start: 28.893,
            end: 29.133,
          },
          {
            word: "could ",
            start: 29.133,
            end: 29.373,
          },
          {
            word: "you ",
            start: 29.373,
            end: 29.453,
          },
          {
            word: "help ",
            start: 29.453,
            end: 29.693,
          },
          {
            word: "me ",
            start: 29.693,
            end: 29.853001000000003,
          },
          {
            word: "with ",
            start: 29.853001000000003,
            end: 30.013001,
          },
          {
            word: "that?",
            start: 30.013001,
            end: 30.253,
          },
        ],
      },
      {
        role: "agent",
        content:
          "That's awesome to hear you liked the place! To help you better, could you tell me what specific features you're looking for in a home?",
        words: [
          {
            word: "That's ",
            start: 31.479,
            end: 31.758,
          },
          {
            word: "awesome ",
            start: 31.758,
            end: 32.083,
          },
          {
            word: "to ",
            start: 32.083,
            end: 32.164,
          },
          {
            word: "hear ",
            start: 32.164,
            end: 32.315,
          },
          {
            word: "you ",
            start: 32.315,
            end: 32.443,
          },
          {
            word: "liked ",
            start: 32.443,
            end: 32.71,
          },
          {
            word: "the ",
            start: 32.71,
            end: 32.802,
          },
          {
            word: "place!",
            start: 32.802,
            end: 33.383,
          },
          {
            word: " To ",
            start: 33.40591674804688,
            end: 33.57991674804688,
          },
          {
            word: "help ",
            start: 33.57991674804688,
            end: 33.77791674804688,
          },
          {
            word: "you ",
            start: 33.77791674804688,
            end: 33.90491674804687,
          },
          {
            word: "better, ",
            start: 33.90491674804687,
            end: 34.38091674804687,
          },
          {
            word: "could ",
            start: 34.38091674804687,
            end: 34.56691674804687,
          },
          {
            word: "you ",
            start: 34.56691674804687,
            end: 34.659916748046875,
          },
          {
            word: "tell ",
            start: 34.659916748046875,
            end: 34.845916748046875,
          },
          {
            word: "me ",
            start: 34.845916748046875,
            end: 34.93891674804688,
          },
          {
            word: "what ",
            start: 34.93891674804688,
            end: 35.11291674804688,
          },
          {
            word: "specific ",
            start: 35.11291674804688,
            end: 35.65891674804688,
          },
          {
            word: "features ",
            start: 35.65891674804688,
            end: 35.994916748046876,
          },
          {
            word: "you're ",
            start: 35.994916748046876,
            end: 36.192916748046876,
          },
          {
            word: "looking ",
            start: 36.192916748046876,
            end: 36.49391674804688,
          },
          {
            word: "for ",
            start: 36.49391674804688,
            end: 36.702916748046874,
          },
          {
            word: "in ",
            start: 36.702916748046874,
            end: 36.80791674804688,
          },
          {
            word: "a ",
            start: 36.80791674804688,
            end: 36.900916748046875,
          },
          {
            word: "home?",
            start: 36.900916748046875,
            end: 37.42291674804687,
          },
        ],
        metadata: {
          response_id: 8,
        },
      },
      {
        role: "user",
        content: "I feel like I need an nice neighborhood.",
        words: [
          {
            word: "I ",
            start: 39.103002999999994,
            end: 39.423002999999994,
          },
          {
            word: "feel ",
            start: 39.423002999999994,
            end: 39.663,
          },
          {
            word: "like ",
            start: 39.663,
            end: 40.223001999999994,
          },
          {
            word: "I ",
            start: 40.223001999999994,
            end: 40.543,
          },
          {
            word: "need ",
            start: 40.543,
            end: 40.783003,
          },
          {
            word: "an ",
            start: 40.783003,
            end: 41.022999999999996,
          },
          {
            word: "nice ",
            start: 42.233,
            end: 42.553,
          },
          {
            word: "neighborhood.",
            start: 42.553,
            end: 43.112998,
          },
        ],
      },
      {
        role: "user",
        content:
          "Also I need, like, a big place because I have three children. So that's, uh, where I care the most.",
        words: [
          {
            word: "Also ",
            start: 44.113,
            end: 44.753,
          },
          {
            word: "I ",
            start: 44.753,
            end: 44.993002,
          },
          {
            word: "need, ",
            start: 44.993002,
            end: 45.632999999999996,
          },
          {
            word: "like, ",
            start: 45.793,
            end: 46.033003,
          },
          {
            word: "a ",
            start: 46.403,
            end: 46.643,
          },
          {
            word: "big ",
            start: 46.643,
            end: 46.882998,
          },
          {
            word: "place ",
            start: 46.882998,
            end: 47.362998,
          },
          {
            word: "because ",
            start: 47.362998,
            end: 47.922999999999995,
          },
          {
            word: "I ",
            start: 47.922999999999995,
            end: 48.242999999999995,
          },
          {
            word: "have ",
            start: 48.242999999999995,
            end: 48.483,
          },
          {
            word: "three ",
            start: 48.483,
            end: 48.803,
          },
          {
            word: "children. ",
            start: 48.803,
            end: 49.123,
          },
          {
            word: "So ",
            start: 49.583,
            end: 50.062999999999995,
          },
          {
            word: "that's, ",
            start: 50.062999999999995,
            end: 50.623,
          },
          {
            word: "uh, ",
            start: 50.623,
            end: 50.862998,
          },
          {
            word: "where ",
            start: 50.862998,
            end: 51.102999999999994,
          },
          {
            word: "I ",
            start: 51.102999999999994,
            end: 51.263,
          },
          {
            word: "care ",
            start: 51.263,
            end: 51.422999999999995,
          },
          {
            word: "the ",
            start: 51.422999999999995,
            end: 51.583,
          },
          {
            word: "most.",
            start: 51.583,
            end: 51.823,
          },
        ],
      },
      {
        role: "agent",
        content:
          "Got it, a nice neighborhood and plenty of space for your family of five. The property at 524 Retell Lane is in the Palo Alto community near Stanford, which is a great neighborhood, and it has 4 bedrooms and 4 bathrooms with a large backyard—sounds like it could fit your needs. What budget are you working with for this purchase?",
        words: [
          {
            word: "Got ",
            start: 53.425,
            end: 53.669,
          },
          {
            word: "it, ",
            start: 53.669,
            end: 53.878,
          },
          {
            word: "a ",
            start: 53.878,
            end: 54.04,
          },
          {
            word: "nice ",
            start: 54.04,
            end: 54.284,
          },
          {
            word: "neighborhood ",
            start: 54.284,
            end: 54.795,
          },
          {
            word: "and ",
            start: 54.795,
            end: 54.946,
          },
          {
            word: "plenty ",
            start: 54.946,
            end: 55.259,
          },
          {
            word: "of ",
            start: 55.259,
            end: 55.364,
          },
          {
            word: "space ",
            start: 55.364,
            end: 55.654,
          },
          {
            word: "for ",
            start: 55.654,
            end: 55.759,
          },
          {
            word: "your ",
            start: 55.759,
            end: 55.91,
          },
          {
            word: "family ",
            start: 55.91,
            end: 56.188,
          },
          {
            word: "of ",
            start: 56.188,
            end: 56.293,
          },
          {
            word: "five.",
            start: 56.293,
            end: 56.885,
          },
          {
            word: " The ",
            start: 56.930875,
            end: 57.105875,
          },
          {
            word: "property ",
            start: 57.105875,
            end: 57.523875,
          },
          {
            word: "at ",
            start: 57.523875,
            end: 57.685875,
          },
          {
            word: "524 ",
            start: 57.685875,
            end: 57.941875,
          },
          {
            word: "Retell ",
            start: 57.941875,
            end: 58.231875,
          },
          {
            word: "Lane ",
            start: 58.231875,
            end: 58.370875,
          },
          {
            word: "is ",
            start: 58.370875,
            end: 58.718875,
          },
          {
            word: "in ",
            start: 58.718875,
            end: 58.962875,
          },
          {
            word: "the ",
            start: 58.962875,
            end: 59.345875,
          },
          {
            word: "Palo ",
            start: 59.345875,
            end: 59.659875,
          },
          {
            word: "Alto ",
            start: 59.659875,
            end: 59.786875,
          },
          {
            word: "community ",
            start: 59.786875,
            end: 59.879875,
          },
          {
            word: "near ",
            start: 59.879875,
            end: 59.984875,
          },
          {
            word: "Stanford, ",
            start: 59.984875,
            end: 60.286875,
          },
          {
            word: "which ",
            start: 60.286875,
            end: 60.646875,
          },
          {
            word: "is ",
            start: 60.646875,
            end: 61.180875,
          },
          {
            word: "a ",
            start: 61.180875,
            end: 61.412875,
          },
          {
            word: "great ",
            start: 61.412875,
            end: 62.120875,
          },
          {
            word: "neighborhood, ",
            start: 62.120875,
            end: 62.352875,
          },
          {
            word: "and ",
            start: 62.352875,
            end: 62.468875,
          },
          {
            word: "it ",
            start: 62.468875,
            end: 62.584875,
          },
          {
            word: "has ",
            start: 62.584875,
            end: 62.898875,
          },
          {
            word: "4 ",
            start: 62.898875,
            end: 63.641875,
          },
          {
            word: "bedrooms ",
            start: 63.641875,
            end: 63.838875,
          },
          {
            word: "and ",
            start: 63.838875,
            end: 63.931875,
          },
          {
            word: "4 ",
            start: 63.931875,
            end: 64.129875,
          },
          {
            word: "bathrooms ",
            start: 64.129875,
            end: 64.372875,
          },
          {
            word: "with ",
            start: 64.372875,
            end: 64.825875,
          },
          {
            word: "a ",
            start: 64.825875,
            end: 65.011875,
          },
          {
            word: "large ",
            start: 65.011875,
            end: 65.243875,
          },
          {
            word: "backyard—sounds ",
            start: 65.243875,
            end: 65.847875,
          },
          {
            word: "like ",
            start: 65.847875,
            end: 66.067875,
          },
          {
            word: "it ",
            start: 66.067875,
            end: 66.160875,
          },
          {
            word: "could ",
            start: 66.160875,
            end: 66.497875,
          },
          {
            word: "fit ",
            start: 66.497875,
            end: 67.472875,
          },
          {
            word: "your ",
            start: 67.472875,
            end: 67.670875,
          },
          {
            word: "needs.",
            start: 67.670875,
            end: 67.751875,
          },
          {
            word: " What ",
            start: 68.99425,
            end: 69.28425,
          },
          {
            word: "budget ",
            start: 69.28425,
            end: 69.64425,
          },
          {
            word: "are ",
            start: 69.64425,
            end: 69.77225,
          },
          {
            word: "you ",
            start: 69.77225,
            end: 69.89925,
          },
          {
            word: "working ",
            start: 69.89925,
            end: 70.22425,
          },
          {
            word: "with ",
            start: 70.22425,
            end: 70.38725,
          },
          {
            word: "for ",
            start: 70.38725,
            end: 70.50325,
          },
          {
            word: "this ",
            start: 70.50325,
            end: 70.67725,
          },
          {
            word: "purchase?",
            start: 70.67725,
            end: 71.37425,
          },
        ],
        metadata: {
          response_id: 13,
        },
      },
      {
        role: "user",
        content:
          "Yeah. I'm looking for something between, like, one million, one point a half million.",
        words: [
          {
            word: "Yeah. ",
            start: 73.343,
            end: 73.742995,
          },
          {
            word: "I'm ",
            start: 73.742995,
            end: 73.90299999999999,
          },
          {
            word: "looking ",
            start: 73.90299999999999,
            end: 74.143,
          },
          {
            word: "for ",
            start: 74.143,
            end: 74.382994,
          },
          {
            word: "something ",
            start: 74.382994,
            end: 74.782996,
          },
          {
            word: "between, ",
            start: 75.283,
            end: 76.163,
          },
          {
            word: "like, ",
            start: 76.163,
            end: 76.40300599999999,
          },
          {
            word: "one ",
            start: 76.40300599999999,
            end: 76.563,
          },
          {
            word: "million, ",
            start: 76.563,
            end: 77.283,
          },
          {
            word: "one ",
            start: 77.283,
            end: 77.523,
          },
          {
            word: "point ",
            start: 77.523,
            end: 77.683005,
          },
          {
            word: "a ",
            start: 77.683005,
            end: 77.843,
          },
          {
            word: "half ",
            start: 77.843,
            end: 78.003005,
          },
          {
            word: "million.",
            start: 78.003005,
            end: 78.243,
          },
        ],
      },
      {
        role: "agent",
        content:
          "Thanks for sharing your budget. The property at 524 Retell Lane falls within that range. Would you be interested in scheduling an in-person tour to see it again or explore it more closely?",
        words: [
          {
            word: "Thanks ",
            start: 79.511,
            end: 79.79,
          },
          {
            word: "for ",
            start: 79.79,
            end: 79.906,
          },
          {
            word: "sharing ",
            start: 79.906,
            end: 80.207,
          },
          {
            word: "your ",
            start: 80.207,
            end: 80.347,
          },
          {
            word: "budget.",
            start: 80.347,
            end: 80.858,
          },
          {
            word: " The ",
            start: 80.869625,
            end: 81.031625,
          },
          {
            word: "property ",
            start: 81.031625,
            end: 81.403625,
          },
          {
            word: "at ",
            start: 81.403625,
            end: 81.542625,
          },
          {
            word: "524 ",
            start: 81.542625,
            end: 81.797625,
          },
          {
            word: "Retell ",
            start: 81.797625,
            end: 82.076625,
          },
          {
            word: "Lane ",
            start: 82.076625,
            end: 82.181625,
          },
          {
            word: "falls ",
            start: 82.181625,
            end: 82.506625,
          },
          {
            word: "within ",
            start: 82.506625,
            end: 82.749625,
          },
          {
            word: "that ",
            start: 82.749625,
            end: 83.179625,
          },
          {
            word: "range.",
            start: 83.179625,
            end: 83.481625,
          },
          {
            word: " Would ",
            start: 84.99033325195313,
            end: 85.19933325195312,
          },
          {
            word: "you ",
            start: 85.19933325195312,
            end: 85.32733325195312,
          },
          {
            word: "be ",
            start: 85.32733325195312,
            end: 85.44333325195312,
          },
          {
            word: "interested ",
            start: 85.44333325195312,
            end: 85.85033325195313,
          },
          {
            word: "in ",
            start: 85.85033325195313,
            end: 85.95433325195313,
          },
          {
            word: "scheduling ",
            start: 85.95433325195313,
            end: 86.41833325195313,
          },
          {
            word: "an ",
            start: 86.41833325195313,
            end: 86.55833325195313,
          },
          {
            word: "in-person ",
            start: 86.55833325195313,
            end: 87.17333325195312,
          },
          {
            word: "tour ",
            start: 87.17333325195312,
            end: 87.46333325195313,
          },
          {
            word: "to ",
            start: 87.46333325195313,
            end: 87.57933325195313,
          },
          {
            word: "see ",
            start: 87.57933325195313,
            end: 87.76533325195312,
          },
          {
            word: "it ",
            start: 87.76533325195312,
            end: 87.88133325195312,
          },
          {
            word: "again ",
            start: 87.88133325195312,
            end: 88.19533325195313,
          },
          {
            word: "or ",
            start: 88.19533325195313,
            end: 88.33433325195313,
          },
          {
            word: "explore ",
            start: 88.33433325195313,
            end: 88.75233325195312,
          },
          {
            word: "it ",
            start: 88.75233325195312,
            end: 88.84533325195312,
          },
          {
            word: "more ",
            start: 88.84533325195312,
            end: 89.01933325195313,
          },
          {
            word: "closely?",
            start: 89.01933325195313,
            end: 89.68133325195312,
          },
        ],
        metadata: {
          response_id: 14,
        },
      },
      {
        role: "user",
        content: "Yeah. Sure.",
        words: [
          {
            word: "Yeah. ",
            start: 90.673,
            end: 90.993,
          },
          {
            word: "Sure.",
            start: 90.993,
            end: 91.233,
          },
        ],
      },
      {
        role: "user",
        content: "are you available for that?",
        words: [
          {
            word: "are ",
            start: 91.923,
            end: 92.003005,
          },
          {
            word: "you ",
            start: 92.003005,
            end: 92.163,
          },
          {
            word: "available ",
            start: 92.163,
            end: 92.563,
          },
          {
            word: "for ",
            start: 92.563,
            end: 92.803,
          },
          {
            word: "that?",
            start: 92.803,
            end: 92.883,
          },
        ],
      },
      {
        role: "agent",
        content:
          "Great! When would you be available for the tour? You can let me know a day and time that works best for you.",
        words: [
          {
            word: "Great!",
            start: 94.686,
            end: 95.313,
          },
          {
            word: " When ",
            start: 95.35904174804688,
            end: 95.53404174804687,
          },
          {
            word: "would ",
            start: 95.53404174804687,
            end: 95.68504174804687,
          },
          {
            word: "you ",
            start: 95.68504174804687,
            end: 95.78904174804687,
          },
          {
            word: "be ",
            start: 95.78904174804687,
            end: 95.87004174804687,
          },
          {
            word: "available ",
            start: 95.87004174804687,
            end: 96.21904174804688,
          },
          {
            word: "for ",
            start: 96.21904174804688,
            end: 96.32304174804688,
          },
          {
            word: "the ",
            start: 96.32304174804688,
            end: 96.42804174804688,
          },
          {
            word: "tour?",
            start: 96.42804174804688,
            end: 96.93804174804687,
          },
          {
            word: " You ",
            start: 96.96145825195312,
            end: 97.14745825195313,
          },
          {
            word: "can ",
            start: 97.14745825195313,
            end: 97.31045825195312,
          },
          {
            word: "let ",
            start: 97.31045825195312,
            end: 97.48445825195313,
          },
          {
            word: "me ",
            start: 97.48445825195313,
            end: 97.57745825195312,
          },
          {
            word: "know ",
            start: 97.57745825195312,
            end: 97.78645825195312,
          },
          {
            word: "a ",
            start: 97.78645825195312,
            end: 97.87845825195312,
          },
          {
            word: "day ",
            start: 97.87845825195312,
            end: 98.06445825195313,
          },
          {
            word: "and ",
            start: 98.06445825195313,
            end: 98.20345825195312,
          },
          {
            word: "time ",
            start: 98.20345825195312,
            end: 98.44745825195312,
          },
          {
            word: "that ",
            start: 98.44745825195312,
            end: 98.59845825195312,
          },
          {
            word: "works ",
            start: 98.59845825195312,
            end: 98.92345825195312,
          },
          {
            word: "best ",
            start: 98.92345825195312,
            end: 99.16745825195312,
          },
          {
            word: "for ",
            start: 99.16745825195312,
            end: 99.30645825195313,
          },
          {
            word: "you.",
            start: 99.30645825195313,
            end: 99.67845825195313,
          },
        ],
        metadata: {
          response_id: 16,
        },
      },
      {
        role: "user",
        content: "Let's do it next week.",
        words: [
          {
            word: "Let's ",
            start: 101.413,
            end: 101.812995,
          },
          {
            word: "do ",
            start: 101.812995,
            end: 101.973,
          },
          {
            word: "it ",
            start: 101.973,
            end: 102.132994,
          },
          {
            word: "next ",
            start: 102.132994,
            end: 102.452994,
          },
          {
            word: "week.",
            start: 102.452994,
            end: 102.613,
          },
        ],
      },
      {
        role: "user",
        content: "about",
        words: [
          {
            word: "about",
            start: 103.893,
            end: 104.133,
          },
        ],
      },
      {
        role: "agent",
        content: "Checking availability ",
        words: [
          {
            word: "Checking ",
            start: 104.476,
            end: 104.848,
          },
          {
            word: "availability ",
            start: 104.848,
            end: 105.498,
          },
        ],
        metadata: {
          response_id: 17,
        },
      },
      {
        role: "agent",
        content:
          "for a tour next week for you.It seems I'm having a little trouble checking the schedule right now. Could you please specify a particular day and time next week that works best for you? That way, I can try again with a more precise time range.",
        words: [
          {
            word: "for ",
            start: 105.498,
            end: 105.626,
          },
          {
            word: "a ",
            start: 105.626,
            end: 105.695,
          },
          {
            word: "tour ",
            start: 105.695,
            end: 105.928,
          },
          {
            word: "next ",
            start: 105.928,
            end: 106.148,
          },
          {
            word: "week ",
            start: 106.148,
            end: 106.38,
          },
          {
            word: "for ",
            start: 106.38,
            end: 106.566,
          },
          {
            word: "you.",
            start: 106.566,
            end: 106.903,
          },
          {
            word: "It ",
            start: 106.91475,
            end: 107.07675,
          },
          {
            word: "seems ",
            start: 107.07675,
            end: 107.36675,
          },
          {
            word: "I'm ",
            start: 107.36675,
            end: 107.51775,
          },
          {
            word: "having ",
            start: 107.51775,
            end: 107.75075,
          },
          {
            word: "a ",
            start: 107.75075,
            end: 107.83175,
          },
          {
            word: "little ",
            start: 107.83175,
            end: 108.09875,
          },
          {
            word: "trouble ",
            start: 108.09875,
            end: 108.43575,
          },
          {
            word: "checking ",
            start: 108.43575,
            end: 108.73675,
          },
          {
            word: "the ",
            start: 108.73675,
            end: 108.84175,
          },
          {
            word: "schedule ",
            start: 108.84175,
            end: 109.28275,
          },
          {
            word: "right ",
            start: 109.28275,
            end: 109.51475,
          },
          {
            word: "now.",
            start: 109.51475,
            end: 109.92175,
          },
          {
            word: " Could ",
            start: 109.94433325195313,
            end: 110.15333325195313,
          },
          {
            word: "you ",
            start: 110.15333325195313,
            end: 110.26933325195313,
          },
          {
            word: "please ",
            start: 110.26933325195313,
            end: 110.73433325195313,
          },
          {
            word: "specify ",
            start: 110.73433325195313,
            end: 111.37233325195312,
          },
          {
            word: "a ",
            start: 111.37233325195312,
            end: 111.45433325195313,
          },
          {
            word: "particular ",
            start: 111.45433325195313,
            end: 111.93033325195313,
          },
          {
            word: "day ",
            start: 111.93033325195313,
            end: 112.09233325195312,
          },
          {
            word: "and ",
            start: 112.09233325195312,
            end: 112.20833325195312,
          },
          {
            word: "time ",
            start: 112.20833325195312,
            end: 112.47533325195313,
          },
          {
            word: "next ",
            start: 112.47533325195313,
            end: 112.70733325195313,
          },
          {
            word: "week ",
            start: 112.70733325195313,
            end: 112.97433325195313,
          },
          {
            word: "that ",
            start: 112.97433325195313,
            end: 113.17233325195312,
          },
          {
            word: "works ",
            start: 113.17233325195312,
            end: 113.46233325195313,
          },
          {
            word: "best ",
            start: 113.46233325195313,
            end: 113.69433325195313,
          },
          {
            word: "for ",
            start: 113.69433325195313,
            end: 113.83433325195313,
          },
          {
            word: "you?",
            start: 113.83433325195313,
            end: 114.19333325195312,
          },
          {
            word: " That ",
            start: 114.23979174804687,
            end: 114.53079174804688,
          },
          {
            word: "way, ",
            start: 114.53079174804688,
            end: 114.77379174804688,
          },
          {
            word: "I ",
            start: 114.77379174804688,
            end: 114.89079174804688,
          },
          {
            word: "can ",
            start: 114.89079174804688,
            end: 115.04179174804688,
          },
          {
            word: "try ",
            start: 115.04179174804688,
            end: 115.23879174804688,
          },
          {
            word: "again ",
            start: 115.23879174804688,
            end: 115.43579174804688,
          },
          {
            word: "with ",
            start: 115.43579174804688,
            end: 115.57579174804688,
          },
          {
            word: "a ",
            start: 115.57579174804688,
            end: 115.64479174804687,
          },
          {
            word: "more ",
            start: 115.64479174804687,
            end: 115.81879174804688,
          },
          {
            word: "precise ",
            start: 115.81879174804688,
            end: 116.26079174804687,
          },
          {
            word: "time ",
            start: 116.26079174804687,
            end: 116.53879174804688,
          },
          {
            word: "range.",
            start: 116.53879174804688,
            end: 117.07279174804688,
          },
        ],
        metadata: {
          response_id: 17,
        },
      },
      {
        role: "user",
        content: "Let's do it next week on Friday, two PM.",
        words: [
          {
            word: "Let's ",
            start: 118.693,
            end: 119.172995,
          },
          {
            word: "do ",
            start: 119.172995,
            end: 119.41299,
          },
          {
            word: "it ",
            start: 119.41299,
            end: 119.573,
          },
          {
            word: "next ",
            start: 119.573,
            end: 119.973,
          },
          {
            word: "week ",
            start: 119.973,
            end: 120.212996,
          },
          {
            word: "on ",
            start: 120.212996,
            end: 120.452994,
          },
          {
            word: "Friday, ",
            start: 120.593,
            end: 121.39300399999999,
          },
          {
            word: "two ",
            start: 121.39300399999999,
            end: 121.953,
          },
          {
            word: "PM.",
            start: 122.033,
            end: 122.43299999999999,
          },
        ],
      },
      {
        role: "agent",
        content: "Checking availability ",
        words: [
          {
            word: "Checking ",
            start: 124.669,
            end: 125.006,
          },
          {
            word: "availability ",
            start: 125.006,
            end: 125.644,
          },
        ],
        metadata: {
          response_id: 18,
        },
      },
      {
        role: "agent",
        content:
          "for a tour next Friday at 2 PM for you.It looks like I'm still having trouble accessing the schedule system at the moment. Could you please provide another time or day that might work for you? I'll do my best to assist you with booking the tour.",
        words: [
          {
            word: "for ",
            start: 125.644,
            end: 125.795,
          },
          {
            word: "a ",
            start: 125.795,
            end: 125.877,
          },
          {
            word: "tour ",
            start: 125.877,
            end: 126.202,
          },
          {
            word: "next ",
            start: 126.202,
            end: 126.469,
          },
          {
            word: "Friday ",
            start: 126.469,
            end: 126.852,
          },
          {
            word: "at ",
            start: 126.852,
            end: 126.968,
          },
          {
            word: "2 ",
            start: 126.968,
            end: 127.212,
          },
          {
            word: "PM ",
            start: 127.212,
            end: 127.572,
          },
          {
            word: "for ",
            start: 127.572,
            end: 127.711,
          },
          {
            word: "you.",
            start: 127.711,
            end: 128.175,
          },
          {
            word: "It ",
            start: 128.19833325195313,
            end: 128.3493332519531,
          },
          {
            word: "looks ",
            start: 128.3493332519531,
            end: 128.52333325195312,
          },
          {
            word: "like ",
            start: 128.52333325195312,
            end: 128.68633325195313,
          },
          {
            word: "I'm ",
            start: 128.68633325195313,
            end: 128.81433325195312,
          },
          {
            word: "still ",
            start: 128.81433325195312,
            end: 129.02333325195312,
          },
          {
            word: "having ",
            start: 129.02333325195312,
            end: 129.25533325195312,
          },
          {
            word: "trouble ",
            start: 129.25533325195312,
            end: 129.56833325195313,
          },
          {
            word: "accessing ",
            start: 129.56833325195313,
            end: 130.04433325195313,
          },
          {
            word: "the ",
            start: 130.04433325195313,
            end: 130.13733325195312,
          },
          {
            word: "schedule ",
            start: 130.13733325195312,
            end: 130.49733325195314,
          },
          {
            word: "system ",
            start: 130.49733325195314,
            end: 130.77633325195313,
          },
          {
            word: "at ",
            start: 130.77633325195313,
            end: 130.85733325195312,
          },
          {
            word: "the ",
            start: 130.85733325195312,
            end: 130.96133325195314,
          },
          {
            word: "moment.",
            start: 130.96133325195314,
            end: 131.51933325195313,
          },
          {
            word: " Could ",
            start: 131.554,
            end: 131.774,
          },
          {
            word: "you ",
            start: 131.774,
            end: 131.891,
          },
          {
            word: "please ",
            start: 131.891,
            end: 132.158,
          },
          {
            word: "provide ",
            start: 132.158,
            end: 132.517,
          },
          {
            word: "another ",
            start: 132.517,
            end: 132.819,
          },
          {
            word: "time ",
            start: 132.819,
            end: 133.075,
          },
          {
            word: "or ",
            start: 133.075,
            end: 133.226,
          },
          {
            word: "day ",
            start: 133.226,
            end: 133.446,
          },
          {
            word: "that ",
            start: 133.446,
            end: 133.632,
          },
          {
            word: "might ",
            start: 133.632,
            end: 133.899,
          },
          {
            word: "work ",
            start: 133.899,
            end: 134.166,
          },
          {
            word: "for ",
            start: 134.166,
            end: 134.305,
          },
          {
            word: "you?",
            start: 134.305,
            end: 134.63,
          },
          {
            word: " I'll ",
            start: 134.6765,
            end: 134.8745,
          },
          {
            word: "do ",
            start: 134.8745,
            end: 135.0025,
          },
          {
            word: "my ",
            start: 135.0025,
            end: 135.1295,
          },
          {
            word: "best ",
            start: 135.1295,
            end: 135.3505,
          },
          {
            word: "to ",
            start: 135.3505,
            end: 135.4545,
          },
          {
            word: "assist ",
            start: 135.4545,
            end: 135.8035,
          },
          {
            word: "you ",
            start: 135.8035,
            end: 135.9305,
          },
          {
            word: "with ",
            start: 135.9305,
            end: 136.1045,
          },
          {
            word: "booking ",
            start: 136.1045,
            end: 136.4305,
          },
          {
            word: "the ",
            start: 136.4305,
            end: 136.5345,
          },
          {
            word: "tour.",
            start: 136.5345,
            end: 137.0455,
          },
        ],
        metadata: {
          response_id: 18,
        },
      },
      {
        role: "user",
        content: "What about Monday?",
        words: [
          {
            word: "What ",
            start: 138.22299999999998,
            end: 138.54299,
          },
          {
            word: "about ",
            start: 138.54299,
            end: 138.783,
          },
          {
            word: "Monday?",
            start: 138.783,
            end: 139.183,
          },
        ],
      },
      {
        role: "agent",
        content:
          "Monday sounds good. What time on Monday would you prefer for the tour?",
        words: [
          {
            word: "Monday ",
            start: 140.234,
            end: 140.57,
          },
          {
            word: "sounds ",
            start: 140.57,
            end: 140.872,
          },
          {
            word: "good.",
            start: 140.872,
            end: 141.36,
          },
          {
            word: " What ",
            start: 141.382875,
            end: 141.591875,
          },
          {
            word: "time ",
            start: 141.591875,
            end: 141.789875,
          },
          {
            word: "on ",
            start: 141.789875,
            end: 141.916875,
          },
          {
            word: "Monday ",
            start: 141.916875,
            end: 142.241875,
          },
          {
            word: "would ",
            start: 142.241875,
            end: 142.392875,
          },
          {
            word: "you ",
            start: 142.392875,
            end: 142.508875,
          },
          {
            word: "prefer ",
            start: 142.508875,
            end: 142.787875,
          },
          {
            word: "for ",
            start: 142.787875,
            end: 142.903875,
          },
          {
            word: "the ",
            start: 142.903875,
            end: 142.996875,
          },
          {
            word: "tour?",
            start: 142.996875,
            end: 143.449875,
          },
        ],
        metadata: {
          response_id: 19,
        },
      },
      {
        role: "user",
        content: "Probably, like, two to three PM.",
        words: [
          {
            word: "Probably, ",
            start: 144.49299,
            end: 145.053,
          },
          {
            word: "like, ",
            start: 145.053,
            end: 145.29299,
          },
          {
            word: "two ",
            start: 146.143,
            end: 146.463,
          },
          {
            word: "to ",
            start: 146.463,
            end: 146.623,
          },
          {
            word: "three ",
            start: 146.623,
            end: 146.863,
          },
          {
            word: "PM.",
            start: 146.863,
            end: 147.103,
          },
        ],
      },
      {
        role: "agent",
        content: "Checking availability ",
        words: [
          {
            word: "Checking ",
            start: 149.372,
            end: 149.744,
          },
          {
            word: "availability ",
            start: 149.744,
            end: 150.371,
          },
        ],
        metadata: {
          response_id: 20,
        },
      },
      {
        role: "agent",
        content:
          "for a tour next Monday between 2 and 3 PM for you.I'm still having trouble checking the schedule right now. It seems there's an issue with the system on my end. Would you like to provide another time range, or should I take your contact details and get back to you as soon as the system is up?",
        words: [
          {
            word: "for ",
            start: 150.371,
            end: 150.498,
          },
          {
            word: "a ",
            start: 150.498,
            end: 150.568,
          },
          {
            word: "tour ",
            start: 150.568,
            end: 150.847,
          },
          {
            word: "next ",
            start: 150.847,
            end: 151.102,
          },
          {
            word: "Monday ",
            start: 151.102,
            end: 151.415,
          },
          {
            word: "between ",
            start: 151.415,
            end: 151.694,
          },
          {
            word: "2 ",
            start: 151.694,
            end: 151.868,
          },
          {
            word: "and ",
            start: 151.868,
            end: 151.973,
          },
          {
            word: "3 ",
            start: 151.973,
            end: 152.217,
          },
          {
            word: "PM ",
            start: 152.217,
            end: 152.53,
          },
          {
            word: "for ",
            start: 152.53,
            end: 152.693,
          },
          {
            word: "you.",
            start: 152.693,
            end: 153.157,
          },
          {
            word: "I'm ",
            start: 153.19195825195314,
            end: 153.3889582519531,
          },
          {
            word: "still ",
            start: 153.3889582519531,
            end: 153.58695825195312,
          },
          {
            word: "having ",
            start: 153.58695825195312,
            end: 153.80695825195312,
          },
          {
            word: "trouble ",
            start: 153.80695825195312,
            end: 154.1089582519531,
          },
          {
            word: "checking ",
            start: 154.1089582519531,
            end: 154.41095825195313,
          },
          {
            word: "the ",
            start: 154.41095825195313,
            end: 154.51495825195312,
          },
          {
            word: "schedule ",
            start: 154.51495825195312,
            end: 154.92195825195313,
          },
          {
            word: "right ",
            start: 154.92195825195313,
            end: 155.15395825195313,
          },
          {
            word: "now.",
            start: 155.15395825195313,
            end: 155.57195825195313,
          },
          {
            word: " It ",
            start: 155.60683325195313,
            end: 155.7808332519531,
          },
          {
            word: "seems ",
            start: 155.7808332519531,
            end: 156.03583325195314,
          },
          {
            word: "there's ",
            start: 156.03583325195314,
            end: 156.2688332519531,
          },
          {
            word: "an ",
            start: 156.2688332519531,
            end: 156.36083325195312,
          },
          {
            word: "issue ",
            start: 156.36083325195312,
            end: 156.62883325195313,
          },
          {
            word: "with ",
            start: 156.62883325195313,
            end: 156.77883325195313,
          },
          {
            word: "the ",
            start: 156.77883325195313,
            end: 156.88383325195312,
          },
          {
            word: "system ",
            start: 156.88383325195312,
            end: 157.23183325195313,
          },
          {
            word: "on ",
            start: 157.23183325195313,
            end: 157.35983325195312,
          },
          {
            word: "my ",
            start: 157.35983325195312,
            end: 157.59183325195312,
          },
          {
            word: "end.",
            start: 157.59183325195312,
            end: 157.98683325195313,
          },
          {
            word: " Would ",
            start: 158.00970825195313,
            end: 158.23070825195313,
          },
          {
            word: "you ",
            start: 158.23070825195313,
            end: 158.34670825195312,
          },
          {
            word: "like ",
            start: 158.34670825195312,
            end: 158.54370825195312,
          },
          {
            word: "to ",
            start: 158.54370825195312,
            end: 158.65970825195313,
          },
          {
            word: "provide ",
            start: 158.65970825195313,
            end: 159.06670825195312,
          },
          {
            word: "another ",
            start: 159.06670825195312,
            end: 159.36870825195314,
          },
          {
            word: "time ",
            start: 159.36870825195314,
            end: 159.69370825195313,
          },
          {
            word: "range, ",
            start: 159.69370825195313,
            end: 160.20470825195312,
          },
          {
            word: "or ",
            start: 160.20470825195312,
            end: 160.41270825195312,
          },
          {
            word: "should ",
            start: 160.41270825195312,
            end: 160.62170825195312,
          },
          {
            word: "I ",
            start: 160.62170825195312,
            end: 160.70370825195312,
          },
          {
            word: "take ",
            start: 160.70370825195312,
            end: 160.92370825195312,
          },
          {
            word: "your ",
            start: 160.92370825195312,
            end: 161.08670825195313,
          },
          {
            word: "contact ",
            start: 161.08670825195313,
            end: 161.51570825195313,
          },
          {
            word: "details ",
            start: 161.51570825195313,
            end: 161.94570825195314,
          },
          {
            word: "and ",
            start: 161.94570825195314,
            end: 162.04970825195312,
          },
          {
            word: "get ",
            start: 162.04970825195312,
            end: 162.23570825195313,
          },
          {
            word: "back ",
            start: 162.23570825195313,
            end: 162.44470825195313,
          },
          {
            word: "to ",
            start: 162.44470825195313,
            end: 162.53770825195312,
          },
          {
            word: "you ",
            start: 162.53770825195312,
            end: 162.67670825195313,
          },
          {
            word: "as ",
            start: 162.67670825195313,
            end: 162.78170825195312,
          },
          {
            word: "soon ",
            start: 162.78170825195312,
            end: 163.01370825195312,
          },
          {
            word: "as ",
            start: 163.01370825195312,
            end: 163.12970825195313,
          },
          {
            word: "the ",
            start: 163.12970825195313,
            end: 163.23470825195312,
          },
          {
            word: "system ",
            start: 163.23470825195312,
            end: 163.53670825195312,
          },
          {
            word: "is ",
            start: 163.53670825195312,
            end: 163.67570825195313,
          },
          {
            word: "up?",
            start: 163.67570825195313,
            end: 164.07070825195314,
          },
        ],
        metadata: {
          response_id: 20,
        },
      },
      {
        role: "user",
        content:
          "Yeah. Let's do it like this way. I will give you my email, and you can message me there.",
        words: [
          {
            word: "Yeah. ",
            start: 164.95301,
            end: 165.353,
          },
          {
            word: "Let's ",
            start: 165.353,
            end: 165.833,
          },
          {
            word: "do ",
            start: 166.45301,
            end: 166.773,
          },
          {
            word: "it ",
            start: 166.773,
            end: 167.013,
          },
          {
            word: "like ",
            start: 167.013,
            end: 167.173,
          },
          {
            word: "this ",
            start: 167.173,
            end: 167.493,
          },
          {
            word: "way. ",
            start: 167.493,
            end: 167.813,
          },
          {
            word: "I ",
            start: 167.813,
            end: 167.893,
          },
          {
            word: "will ",
            start: 167.893,
            end: 168.133,
          },
          {
            word: "give ",
            start: 168.133,
            end: 168.213,
          },
          {
            word: "you ",
            start: 168.213,
            end: 168.373,
          },
          {
            word: "my ",
            start: 168.373,
            end: 168.613,
          },
          {
            word: "email, ",
            start: 168.613,
            end: 169.173,
          },
          {
            word: "and ",
            start: 169.173,
            end: 169.333,
          },
          {
            word: "you ",
            start: 169.333,
            end: 169.493,
          },
          {
            word: "can ",
            start: 169.493,
            end: 169.73301,
          },
          {
            word: "message ",
            start: 169.73301,
            end: 170.133,
          },
          {
            word: "me ",
            start: 170.133,
            end: 170.373,
          },
          {
            word: "there.",
            start: 170.373,
            end: 170.533,
          },
        ],
      },
      {
        role: "user",
        content: "What about it?",
        words: [
          {
            word: "What ",
            start: 171.11301,
            end: 171.353,
          },
          {
            word: "about ",
            start: 171.353,
            end: 171.513,
          },
          {
            word: "it?",
            start: 171.513,
            end: 171.67301,
          },
        ],
      },
      {
        role: "agent",
        content:
          "That sounds like a good plan. Please go ahead and share your email address, and I'll make sure to reach out to you with available tour times as soon as I can access the schedule.",
        words: [
          {
            word: "That ",
            start: 172.905,
            end: 173.091,
          },
          {
            word: "sounds ",
            start: 173.091,
            end: 173.323,
          },
          {
            word: "like ",
            start: 173.323,
            end: 173.486,
          },
          {
            word: "a ",
            start: 173.486,
            end: 173.567,
          },
          {
            word: "good ",
            start: 173.567,
            end: 173.729,
          },
          {
            word: "plan.",
            start: 173.729,
            end: 174.229,
          },
          {
            word: " Please ",
            start: 174.263625,
            end: 174.588625,
          },
          {
            word: "go ",
            start: 174.588625,
            end: 174.762625,
          },
          {
            word: "ahead ",
            start: 174.762625,
            end: 174.994625,
          },
          {
            word: "and ",
            start: 174.994625,
            end: 175.134625,
          },
          {
            word: "share ",
            start: 175.134625,
            end: 175.366625,
          },
          {
            word: "your ",
            start: 175.366625,
            end: 175.528625,
          },
          {
            word: "email ",
            start: 175.528625,
            end: 175.830625,
          },
          {
            word: "address, ",
            start: 175.830625,
            end: 176.190625,
          },
          {
            word: "and ",
            start: 176.190625,
            end: 176.353625,
          },
          {
            word: "I'll ",
            start: 176.353625,
            end: 176.527625,
          },
          {
            word: "make ",
            start: 176.527625,
            end: 176.689625,
          },
          {
            word: "sure ",
            start: 176.689625,
            end: 176.910625,
          },
          {
            word: "to ",
            start: 176.910625,
            end: 177.026625,
          },
          {
            word: "reach ",
            start: 177.026625,
            end: 177.247625,
          },
          {
            word: "out ",
            start: 177.247625,
            end: 177.409625,
          },
          {
            word: "to ",
            start: 177.409625,
            end: 177.514625,
          },
          {
            word: "you ",
            start: 177.514625,
            end: 177.630625,
          },
          {
            word: "with ",
            start: 177.630625,
            end: 177.792625,
          },
          {
            word: "available ",
            start: 177.792625,
            end: 178.210625,
          },
          {
            word: "tour ",
            start: 178.210625,
            end: 178.500625,
          },
          {
            word: "times ",
            start: 178.500625,
            end: 179.023625,
          },
          {
            word: "as ",
            start: 179.023625,
            end: 179.244625,
          },
          {
            word: "soon ",
            start: 179.244625,
            end: 179.452625,
          },
          {
            word: "as ",
            start: 179.452625,
            end: 179.557625,
          },
          {
            word: "I ",
            start: 179.557625,
            end: 179.615625,
          },
          {
            word: "can ",
            start: 179.615625,
            end: 179.766625,
          },
          {
            word: "access ",
            start: 179.766625,
            end: 180.137625,
          },
          {
            word: "the ",
            start: 180.137625,
            end: 180.242625,
          },
          {
            word: "schedule.",
            start: 180.242625,
            end: 180.915625,
          },
        ],
        metadata: {
          response_id: 23,
        },
      },
      {
        role: "user",
        content: "Yeah. It's test, uh, at Gmail dot com.",
        words: [
          {
            word: "Yeah. ",
            start: 182.273,
            end: 182.833,
          },
          {
            word: "It's ",
            start: 182.833,
            end: 183.23301,
          },
          {
            word: "test, ",
            start: 183.23301,
            end: 183.95301,
          },
          {
            word: "uh, ",
            start: 183.95301,
            end: 184.19299999999998,
          },
          {
            word: "at ",
            start: 184.19299999999998,
            end: 184.513,
          },
          {
            word: "Gmail ",
            start: 184.883,
            end: 185.44299999999998,
          },
          {
            word: "dot ",
            start: 185.44299999999998,
            end: 185.76299,
          },
          {
            word: "com.",
            start: 185.76299,
            end: 185.923,
          },
        ],
      },
      {
        role: "agent",
        content:
          "Thanks for sharing your email. I'll note it down as test@gmail.com. I'll get back to you with available tour times as soon as possible. Is there anything else you'd like to know about the property or the process while we're on the call?",
        words: [
          {
            word: "Thanks ",
            start: 187.206,
            end: 187.485,
          },
          {
            word: "for ",
            start: 187.485,
            end: 187.612,
          },
          {
            word: "sharing ",
            start: 187.612,
            end: 187.984,
          },
          {
            word: "your ",
            start: 187.984,
            end: 188.158,
          },
          {
            word: "email.",
            start: 188.158,
            end: 188.785,
          },
          {
            word: " I'll ",
            start: 188.83083325195312,
            end: 189.02883325195313,
          },
          {
            word: "note ",
            start: 189.02883325195313,
            end: 189.21483325195314,
          },
          {
            word: "it ",
            start: 189.21483325195314,
            end: 189.31883325195312,
          },
          {
            word: "down ",
            start: 189.31883325195312,
            end: 189.56283325195312,
          },
          {
            word: "as ",
            start: 189.56283325195312,
            end: 189.72483325195313,
          },
          {
            word: "test@gmail.com. ",
            start: 189.72483325195313,
            end: 190.0848332519531,
          },
          {
            word: "I'll ",
            start: 191.501375,
            end: 191.733375,
          },
          {
            word: "get ",
            start: 191.733375,
            end: 191.884375,
          },
          {
            word: "back ",
            start: 191.884375,
            end: 192.070375,
          },
          {
            word: "to ",
            start: 192.070375,
            end: 192.198375,
          },
          {
            word: "you ",
            start: 192.198375,
            end: 192.326375,
          },
          {
            word: "with ",
            start: 192.326375,
            end: 192.488375,
          },
          {
            word: "available ",
            start: 192.488375,
            end: 192.918375,
          },
          {
            word: "tour ",
            start: 192.918375,
            end: 193.138375,
          },
          {
            word: "times ",
            start: 193.138375,
            end: 193.510375,
          },
          {
            word: "as ",
            start: 193.510375,
            end: 193.719375,
          },
          {
            word: "soon ",
            start: 193.719375,
            end: 193.986375,
          },
          {
            word: "as ",
            start: 193.986375,
            end: 194.113375,
          },
          {
            word: "possible.",
            start: 194.113375,
            end: 194.729375,
          },
          {
            word: " Is ",
            start: 194.76416674804688,
            end: 194.92616674804688,
          },
          {
            word: "there ",
            start: 194.92616674804688,
            end: 195.07716674804686,
          },
          {
            word: "anything ",
            start: 195.07716674804686,
            end: 195.37916674804688,
          },
          {
            word: "else ",
            start: 195.37916674804688,
            end: 195.54216674804687,
          },
          {
            word: "you'd ",
            start: 195.54216674804687,
            end: 195.70416674804687,
          },
          {
            word: "like ",
            start: 195.70416674804687,
            end: 195.87816674804688,
          },
          {
            word: "to ",
            start: 195.87816674804688,
            end: 195.97116674804687,
          },
          {
            word: "know ",
            start: 195.97116674804687,
            end: 196.15716674804688,
          },
          {
            word: "about ",
            start: 196.15716674804688,
            end: 196.40116674804688,
          },
          {
            word: "the ",
            start: 196.40116674804688,
            end: 196.51716674804686,
          },
          {
            word: "property ",
            start: 196.51716674804686,
            end: 196.9811667480469,
          },
          {
            word: "or ",
            start: 196.9811667480469,
            end: 197.10916674804687,
          },
          {
            word: "the ",
            start: 197.10916674804687,
            end: 197.2251667480469,
          },
          {
            word: "process ",
            start: 197.2251667480469,
            end: 197.74816674804688,
          },
          {
            word: "while ",
            start: 197.74816674804688,
            end: 197.9571667480469,
          },
          {
            word: "we're ",
            start: 197.9571667480469,
            end: 198.13116674804687,
          },
          {
            word: "on ",
            start: 198.13116674804687,
            end: 198.23516674804688,
          },
          {
            word: "the ",
            start: 198.23516674804688,
            end: 198.35116674804686,
          },
          {
            word: "call?",
            start: 198.35116674804686,
            end: 198.8621667480469,
          },
        ],
        metadata: {
          response_id: 24,
        },
      },
      {
        role: "user",
        content: "No. That's all. Thanks for, uh, helping me.",
        words: [
          {
            word: "No. ",
            start: 199.763,
            end: 200.163,
          },
          {
            word: "That's ",
            start: 200.163,
            end: 200.72299999999998,
          },
          {
            word: "all. ",
            start: 200.72299999999998,
            end: 201.283,
          },
          {
            word: "Thanks ",
            start: 201.283,
            end: 201.683,
          },
          {
            word: "for, ",
            start: 201.683,
            end: 202.163,
          },
          {
            word: "uh, ",
            start: 202.163,
            end: 202.323,
          },
          {
            word: "helping ",
            start: 202.323,
            end: 202.72299999999998,
          },
          {
            word: "me.",
            start: 202.72299999999998,
            end: 202.883,
          },
        ],
      },
      {
        role: "agent",
        content:
          "Thanks for your time today, Sam. I'll be in touch soon with the tour details. Have a great day!",
        words: [
          {
            word: "Thanks ",
            start: 204.87,
            end: 205.137,
          },
          {
            word: "for ",
            start: 205.137,
            end: 205.242,
          },
          {
            word: "your ",
            start: 205.242,
            end: 205.393,
          },
          {
            word: "time ",
            start: 205.393,
            end: 205.613,
          },
          {
            word: "today, ",
            start: 205.613,
            end: 205.88,
          },
          {
            word: "Sam. ",
            start: 205.88,
            end: 206.252,
          },
          {
            word: "I'll ",
            start: 206.252,
            end: 206.484,
          },
          {
            word: "be ",
            start: 206.484,
            end: 206.565,
          },
          {
            word: "in ",
            start: 206.565,
            end: 206.681,
          },
          {
            word: "touch ",
            start: 206.681,
            end: 206.972,
          },
          {
            word: "soon ",
            start: 206.972,
            end: 207.204,
          },
          {
            word: "with ",
            start: 207.204,
            end: 207.332,
          },
          {
            word: "the ",
            start: 207.332,
            end: 207.436,
          },
          {
            word: "tour ",
            start: 207.436,
            end: 207.691,
          },
          {
            word: "details. ",
            start: 207.691,
            end: 208.504,
          },
          {
            word: "Have ",
            start: 208.55020825195314,
            end: 208.71320825195312,
          },
          {
            word: "a ",
            start: 208.71320825195312,
            end: 208.7712082519531,
          },
          {
            word: "great ",
            start: 208.7712082519531,
            end: 209.0152082519531,
          },
          {
            word: "day!",
            start: 209.0152082519531,
            end: 209.52620825195314,
          },
        ],
        metadata: {
          response_id: 27,
        },
      },
    ],
    duration_ms: 209578,
    recording_url:
      "https://dxc03zgurdly9.cloudfront.net/44835d15a271163f5ba117d214e52449450465931c8cf8fd4534cf1da8ef9d86/recording.wav",
    public_log_url:
      "https://dxc03zgurdly9.cloudfront.net/44835d15a271163f5ba117d214e52449450465931c8cf8fd4534cf1da8ef9d86/public.log",
  },
  {
    transcript:
      "Agent: Hello, Sam. This is Chloe from Retell Real Estate company. Am I catching you at a good time?\nUser: Hey. Yes. You are. How are you doing?\nAgent: I’m doing great, thanks for asking! I’m reaching out because you recently showed interest in 524 Retell Lane in Palo Alto, near Stanford. I wanted to see how I can help you further. What are your thoughts on the property so far?\n",
    transcript_object: [
      {
        role: "agent",
        content:
          "Hello, Sam. This is Chloe from Retell Real Estate company. Am I catching you at a good time?",
        words: [
          {
            word: "Hello, ",
            start: 0.797,
            end: 1.111,
          },
          {
            word: "Sam.",
            start: 1.111,
            end: 1.61,
          },
          {
            word: " This ",
            start: 1.655791748046875,
            end: 1.841791748046875,
          },
          {
            word: "is ",
            start: 1.841791748046875,
            end: 1.957791748046875,
          },
          {
            word: "Chloe ",
            start: 1.957791748046875,
            end: 2.317791748046875,
          },
          {
            word: "from ",
            start: 2.317791748046875,
            end: 2.573791748046875,
          },
          {
            word: "Retell ",
            start: 2.573791748046875,
            end: 2.944791748046875,
          },
          {
            word: "Real ",
            start: 2.944791748046875,
            end: 3.153791748046875,
          },
          {
            word: "Estate ",
            start: 3.153791748046875,
            end: 3.467791748046875,
          },
          {
            word: "company.",
            start: 3.467791748046875,
            end: 4.117791748046875,
          },
          {
            word: " Am ",
            start: 4.163541748046875,
            end: 4.326541748046875,
          },
          {
            word: "I ",
            start: 4.326541748046875,
            end: 4.407541748046875,
          },
          {
            word: "catching ",
            start: 4.407541748046875,
            end: 4.697541748046875,
          },
          {
            word: "you ",
            start: 4.697541748046875,
            end: 4.802541748046875,
          },
          {
            word: "at ",
            start: 4.802541748046875,
            end: 4.883541748046875,
          },
          {
            word: "a ",
            start: 4.883541748046875,
            end: 4.941541748046875,
          },
          {
            word: "good ",
            start: 4.941541748046875,
            end: 5.081541748046875,
          },
          {
            word: "time?",
            start: 5.081541748046875,
            end: 5.464541748046875,
          },
        ],
        metadata: {
          response_id: 0,
        },
      },
      {
        role: "user",
        content: "Hey. Yes. You are. How are you doing?",
        words: [
          {
            word: "Hey. ",
            start: 7.92,
            end: 8.4,
          },
          {
            word: "Yes. ",
            start: 8.4,
            end: 8.64,
          },
          {
            word: "You ",
            start: 8.64,
            end: 8.88,
          },
          {
            word: "are. ",
            start: 8.88,
            end: 9.2,
          },
          {
            word: "How ",
            start: 9.2,
            end: 9.44,
          },
          {
            word: "are ",
            start: 9.44,
            end: 9.6,
          },
          {
            word: "you ",
            start: 9.6,
            end: 9.68,
          },
          {
            word: "doing?",
            start: 9.68,
            end: 9.7599997,
          },
        ],
      },
      {
        role: "agent",
        content:
          "I’m doing great, thanks for asking! I’m reaching out because you recently showed interest in 524 Retell Lane in Palo Alto, near Stanford. I wanted to see how I can help you further. What are your thoughts on the property so far?",
        words: [
          {
            word: "I’m ",
            start: 11.264,
            end: 11.496,
          },
          {
            word: "doing ",
            start: 11.496,
            end: 11.716,
          },
          {
            word: "great, ",
            start: 11.716,
            end: 11.96,
          },
          {
            word: "thanks ",
            start: 11.96,
            end: 12.251,
          },
          {
            word: "for ",
            start: 12.251,
            end: 12.401,
          },
          {
            word: "asking!",
            start: 12.401,
            end: 13.04,
          },
          {
            word: " I’m ",
            start: 13.086041748046876,
            end: 13.353041748046875,
          },
          {
            word: "reaching ",
            start: 13.353041748046875,
            end: 13.644041748046876,
          },
          {
            word: "out ",
            start: 13.644041748046876,
            end: 13.806041748046875,
          },
          {
            word: "because ",
            start: 13.806041748046875,
            end: 14.050041748046874,
          },
          {
            word: "you ",
            start: 14.050041748046874,
            end: 14.189041748046876,
          },
          {
            word: "recently ",
            start: 14.189041748046876,
            end: 14.607041748046875,
          },
          {
            word: "showed ",
            start: 14.607041748046875,
            end: 14.863041748046875,
          },
          {
            word: "interest ",
            start: 14.863041748046875,
            end: 15.258041748046875,
          },
          {
            word: "in ",
            start: 15.258041748046875,
            end: 15.397041748046876,
          },
          {
            word: "524 ",
            start: 15.397041748046876,
            end: 15.699041748046875,
          },
          {
            word: "Retell ",
            start: 15.699041748046875,
            end: 16.035041748046876,
          },
          {
            word: "Lane ",
            start: 16.035041748046876,
            end: 16.186041748046875,
          },
          {
            word: "in ",
            start: 16.186041748046875,
            end: 16.500041748046876,
          },
          {
            word: "Palo ",
            start: 16.500041748046876,
            end: 16.836041748046874,
          },
          {
            word: "Alto, ",
            start: 16.836041748046874,
            end: 17.301041748046874,
          },
          {
            word: "near ",
            start: 17.301041748046874,
            end: 17.614041748046876,
          },
          {
            word: "Stanford.",
            start: 17.614041748046876,
            end: 17.754041748046873,
          },
          {
            word: " I ",
            start: 19.541208251953126,
            end: 19.646208251953126,
          },
          {
            word: "wanted ",
            start: 19.646208251953126,
            end: 19.843208251953126,
          },
          {
            word: "to ",
            start: 19.843208251953126,
            end: 19.913208251953126,
          },
          {
            word: "see ",
            start: 19.913208251953126,
            end: 20.041208251953126,
          },
          {
            word: "how ",
            start: 20.041208251953126,
            end: 20.168208251953125,
          },
          {
            word: "I ",
            start: 20.168208251953125,
            end: 20.238208251953125,
          },
          {
            word: "can ",
            start: 20.238208251953125,
            end: 20.366208251953125,
          },
          {
            word: "help ",
            start: 20.366208251953125,
            end: 20.563208251953125,
          },
          {
            word: "you ",
            start: 20.563208251953125,
            end: 20.702208251953124,
          },
          {
            word: "further.",
            start: 20.702208251953124,
            end: 21.306208251953127,
          },
          {
            word: " What ",
            start: 21.329375,
            end: 21.515375,
          },
          {
            word: "are ",
            start: 21.515375,
            end: 21.619375,
          },
          {
            word: "your ",
            start: 21.619375,
            end: 21.747375,
          },
          {
            word: "thoughts ",
            start: 21.747375,
            end: 22.026375,
          },
          {
            word: "on ",
            start: 22.026375,
            end: 22.130375,
          },
          {
            word: "the ",
            start: 22.130375,
            end: 22.223375,
          },
          {
            word: "property ",
            start: 22.223375,
            end: 22.630375,
          },
          {
            word: "so ",
            start: 22.630375,
            end: 22.804375,
          },
          {
            word: "far?",
            start: 22.804375,
            end: 23.256375,
          },
        ],
        metadata: {
          response_id: 3,
        },
      },
    ],
    duration_ms: 24340,
    recording_url:
      "https://dxc03zgurdly9.cloudfront.net/9105f4e28c9aafbd2285676069d8f4860ad7f82022bb9f787155da91ba54dd79/recording.wav",
    public_log_url:
      "https://dxc03zgurdly9.cloudfront.net/9105f4e28c9aafbd2285676069d8f4860ad7f82022bb9f787155da91ba54dd79/public.log",
  },
];

const sentiments = ["Positive", "Neutral", "Negative"];

const agents = ["AGT-001", "AGT-002", "AGT-003", "AGT-004", "AGT-005"];

function createCall() {
  const end = faker.date.between({ from: yday, to: now }).getTime();
  const selectedCall = faker.helpers.arrayElement(possibleCalls);

  return {
    call_id: faker.string.uuid(),
    call_type: "web_call",
    agent_id: faker.helpers.arrayElement(agents),
    agent_version: 1,
    collected_dynamic_variables: {
      previous_agent_state: "warm_intro",
      current_agent_state: "schedule_tour",
    },
    call_status: "ended",
    start_timestamp: end - selectedCall.duration_ms,
    end_timestamp: end,
    ...selectedCall,
    disconnection_reason: "agent_hangup",
    latency: {
      llm: {
        p99: 1429.91,
        min: 289,
        max: 1436,
        p90: 1346.8000000000004,
        num: 22,
        values: [
          532, 638, 657, 595, 548, 289, 527, 517, 651, 713, 762, 651, 1362,
          1156, 1407, 545, 1436, 878, 731, 612, 1021, 1210,
        ],
        p50: 654,
        p95: 1404.75,
      },
      e2e: {
        p99: 2149.37,
        min: 262,
        max: faker.number.int({ min: 700, max: 3000 }),
        p90: 2098.6,
        num: 12,
        values: [
          1100, 1133, 1486, 1175, 1687, 262, 2120, 923, 2153, 1115.989990234375,
          1190, 1906,
        ],
        p50: 1182.5,
        p95: 2134.85,
      },
      tts: {
        p99: 416.48,
        min: 224,
        max: 419,
        p90: 372.3,
        num: 22,
        values: [
          235, 254, 281, 251, 285, 247, 289, 319, 300, 330, 345, 270, 224, 312,
          373, 250, 419, 254, 271, 325, 366, 407,
        ],
        p50: 287,
        p95: 405.29999999999995,
      },
    },
    call_cost: {
      total_duration_unit_price: 0.1433333,
      product_costs: [
        {
          unit_price: 0.1166667,
          product: "elevenlabs_tts",
          cost: 24.5,
        },
        {
          unit_price: 0.0266667,
          product: "gpt_4_1_mini",
          cost: 5.6,
        },
      ],
      combined_cost: 30.1,
      total_duration_seconds: 210,
    },
    call_analysis: {
      in_voicemail: false,
      call_summary:
        "The user expressed interest in a property at 524 Retell Lane and discussed their needs for a nice neighborhood and ample space for their family. The agent attempted to schedule a tour but faced technical issues with the scheduling system, leading to the user providing their email for follow-up instead.",
      user_sentiment: faker.helpers.arrayElement(sentiments),
      custom_analysis_data: {},
      call_successful: false,
    },
    opt_out_sensitive_data_storage: false,
    opt_in_signed_url: false,
    llm_token_usage: {
      values: [
        671, 690, 694, 699, 748, 753, 759, 766, 769, 812, 825, 830, 838, 841,
        938, 987, 996, 1589, 1627, 1768, 1829, 1974, 2025, 2055, 2208, 2274,
        2288, 2295, 2351, 2408, 2411, 2419,
      ],
      average: 1410.53125,
      num_requests: 32,
    },
  };
}

module.exports = () => {
  const data = {
    calls: faker.helpers
      .multiple(createCall, {
        count: 100,
      })
      .sort((a, b) => (a.end_timestamp > b.end_timestamp ? -1 : 1)),
  };

  return data;
};
