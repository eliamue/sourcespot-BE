import pool from '../utils/pool.js';

export default class ResourceLocations {
  resource_id;
  location_id;

  constructor(row) {
    this.resource_id = row.resource_id;
    this.location_id = row.location_id;
  }

  static async insert({ resource_id, location_id }) {
    const { rows } = await pool.query(
      'INSERT INTO resource_locations (resource_id, location_id) VALUES ($1, $2) RETURNING *',
      [resource_id, location_id]
    );

    return new ResourceLocations(rows[0]);
  }

  static async getResourceLocationsByResourceId(id) {
    const { rows } = await pool.query(
      `
      SELECT * FROM locations
      INNER JOIN resource_locations
      ON locations.id=resource_locations.location_id
      INNER JOIN resources
      ON resource_locations.resource_id=resources.id
      WHERE resources.id=$1`, [id]
    );

    return rows;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM resource_locations');

    return rows.map((row) => new ResourceLocations(row));
  }

}
