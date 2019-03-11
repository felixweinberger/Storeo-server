# Create image from latest mysql
FROM mysql:8

# Environment
ENV MYSQL_ROOT_PASSWORD=admin
ENV MYSQL_DATABASE=storeo_db

# Setup mysql on boot
CMD ["mysqld", "--default-authentication-plugin=mysql_native_password"]
ADD setup.sql /docker-entrypoint-initdb.d

# Expose
EXPOSE 3307