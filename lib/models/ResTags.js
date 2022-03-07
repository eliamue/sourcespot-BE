import pool from '../utils/pool.js';

export default class ResourceTags {
  resource_id;
  tag_id;

  constructor(row) {
    this.resource_id = row.resource_id;
    this.tag_id = row.tag_id;
  }

  static async insert({ resource_id, tag_id }) {
    const { rows } = await pool.query(
      'INSERT INTO resource_tags (resource_id, tag_id) VALUES ($1, $2) RETURNING *',
      [resource_id, tag_id]
    );

    return new ResourceTags(rows[0]);
  }

  static async getResourceTagsByResourceId(id) {
    const { rows } = await pool.query(
      `
      SELECT * FROM tags
      INNER JOIN resource_tags
      ON tags.id=resource_tags.tag_id
      INNER JOIN resources
      ON resource_tags.resource_id=resources.id
      WHERE resources.id=$1`, [id]
    );

    return rows;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM resource_tags');

    return rows.map((row) => new ResourceTags(row));
  }

  toJSON() {
    return {
      resource_id: this.resource_id,
      tag_id: this.tag_id
    }
  }
};

