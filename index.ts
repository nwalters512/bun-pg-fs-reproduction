import pg from 'pg';
import fs from 'fs/promises';
import async from 'async';

async.series(
  [
    async () => {
      await fs.readFile('./config.json', 'utf-8');

      const pool = new pg.Pool({
        host: 'localhost',
        user: 'postgres',
        database: 'postgres',
      });

      console.log('connecting pool...');
      const client = await pool.connect();
      console.log('connected pool');

      client.release();
      await pool.end();
    },
  ],
  (err: any) => {
    console.log(err ?? 'succeeded!');
  }
);
