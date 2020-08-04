export function unixToDate(unix: string): Date {
    const int = parseInt(unix, 10);

    if (isNaN(int)) throw new TypeError(`Unable to parse unix time: ${unix}`);

    return new Date(int * 1000);
}

export function numberStringToBoolean(value: string): boolean {
    switch (value.trim()) {
        case '0':
            return false;
        case '1':
            return true;
    }

    throw new TypeError(`Unable to parse boolean: ${value}`);
}

export function stringToBoolean(value: string): boolean {
    switch (value.trim()) {
        case 'false':
            return false;
        case 'true':
            return true;
    }

    throw new TypeError(`Unable to parse boolean: ${value}`);
}
