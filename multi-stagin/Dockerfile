FROM golang:1.21.4-bullseye AS builder
#EXPOSE 80
WORKDIR /app
COPY app.go .
RUN go mod init main && \
    CGO_ENABLED=0 go build
#CMD [ "./main" ]

FROM scratch
EXPOSE 80
COPY --from=builder /app/main /go/main
CMD ["/go/main"]
