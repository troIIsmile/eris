// add more
interface Nested<Type> {
  [key: string]: Nested<Type> | Type[];
}

const messages: Nested<string> = {
  Websites: ['YouTube'],
  Meta: [
    // References to bots (or this bot)
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
      // topazzz.bandcamp.com to be exact
      'Half Awake, Pt. 2',
      'Half Awake, Pt. 1'
    ],
    'Fatty Spins': [
      "Doin' Your Mom" // you know we straight
    ],
    'FAT DAMON': ['Conspiracy Theory Guy'],
    'Your Favorite Martian': ["Grandma's Got A Facebook", "STALKIN' YOUR MOM"],
    'Post Malone': ['I Know']
  })
    .map(([author, songs]) => songs.map(title => `${author} - ${title}`))
    .flat(), // Turn this object into a string[] of 'Author - Song' names
  'esmBot Random': [
    // All of these are from esmBot.
    'h',
    'absolutely nothing',
    'epic mashups bro',
    'Jake Paul videos on repeat',
    'HaaH WaaW',
    'dQw4w9WgXcQ', // never gonna give you up
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
  'nxt random': [ // New messages go here
    'now this is a j',
    'paint dry'
  ]
};

const flatten = <Type> (messages: Nested<Type> | Type[]): Type[] => {
  const result = Object.values(messages)
    .map(val => Array.isArray(val) ? val : Object.values(val).flat())
    .flat();

  return result.some(Array.isArray) ? flatten(result) : result;
};

const all = flatten(messages);

export { messages, all };
