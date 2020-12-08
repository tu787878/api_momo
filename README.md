# API Server QRCode Momo 
*Processing momo-payment backend through QR-Code - Use nodejs*  

## Cách cài đặt
- Step 1: Install nodejs  
  `sudo apt install nodejs`
- Step 2: download code from github  
  `sudo git clone https://github.com/tu787878/api_momo.git`  
  > Nếu chưa cài đặt git: `sudo apt install git`  
- Step 3: install pm2 to run node code  
  `npm install -g pm2`  
- Step 4: Install library for node  
  `cd /api_server`  
  `npm install`  
  `pm2 start index.js`  
  `cd ..`  
- Step 5: install server mqtt  
  `cd /broker_mqtt`  
  `npm install`  
  `pm2 start broker.js`  
  
## Support
Zalo: +49 160 319 3411  
FB: https://fb.com/tudczzz
