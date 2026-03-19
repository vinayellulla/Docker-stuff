###########################################
# BASE IMAGE
###########################################

FROM ubuntu AS build

RUN apt-get update && apt-get install -y golang-go

ENV GO111MODULE=off

WORKDIR /app

COPY . .

RUN CGO_ENABLED=0 go build -o /app .



# Rebuilds the image with magic multi stage build 

FROM scratch

COPY --from=build /app /app

ENTRYPOINT ["/app"]


