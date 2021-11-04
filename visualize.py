import pandas as pd
import matplotlib as plt
from datetime import datetime
import os

def main():
    # read datetime
    now = datetime.now()
    date = now.strftime("%D").replace("/", "-")
    
    # read csv data into pandas dataframe
    df = pd.read_csv('data.csv')
    df['time'] = pd.to_datetime(df['time'])

    # initialize plots
    temp = df.plot(x='time', y='temp',  xlabel='Time', ylabel='Temperature', legend=None)
    sig = df.plot(x='time', y='sigstrength',  xlabel='Time', ylabel='Signal Strength', legend=None)
    battery = df.plot(x='time', y='batterylevel', xlabel='Time', ylabel='Battery Level', legend=None)
    
    # initialize arrays for looping
    plots = [temp, sig, battery]
    names = ["temp", "sig", "battery"]

    # save each plot as a .png in our folder
    os.mkdir("graphs/" + date + "/")
    for i in range(3):
        fig = plots[i].get_figure()
        fig.savefig("graphs/" + date + "/" + names[i] + ".png")

if __name__ == "__main__":
    main()

