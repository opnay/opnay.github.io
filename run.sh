ip=$(ifconfig eth0 | awk '/inet addr/{print substr($2,6)}')
echo "IP Detect! : $ip"
jekyll serve --host $ip --port 8080
