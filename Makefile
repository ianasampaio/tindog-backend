.PHONY: up setup-db

up:
	sudo docker compose up -d

stop:
	sudo docker stop tindog-backend-db-1

setup-db:
	docker exec -it tindog-backend-db-1 bash -c "psql -U root -c 'CREATE DATABASE tindog;'"

uuid-db:
	docker exec -it tindog-backend-db-1 bash -c "psql -U root -c 'CREATE EXTENSION IF NOT EXISTS \"uuid-ossp\";'"
