
Run hugo server from a GitHub codespace
```
hugo server -D --appendPort=false --baseURL https://${CODESPACE_NAME}-1313.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}
```

Create a new recipe as [Hugo page bundle](https://gohugo.io/content-management/page-bundles/):
```
hugo new --kind recipes recipes/<name_of_recipe>
```
