
## Reinstall Postgres

### OSX/Linux

```sh
brew uninstall postgresql
rm -rf /usr/local/var/postgres
rm -rf .psql_history .psqlrc .psql.local .pgpass .psqlrc.local
```

### Windows

1. Uninstall Program
1. Delete folder from `Program Files`
1. Remove `postgres` user