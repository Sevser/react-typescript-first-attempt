export const plural = (suffixes: Map<string, string>) => {
    var pr = new Intl.PluralRules('en-US', { type: 'ordinal' });
    const _suffixes = suffixes || new Map([
        ['one',   'st'],
        ['two',   'nd'],
        ['few',   'rd'],
        ['other', 'th'],
    ]);

    return (val: number) : string => {
        const rule = pr.select(val);
        const suffix = suffixes.get(rule);
        return `${val} ${suffix}`;
    };
};

export const calcTimeAgo = (time: Date) : string => {
    const diff = (new Date()).getTime() - time.getTime();
    let secs = Math.floor(diff / 1000);
    const secsPlurals = plural(new Map([
        ['one',   'second'],
        ['two',   'seconds'],
        ['few',   'seconds'],
        ['other', 'seconds'],
    ]));
    let mins = Math.floor(secs / 60);
    const minsPlurals = plural(new Map([
        ['one',   'min'],
        ['two',   'mins'],
        ['few',   'mins'],
        ['other', 'mins'],
    ]));
    let hours = Math.floor(mins / 60);
    const hoursPlurals = plural(new Map([
        ['one',   'hour'],
        ['two',   'hours'],
        ['few',   'hours'],
        ['other', 'hours'],
    ]));
    let days = Math.floor(hours / 24);
    const daysPlurals = plural(new Map([
        ['one',   'day'],
        ['two',   'days'],
        ['few',   'days'],
        ['other', 'days'],
    ]));
    if (days) {
        return `${daysPlurals(days)} ago`;
    }
    if (hours) {
        return `${hoursPlurals(hours)} ago`;
    }
    if (mins) {
        return `${minsPlurals(mins)} ago`;
    }
    if (secs) {
        return `${secsPlurals(secs)} ago`;
    }
    return '';
};
