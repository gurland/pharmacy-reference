FROM nginx
RUN rm /etc/nginx/conf.d/default.conf

ARG BUILD_TYPE=prod

COPY ./block_configs/ /etc/block_configs
COPY ./block_configs_local/ /etc/block_configs_local
