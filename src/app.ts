function foo(bar: string | number) {
    if (typeof bar === 'string') {
        //string -- typescript will give me itellisense here for string typed bar
        return bar.toUpperCase();
    }
    if (typeof bar === 'number') {
        return bar.toFixed(2);
    }
}

class Song {
    constructor(public title: string, public duration: string | number) { }
}

function getSongDuration(item: Song) {
    if (typeof item.duration === 'string') {
        return item.duration;
    }
    const { duration } = item;
    const minutes = Math.floor(duration / 60000);
    const seconds = (duration / 1000) % 60;
    return `${(minutes.toString().length === 1) ? '0' + minutes : minutes}:${seconds}`;
}

const songDurationFromString = getSongDuration(new Song('Wonderful Wonderful', '05:31'));
console.log(songDurationFromString);
const songDurationFromNumber = getSongDuration(new Song('Wonderful Wonderful', 330000));
console.log(songDurationFromNumber);