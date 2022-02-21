import pool from '../utils/pool.js';

export default class ResourceTags {
  resourceid;
  tagid;

  constructor(row) {
    this.resourceid = row.resourceid;
    this.tagid = row.tagid;
  }

  static async insert({ resourceid, tagid }) {
    const { rows } = await pool.query(
      'INSERT INTO resource_tags (resourceid, tagid) VALUES ($1, $2) RETURNING *',
      [resourceid, tagid]
    );

    return new ResourceTags(rows[0]);
  }

  static async getResourceTagsByResourceId(id) {
    const { rows } = await pool.query(
      `
      SELECT * FROM tags
      INNER JOIN resource_tags
      ON tags.id=resource_tags.tagid
      INNER JOIN resources
      ON resource_tags.resourceid=resources.id
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
      resourceid: this.resourceid,
      tagid: this.tagid,
    };
  }
}
