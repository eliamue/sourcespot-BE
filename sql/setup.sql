DROP TABLE IF EXISTS categories CASCADE;
DROP TABLE IF EXISTS tags CASCADE;
DROP TABLE IF EXISTS locations CASCADE;
DROP TABLE IF EXISTS resources CASCADE;
DROP TABLE IF EXISTS resource_tags CASCADE;
DROP TABLE IF EXISTS resource_locations CASCADE;

CREATE TABLE categories (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
    category TEXT NOT NULL
);

CREATE TABLE tags (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category_id INT NOT NULL REFERENCES categories(id) 
    tag TEXT
);

CREATE TABLE locations (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    located TEXT
);

CREATE TABLE resources (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    category_id INT NOT NULL REFERENCES categories(id),
    title TEXT NOT NULL,
    about TEXT NOT NULL,
    website TEXT,
    logo TEXT
);

CREATE TABLE resource_tags (
    tag_id INT NOT NULL REFERENCES tags(id),
    resource_id INT NOT NULL REFERENCES resources(id)
);

CREATE TABLE resource_locations (
    location_id INT NOT NULL REFERENCES locations(id),
    resource_id INT NOT NULL REFERENCES resources(id)
);