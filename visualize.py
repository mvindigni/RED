import pandas as pd
import matplotlib as plt

def main():
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
    for i in range(3):
        fig = plots[i].get_figure()
        fig.savefig("graphs/" + names[i] + ".png")

if __name__ == "__main__":
    main()

