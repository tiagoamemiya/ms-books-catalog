up:
	docker-compose up -d

down:
	docker-compose down

test:
	docker-compose exec app npm run test