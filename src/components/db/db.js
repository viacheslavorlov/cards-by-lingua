import {Dexie} from "dexie";

export const db = new Dexie('worterbuch');
db.version(1).stores({
	words: '++id, word, wordTranslate, repetitions, remembered'
});