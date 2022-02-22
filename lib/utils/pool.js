import pg from 'pg';

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL
});

// eslint-disable-next-line no-console
pool.on('connect', () => console.log('🐘 Postgres connected'));

export default pool;
