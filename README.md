# Eirbot's new website

## Development

With the draft page

```
hugo serve -D
```

Without

```
hugo serve
```

NB: the contact form won't work.

## Production with the contact mail server

Run the container

```sh
docker compose up -d
```

Then in the `frontend/public` directory, transfer the built file.

```sh
hugo
```

Or use sftp for a remote building.

Then, the website will be available on `localhost:${STORE_POINT}`, as defined
in the `.env`

## Not functional for now

- [x] contact form (call the api of the docker program)
- [ ] slides' captions for pretty listing
