.PHONY: up setup-db

up:
	sudo docker compose up -d

stop:
	sudo docker stop tindog-backend-db-1

createdb:
	docker exec -it tindog-backend-db-1 bash -c "psql -U root -c 'CREATE DATABASE tindog;'"

migrateup:
	migrate -path src/database/migrations -database "postgresql://root:root@localhost:5432/tindog?sslmode=disable" -verbose up

migratedown:
	migrate -path src/database/migrations -database "postgresql://root:root@localhost:5432/tindog?sslmode=disable" -verbose down
