import Collection from "@discordjs/collection";
import { Client } from 'eris'
import {
  existsSync as exists,
  readFileSync as readFile,
  readdirSync
} from 'fs';
import { IncomingMessage, ServerResponse, createServer } from 'http';
import { Bot } from "./utils/types";

// We need to get data from the .env file because OWNER and TOKEN are in there ( unless the user somehow does stuff like `'blahblahblah' > Env:/TOKEN`)
if (exists('./.env')) {
  // Before anything uses it, we must load the .env file (provided it exists, of course)
  process.env = {
    ...process.env, // Preserve existing env
    ...Object.fromEntries(
      // Overwrite the env with the .env file
      readFile('./.env', 'utf-8')
        .split('\n') // split the file into lines
        .filter(line => !line.startsWith('#') && line) // remove comments and spacing
        .map(line => line.split('=')) // split the lines into key:value pairs
    )
  };
}

// replit redirect
if (process.env.REPLIT_DB_URL) {
  createServer((_: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, {
      'Content-Type': 'text/html'
    });
    res.write(
      `<meta http-equiv="refresh" content="0;url=${require('./package.json').homepage
      }">`
    );
    res.end();
  }).listen(8080);
}

if (!process.env.TOKEN) process.exit()

const client = new Client(process.env.TOKEN) as Bot
client.commands = new Collection
client.aliases = new Collection

// Load in events
readdirSync('./events/')
  .filter(name => name.endsWith('.js'))
  .map(name => name.replace('.js', ''))
  .forEach(async (filename: any) => {
    const ev = (await import('./events/' + filename)).default;
    client.on(filename, context => {
      ev.call(client, context);
    });
  });


client.connect()
