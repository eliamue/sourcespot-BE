import pool from '../utils/pool.js';

export default class Tags {
  id;
  category_id;
  tag;

  constructor(row) {
    this.id = row.id;
    this.category_id = row.category_id;
    this.tag = row.tag;
  }

  static async insert(value) {
    const { rows } = await pool.query(
      'INSERT INTO tags (tag, category_id) VALUES ($1) RETURNING *',
      [value.tag, value.category_id]
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
      id: this.id,
      category_id: this.category_id,
      tag: this.tag
    };
  }
}
