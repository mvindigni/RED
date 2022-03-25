# RED

## Data Collection
- To execute the data collection script, you will have to activate the Python virtual environment
- First navigate to the `RED/` directory
- Then execute `sudo source red.venv/bin/activate` to activate the virtual environment
- After activating the virtual environment, run the data collection script with `python serialrecv.py`
- This script only works if there is an MSP 430 connected via GPIO to the Raspberry Pi.
- The pins used in the serial receive script are GPIO 27, GPIO 13, GPIO 19, and GPIO 26 per the pinout chart below, although these pins can be changed easily within the script itself as necessary
![Raspberry Pi Zero W Pinout Chart](https://www.theengineeringprojects.com/wp-content/uploads/2021/03/raspberry-pi-zero-5.png)

## Data Visualization
- To execute the data visualization script, you will have to activate the Python virtual environment
- First navigate to the `RED/` directory
- Then execute `sudo source red.venv/bin/activate` to activate the virtual environment  
- After activating the virtual environment, run the data visualization script with `python visualize.py`
- The visualization script will grab data from the data.csv file and transform it into a graph stored in `RED/node/graphs`

## Running the Web Server
- To start the web server, first navigate to the directory `RED/node/`
- Execute `sudo node scripts/server.js` to start the server
- The server is hosted on `192.168.4.1:8081` which is accessible via the Pi Zero W network and any web browser
