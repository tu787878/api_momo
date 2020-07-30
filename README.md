# api_momo
#Bước 1: Tải code từ github về
  sudo git clone https://github.com/tu787878/api_momo.git
#Bước 2: Dùng pm2 để chạy node
  npm install -g pm2
#Bước 3: install thư viện cho nodejs và chạy
  cd /api_server
  npm install
  pm2 start index.js
  cd ..
#Bước 4: Tương tự với broker mqtt
  cd /broker_mqtt
  npm install
  pm2 start broker.js
  
