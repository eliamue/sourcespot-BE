import pool from '../utils/pool.js';

module.exports = class ResourceLocations {
  resourceid;
  locationid;

  constructor(row) {
    this.resourceid = row.resourceid;
    this.locationid = row.locationid;
  }

  static async insert({ resourceid, locationid }) {
    const { rows } = await pool.query(
      'INSERT INTO resource_locations (resourceid, locationid) VALUES ($1, $2) RETURNING *',
      [resourceid, locationid]
    );

    return new ResourceLocations(rows[0]);
  }

  static async getResourceLocationsByResourceId(id) {
    const { rows } = await pool.query(
      `
      SELECT * FROM locations
      INNER JOIN resource_locations
      ON locations.id=resource_locations.locationid
      INNER JOIN resources
      ON resource_locations.resourceid=resources.id
      WHERE resources.id=$1`, [id]
    );

    return rows;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM resource_locations');

    return rows.map((row) => new ResourceLocations(row));
  }

  toJSON() {
    return {
      resourceid: this.resourceid,
      locationid: this.locationid,
    };
  }
};
