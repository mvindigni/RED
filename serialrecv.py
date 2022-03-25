import gpiozero as gpio

###INIT PINS###

#Chip enable
ce = gpio.DigitalInputDevice(27, False)
#Data pin
dp = gpio.DigitalInputDevice(13, False)
#Data done pin
ddp = gpio.DigitalInputDevice(19, False)
#Clock pin
clk = gpio.DigitalInputDevice(26, False)

###RECEIVE FUNCTION###
def recvData():
	buffer = []
	while not ddp.value:
		if clk.value:
			print("clock is " + str(clk.value))
			print(dp.value)
			buffer.append(1) if dp.value else buffer.append(0)
			while clk.value:
				continue
	return buffer

###MAIN LOOP###
def main():
	data = recvData()
	print(data)

if __name__ == "__main__":
	main()
