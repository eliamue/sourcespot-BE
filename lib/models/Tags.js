import pool from '../utils/pool.js';

export default class Tags {
  id;
  tag;

  constructor(row) {
    this.id = row.id;
    this.tag = row.tag;
  }

  static async insert(value) {
    const { rows } = await pool.query(
      'INSERT INTO tags (tag) VALUES ($1) RETURNING *',
      [value.tag]
    );
    return new Tags(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM tags');
    
    return rows.map((row) => new Tags(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM tags WHERE id=$1', [
      id,
    ]);

    return new Tags(rows[0]);
  }
  
  toJSON() {
    return {
      tag: this.tag,
      id: this.id
    };
  }
}
