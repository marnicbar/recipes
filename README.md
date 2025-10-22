
Run hugo server from a GitHub codespace
```
hugo server -D --appendPort=false --baseURL https://${CODESPACE_NAME}-1313.${GITHUB_CODESPACES_PORT_FORWARDING_DOMAIN}
```

Create a new recipe as [Hugo page bundle](https://gohugo.io/content-management/page-bundles/):
```
hugo new --kind recipes recipes/<name_of_recipe>
```

## Cover image tips
Use magick to convert HEIC images to JPEG.
```
magick mogrify -format jpg cover.heic
```

Use jpegoptim to reduce the size of the JPEG image (for examge to 300 kB).
```
jpegoptim --size=300k cover.jpg
```
