DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS tags CASCADE;
DROP TABLE IF EXISTS category_tags CASCADE;
DROP TABLE IF EXISTS locations CASCADE;
DROP TABLE IF EXISTS resources CASCADE;
DROP TABLE IF EXISTS resource_tags CASCADE;
DROP TABLE IF EXISTS resource_locations CASCADE;

CREATE TABLE categories (
    category_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    category TEXT NOT NULL
);

CREATE TABLE tags (
    tag_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category_id INT NOT NULL REFERENCES categories(category_id) 
    tag TEXT
);

CREATE TABLE resources (
    resource_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category_id INT NOT NULL REFERENCES categories(category_id),
    title TEXT NOT NULL,
    about TEXT NOT NULL,
    website TEXT,
    logo TEXT
);

CREATE TABLE resource_tags (
    tag_id INT NOT NULL REFERENCES tags(tag_id),
    resource_id INT NOT NULL REFERENCES resources(resource_id)
);

CREATE TABLE locations (
    location_id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    located TEXT
);

CREATE TABLE resource_locations (
    location_id INT NOT NULL REFERENCES locations(location_id),
    resource_id INT NOT NULL REFERENCES resources(resource_id)
);