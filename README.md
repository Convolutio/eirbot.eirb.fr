# Eirbot's new website

## Development

Serve the website in dev mode with the draft pages

```sh
make dev
```

## Test the production 

Serve the website in production mode without the draft pages

```sh
make test-prod
```

## Build the website

Build in production mode the website in the `public` dir

```sh
make build
```

## Run the backend for the contact form

```sh
make install-contact-server
```

Fill in a `.env` file with your credentials as in the `.example.env`

```sh
make run-contact-server
```

## Not functional for now

- [x] contact form (call the api of the docker program)
- [] slides' captions for pretty listing
