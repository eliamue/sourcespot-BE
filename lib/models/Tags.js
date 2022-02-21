import pool from '../utils/pool.js';

export default class Tags {
  id;
  tag;
  resourceid;

  constructor(row) {
    this.id = row.id;
    this.tag = row.tag;
    this.resourceid = row.resourceid;
  }

  static async insertTag(value) {
    const { rows } = await pool.query(
      'INSERT INTO tags (tag, resourceid) VALUES ($1, $2) RETURNING *',
      [value.tag, value.resourceid]
    );
    return new Tags(rows[0]);
  }

  static async getResourceTags(id) {
    const { rows } = await pool.query(
      'SELECT * FROM tags INNER JOIN resources ON resources.id=tags.resourceid WHERE resources.id=$1',
      [id]
    );
    return rows;
  }

  static async getAllTags() {
    const { rows } = await pool.query('SELECT * FROM tags');

    return rows.map((row) => new Tags(row));
  }

  toJSON() {
    return {
      resourceid: this.resourceid,
      tag: this.tag,
    };
  }
}
