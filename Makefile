.PHONY: up setup-db

up:
	sudo docker compose up -d

stop:
	sudo docker stop tindog-backend-db-1

setup-db:
	docker exec -it tindog-backend-db-1 bash -c "psql -U root -c 'CREATE DATABASE tindog;'"

create-user-db:
	docker exec -i tindog-backend-db-1 psql -U root -c "CREATE TABLE IF NOT EXISTS users ( \
		id BIGSERIAL PRIMARY KEY, \
		name VARCHAR NOT NULL, \
		email VARCHAR NOT NULL, \
		password VARCHAR NOT NULL, \
		state VARCHAR, \
		city VARCHAR \
	);" tindog
