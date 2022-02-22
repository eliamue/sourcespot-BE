import pool from '../utils/pool.js';

export default class Locations {
  id;
  located;

  constructor(row) {
    this.id = row.id;
    this.located = row.located;
  }

  static async insert(value) {
    const { rows } = await pool.query(
      'INSERT INTO locations (located) VALUES ($1) RETURNING *',
      [
        value.located
      ]
    );
    return new Locations(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM locations');

    return rows.map((row) => new Locations(row));
  }

  static async findById(id) {
    const { rows } = await pool.query('SELECT * FROM locations WHERE id=$1', [
      id,
    ]);

    if (!rows[0]) return null;
    return new Locations(rows[0]);
  }

  // static async getResourceLocations(id) {
  //   const { rows } = await pool.query('SELECT * FROM locations INNER JOIN resources ON resources.id=locations.resourceid WHERE resources.id=$1', [id]);
  //   return rows;
  // }
}
