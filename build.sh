#!/bin/sh
sh deploy_cordova.sh
sh cordova_setup.sh
cp -r static_files/* platforms/android/
