CREATE TABLE IF NOT EXISTS dogs (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  name VARCHAR NOT NULL,
  gender VARCHAR NOT NULL,
  breed VARCHAR NOT NULL,
  age INTEGER NOT NULL,
  description VARCHAR,
	picture VARCHAR
);

