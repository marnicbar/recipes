FROM ubuntu:24.04

ARG HUGO_VERSION="0.139.3"
# Use Docker's $TARGETARCH to determine the system architecture
ARG TARGETARCH
ARG HUGO_URL="https://github.com/gohugoio/hugo/releases/download/v${HUGO_VERSION}/hugo_${HUGO_VERSION}_linux-${TARGETARCH}.deb"

# Disable the installation of suggested and recommended packages
RUN echo 'APT::Install-Suggests "0";' >> /etc/apt/apt.conf.d/00-docker
RUN echo 'APT::Install-Recommends "0";' >> /etc/apt/apt.conf.d/00-docker

# Avoid warnings by switching to noninteractive
ENV DEBIAN_FRONTEND=noninteractive

# Update system and install packages
RUN apt-get update \
    && apt-get install -y \
        git \
        wget \
        ca-certificates \
    && update-ca-certificates \
    && wget "$HUGO_URL" -O /tmp/hugo.deb \
    && apt-get install -y /tmp/hugo.deb \
    && rm -rf /tmp/hugo.deb \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Switch to non-root user
USER ubuntu
