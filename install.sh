#!/bin/sh
sh scripts/deploy_cordova.sh
sh scripts/cordova_setup.sh
cd sugar-cordova && cordova run
