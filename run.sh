ip=$(ifconfig | awk '/inet addr/{print substr($2,6)}')
jekyll serve --host $ip --port 8080