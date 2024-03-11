CREATE TABLE IF NOT EXISTS posts (
	id BIGSERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
	city VARCHAR,
	state VARCHAR,
	dog_id INTEGER REFERENCES dogs(id),
	dog_name VARCHAR NOT NULL,
	dog_gender VARCHAR NOT NULL,
	dog_breed VARCHAR NOT NULL,
	dog_picture VARCHAR,
	content VARCHAR,
	image VARCHAR,
	created_at VARCHAR NOT NULL,
	updated_at VARCHAR NOT NULL
);