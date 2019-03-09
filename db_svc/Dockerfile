FROM mysql:8

ENV MYSQL_ROOT_PASSWORD admin
ENV MYSQL_DATABASE storeo_db

CMD ["mysqld", "--default-authentication-plugin=mysql_native_password"]

ADD setup.sql /docker-entrypoint-initdb.d

EXPOSE 3306