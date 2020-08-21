"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.all = exports.messages = void 0;
const messages = {
    Websites: ['YouTube'],
    Meta: [
        'Submit playing lines & bug reports @ ' +
            require('./package.json').bugs,
        '700+ commits!',
        'Made with Eris!',
        'Made with Node.js!',
        'NotSoBot is bad™'
    ],
    Songs: Object.entries({
        'Scatman John': ["Scatman's World"],
        'Alex Arcoleo': ['Bloom 7'],
        'Neil Cicierega': ['Wow Wow', 'The Starting Line'],
        'Big Shaq': ["Man Don't Dance", 'Mans Not Hot'],
        TOPAZ: [
            'Half Awake, Pt. 2',
            'Half Awake, Pt. 1'
        ],
        'Fatty Spins': [
            "Doin' Your Mom"
        ],
        'FAT DAMON': ['Conspiracy Theory Guy'],
        'Your Favorite Martian': ["Grandma's Got A Facebook", "STALKIN' YOUR MOM"],
        'Post Malone': ['I Know']
    })
        .map(([author, songs]) => songs.map(title => `${author} - ${title}`))
        .flat(),
    'esmBot Random': [
        'h',
        'absolutely nothing',
        'epic mashups bro',
        'Jake Paul videos on repeat',
        'HaaH WaaW',
        'dQw4w9WgXcQ',
        'the funny memes epic',
        'Bottom Text',
        'lol 7',
        'Family Guy',
        'yeah',
        'Rofa Cat',
        'jeff',
        'woo yeah',
        'joe mama',
        '#BringBackNationalSex',
        'the',
        'sissy hypnosis',
        'PogChamp',
        'sentience',
        'beep boop',
        'Hello, Gordon!',
    ],
    'nxt random': [
        'now this is a j',
        'paint dry'
    ]
};
exports.messages = messages;
const flatten = (messages) => {
    const result = Object.values(messages)
        .map(val => Array.isArray(val) ? val : Object.values(val).flat())
        .flat();
    return result.some(Array.isArray) ? flatten(result) : result;
};
const all = flatten(messages);
exports.all = all;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVzc2FnZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtZXNzYWdlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFLQSxNQUFNLFFBQVEsR0FBbUI7SUFDL0IsUUFBUSxFQUFFLENBQUMsU0FBUyxDQUFDO0lBQ3JCLElBQUksRUFBRTtRQUVKLHVDQUF1QztZQUN2QyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxJQUFJO1FBQzlCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLGtCQUFrQjtLQUNuQjtJQUNELEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ3BCLGNBQWMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1FBQ25DLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQztRQUMzQixnQkFBZ0IsRUFBRSxDQUFDLFNBQVMsRUFBRSxtQkFBbUIsQ0FBQztRQUNsRCxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxjQUFjLENBQUM7UUFDL0MsS0FBSyxFQUFFO1lBRUwsbUJBQW1CO1lBQ25CLG1CQUFtQjtTQUNwQjtRQUNELGFBQWEsRUFBRTtZQUNiLGdCQUFnQjtTQUNqQjtRQUNELFdBQVcsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1FBQ3RDLHVCQUF1QixFQUFFLENBQUMsMEJBQTBCLEVBQUUsbUJBQW1CLENBQUM7UUFDMUUsYUFBYSxFQUFFLENBQUMsUUFBUSxDQUFDO0tBQzFCLENBQUM7U0FDQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxNQUFNLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDcEUsSUFBSSxFQUFFO0lBQ1QsZUFBZSxFQUFFO1FBRWYsR0FBRztRQUNILG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsNEJBQTRCO1FBQzVCLFdBQVc7UUFDWCxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLGFBQWE7UUFDYixPQUFPO1FBQ1AsWUFBWTtRQUNaLE1BQU07UUFDTixVQUFVO1FBQ1YsTUFBTTtRQUNOLFVBQVU7UUFDVixVQUFVO1FBQ1YsdUJBQXVCO1FBQ3ZCLEtBQUs7UUFDTCxnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLFdBQVc7UUFDWCxXQUFXO1FBQ1gsZ0JBQWdCO0tBQ2pCO0lBQ0QsWUFBWSxFQUFFO1FBQ1osaUJBQWlCO1FBQ2pCLFdBQVc7S0FDWjtDQUNGLENBQUM7QUFZTyw0QkFBUTtBQVZqQixNQUFNLE9BQU8sR0FBRyxDQUFRLFFBQStCLEVBQVUsRUFBRTtJQUNqRSxNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQztTQUNuQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDaEUsSUFBSSxFQUFFLENBQUM7SUFFVixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUMvRCxDQUFDLENBQUM7QUFFRixNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFWCxrQkFBRyJ9