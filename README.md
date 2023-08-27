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

#### Build docker image from a specific Dockerfile


```bash
docker build -t <image-name> -f Dockerfile.dev .
```

#### Run container with automatical deletion

```bash
docker run --rm <container-name> <image-name> 
```

### Networks

#### Create a network for inter-container communication

```bash
docker network ls # Check the list of networks
docker network create <network-name>

docker run --network <network-name> \
    --name <container-name> -d --rm \
    <image-name>

```

### Volumes

#### MongoDB volume to store db data

Using named volume - there is no path to files on a local machine.
Just a name - data.

```bash
docker run --name mongodb --rm \
    --network todo-net \
    -v data:/data/db \
    mongo
```
---

## Control Plane

controlplane.com - service aggregates all the other CSPs.
