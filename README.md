`docker build -t <image-name> .`

```bash
docker run --name <container-name> \
    -p 8000:3000 \
    <image-name>
```

#### Run with volume
```bash
docker run --name <container-name> \
    -p 8000:3000 \
    -v $(pwd):/usr/src/app \
    <image-name>
```


#### Keep your node_modules in-place with anonymous volume

```bash
docker run --name <container-name> \
    -p 8000:3000 \
    -v $(pwd):/usr/src/app \
    -v /usr/src/app/node_modules \
    <image-name>
```

