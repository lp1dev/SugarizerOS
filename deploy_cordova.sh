cordova create sugar-cordova
cd sugar-cordova
rm config.xml
rm -fr www
##git clone https://github.com/llaske/sugarizer.git www
git clone git@github.com:lupin012345/sugarizer.git www
mv www/res .
cp www/config.xml .
