include .env

up:
	sudo docker compose up -d

stop:
	sudo docker stop tindog-backend-db-1

createdb:
	docker exec -it tindog-backend-db-1 bash -c "psql -U root -c 'CREATE DATABASE tindog;'"

migrateup:
	$(MIGRATE_UP)

migratedown:
	$(MIGRATE_DOWN)