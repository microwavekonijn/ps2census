import { Client, Events } from '../src';
import { Kill } from '../src/client/events/Death';

const client = new Client(process.argv[2], {
    streamManagerConfig: {
        subscription: {
            characters: ['all'],
            worlds: ['all'],
            eventNames: ['Death'],
            logicalAndCharactersWithWorlds: true,
        },
    },
});

client.on('ready', () => console.log('Ready'));
client.on('reconnecting', () => console.log('Reconnecting'));
client.on('disconnected', () => console.log('Disconnected'));
client.on('warn', (e) => console.log(e));
client.on('subscribed', (s) => console.log(JSON.stringify(s)));
client.on('debug', (info, label) => console.log(`${label}: ${info}`));

client.on(Events.PS2_DEATH, async (e) => {
    const [victim, attacker] = await Promise.all([
        e.character(),
        e.attacker(),
    ]);

    switch (e.kill_type) {
        case Kill.Normal:
            console.log(`${victim.name.first} was killed by ${attacker.name.first}`);
            break;
        case Kill.Suicide:
            console.log(`${victim.name.first} suicided.`);
            break;
        case Kill.TeamKill:
            console.log(`${victim.name.first} was teamkilled by ${attacker.name.first}`);
            break;
        case Kill.Undetermined:
            console.log(`${victim.name.first} was NSOed by ${attacker.name.first}`);
            break;
    }
});

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
