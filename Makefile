dev:
	hugo serve -D

test-prod:
	hugo serve --environment production

build:
	hugo

install-contact-server:
	docker pull oia123/formbee-email-only

run-contact-server:
	./run.sh
