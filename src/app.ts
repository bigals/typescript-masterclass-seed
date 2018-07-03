
interface TrackStates {
    current: string;
    next: string;
}

const item: Record<keyof TrackStates, string> = {
    current: 'js02js9',
    next: '8nlkksjsk'
};

let dictionary: Record<string, TrackStates> = {};
//Numbers are coerced to String
dictionary[0] = item;