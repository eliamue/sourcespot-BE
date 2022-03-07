import pool from '../utils/pool.js';

export default class Categories {
  id;
  category;

  constructor(row) {
    this.id = row.id;
    this.category = row.category;
  }

  static async insert(value) {
    const { rows } = await pool.query(
      'INSERT INTO categories (category) VALUES ($1) RETURNING *',
      [
        value.category
      ]
    );
    return new Categories(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM categories');

    return rows.map((row) => new Categories(row));
  }

  static async findById(id) {
    const { rows } = await pool.query('SELECT * FROM categories WHERE id=$1', [
      id,
    ]);

    if (!rows[0]) return null;
    return new Categories(rows[0]);
  }
