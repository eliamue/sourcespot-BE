DROP TABLE IF EXISTS resources CASCADE;
DROP TABLE IF EXISTS tags CASCADE;
DROP TABLE IF EXISTS locations CASCADE;
DROP TABLE IF EXISTS resource_tags CASCADE;
DROP TABLE IF EXISTS resource_locations CASCADE;

CREATE TABLE resources (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL,
    category TEXT NOT NULL,
    about TEXT NOT NULL,
    website TEXT,
    logo TEXT
);

CREATE TABLE tags (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    tag TEXT
);

CREATE TABLE locations (
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    located TEXT
);

CREATE TABLE resource_tags (
    tagid BIGINT NOT NULL REFERENCES tags(id),
    resourceid BIGINT NOT NULL REFERENCES resources(id)
);

CREATE TABLE resource_locations (
    locationid BIGINT NOT NULL REFERENCES locations(id),
    resourceid BIGINT NOT NULL REFERENCES resources(id)
);