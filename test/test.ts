import { Client, Events, Kill } from '../src';

function name({character_id, name}: any) {
    return name && name.first ? name.first : `Unknown(${character_id})`;
}

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
    if (e.attacker_character_id === '0' || e.character_id === '0') return;

    const [victim, attacker] = await Promise.all([
        e.character(),
        e.attacker(),
    ]);

    switch (e.kill_type) {
        case Kill.Normal:
            console.log(`${name(victim)} was killed by ${name(attacker)}`);
            break;
        case Kill.Suicide:
            console.log(`${name(victim)} suicided.`);
            break;
        case Kill.TeamKill:
            console.log(`${name(victim)} was teamkilled by ${name(attacker)}`);
            break;
        case Kill.Undetermined:
            console.log(`${name(victim)} was NSOed by ${name(attacker)}`);
            break;
    }
});

client.on(Events.PS2_DUPLICATE, (e) => console.log('Duplicate', JSON.stringify(e)));


let aborting = false;
const abort = (code = 0, e?: Error) => {
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

if (process.argv[3]) {
    const t = Number.parseInt(process.argv[3], 10);

    if (isFinite(t)) {
        console.log(`Timeout to abort is set: ${t}s`);
        setTimeout(() => abort(0), t * 1000);
    }
}
