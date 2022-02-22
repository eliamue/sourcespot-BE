import pool from '../utils/pool.js';

export default class Resources {
  id;
  title;
  category;
  about;
  website;
  logo;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.category = row.category;
    this.about = row.about;
    this.website = row.website;
    this.logo = row.logo;
  }

  static async insert({ title, category, about, website, logo }) {
    const { rows } = await pool.query(
      'INSERT INTO resources (title, category, about, website, logo) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [
        title,
        category,
        about,
        website,
        logo
      ]
    );
    return new Resources(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM resources ORDER BY title');
    return rows.map((row) => new Resources(row));
  }

  static async getById(id) {
    const { rows } = await pool.query('SELECT * FROM resources WHERE id=$1', [id]);
    return new Resources(rows[0]);
  }

  static async update(
    id,
    { title, category, about, website, logo }
  ) {
    const existingResource = await Resources.getById(id);
    const new_title = title ?? existingResource.title;
    const new_category = category ?? existingResource.category;
    const new_about = about ?? existingResource.about;
    const new_website = website ?? existingResource.website;
    const new_logo = logo ?? existingResource.logo;

    const { rows } = await pool.query(
      'UPDATE resources SET title=$1, category=$2, about=$3, website=$4, logo=$5 WHERE id=$6 RETURNING *',
      [
        new_title,
        new_category,
        new_about,
        new_website,
        new_logo,
        id,
      ]
    );
    return new Resources(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      'DELETE FROM resources WHERE id=$1 RETURNING *',
      [id]
    );
    return new Resources(rows[0]);
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      category: this.category,
      about: this.about,
      website: this.website,
      logo: this.logo,
    };
  }
}
