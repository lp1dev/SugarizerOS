#!/bin/sh
sh deploy_cordova.sh
sh cordova_setup.sh
cd sugar-cordova && cordova run
