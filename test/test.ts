import { Client, Events } from '../src';

const client = new Client({
    serviceId: process.argv[2],
    streamManagerConfig: {
        subscriptions: [{
            characters: ['all'],
            worlds: ['all'],
            eventNames: ['Death'],
            logicalAndCharactersWithWorlds: true,
        }],
    },
});

client.on('ready', () => console.log('Ready'));
client.on('reconnecting', () => console.log('Reconnecting'));
client.on('disconnected', () => console.log('Disconnected'));
client.on('warn', (e) => console.log(e));
client.on('subscribed', (s) => console.log(JSON.stringify(s)));
client.on('debug', (info, label) => console.log(`${label}: ${info}`));

client.on(Events.PS2_DEATH, (e) => console.log('Death', e));
client.on(Events.PS2_DUPLICATE, (e) => console.log('Duplicate', JSON.stringify(e)));


let aborting = false;
const abort = (code = 0, e: Error) => {
    if (aborting) return;
    aborting = true;

    if (e) console.error(e);

    console.log('Bye bye');
    client.destroy();
    process.exit(code);
};

process.on('unhandledRejection', abort.bind(null, 1))
    .on('uncaughtException', abort.bind(null, 1))
    .on('SIGINT', abort)
    .on('SIGTERM', abort)
    .on('exit', abort);

client.watch();
