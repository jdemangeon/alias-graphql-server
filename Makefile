CONTAINER_NAME := alias-graphql-server
DOCKER := docker run -it --rm -v "${PWD}:/app" -p 8080:8080 $(CONTAINER_NAME)

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install Dependencies
	docker build -t $(CONTAINER_NAME) .
	$(DOCKER) npm install

start: ## Start Server
	$(DOCKER) npm start
