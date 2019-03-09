# Create image from latest mysql
FROM mysql:8

# Setup mysql on boot
CMD ["mysqld", "--default-authentication-plugin=mysql_native_password"]
ADD setup.sql /docker-entrypoint-initdb.d

# Expose
EXPOSE 3306