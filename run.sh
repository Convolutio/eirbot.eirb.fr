[ ! -f .env ] || export $(grep -v '^#' .env | xargs) && \
docker run -e EMAIL_PROVIDER=$EMAIL_PROVIDER -e EMAIL_USER=$EMAIL_USER -e EMAIL_PASSWORD=$EMAIL_PASSWORD -e EMAIL_TO=$EMAIL_TO -e ORIGIN=$ORIGIN -e SMTP_PORT=$SMTP_PORT -p 3000:3000 oia123/formbee-email-only
