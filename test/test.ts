import { Client, Events } from '../src';

const client = new Client({
    serviceId: 'maketheelement',
    streamManagerConfig: {
        subscriptions: [{
            characters: ['all'],
            eventNames: ['Death'],
        }],
    },
});

client.on('ready', () => console.log('Ready'));
client.on('reconnecting', () => console.log('Reconnecting'));
client.on('disconnected', () => console.log('Disconnected'));
client.on('warn', (e) => console.log(e));
client.on('subscribed', (s) => console.log(JSON.stringify(s)));

client.on(Events.PS2_DEATH, (e) => console.log(e));
// client.on(Events.PS2_DUPLICATE, (e) => console.log(e));


let aborting = false;
const abort = (code = 0) => {
    if (aborting) return;
    aborting = true;

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
