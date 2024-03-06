CREATE TABLE IF NOT EXISTS posts (
	id BIGSERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
	dog_id INTEGER REFERENCES dogs(id),
	content VARCHAR,
	image VARCHAR,
	created_at VARCHAR NOT NULL,
	updated_at VARCHAR NOT NULL
);