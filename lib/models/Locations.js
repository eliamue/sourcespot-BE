import pool from '../utils/pool.js';

export default class Locations {
  id;
  located;
  resourceid;

  constructor(row) {
    this.id = row.id;
    this.located = row.located;
    this.resourceid = row.resourceid;
  }

  static async insertLocation(value) {
    const { rows } = await pool.query(
      'INSERT INTO locations (located, resourceid) VALUES ($1, $2) RETURNING *',
      [
        value.located,
        value.resourceid,
      ]
    );
    return new Locations(rows[0]);
  }

  static async getResourceLocations(id) {
    const { rows } = await pool.query('SELECT * FROM locations INNER JOIN resources ON resources.id=locations.resourceid WHERE resources,id=$1', [id]);
    return rows;
  }

  static async getAllLocations() {
    const { rows } = await pool.query('SELECT * FROM locations');

    return rows.map((row) => new Locations(row));
  }
}
