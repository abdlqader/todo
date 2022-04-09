npm run build
echo "Build Process Complete"
tar -zcvf dist.tar.gz dist
echo "File Created"
scp -i "free-1.pem" dist.tar.gz ubuntu@ec2-3-216-55-112.compute-1.amazonaws.com:/var/www/todo/web
echo "Upload Complete"
ssh -i "free-1.pem" ubuntu@ec2-3-216-55-112.compute-1.amazonaws.com << 'ENDBUILD'
sudo -s
cd  /var/www/todo/web
rm -rf dist
echo "Old File Removed"
tar xvzf dist.tar.gz
echo "Build Completed"
ENDBUILD