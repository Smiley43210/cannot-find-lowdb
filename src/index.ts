import {join, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import {JSONFile} from 'lowdb/node';
import {Low} from 'lowdb';

const __dirname = join(dirname(fileURLToPath(import.meta.url)), '..');
const file = join(__dirname, 'db.json');
const adapter = new JSONFile<Record<string, any>>(file);
const db = new Low<Record<string, any>>(adapter);

// Read data from JSON file, this will set db.data content
await db.read();
// Create default data
db.data ||= {};
