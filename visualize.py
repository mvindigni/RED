import pandas as pd
import matplotlib as plt

def main():
    df = pd.read_csv('data.csv')
    print(df)
    df['time'] = pd.to_datetime(df['time'])
    temp = df.plot(x='time', y='temp',  xlabel='Time', ylabel='Temperature', legend=None)
    sig = df.plot(x='time', y='sigstrength',  xlabel='Time', ylabel='Signal Strength', legend=None)
    battery = df.plot(x='time', y='batterylevel', xlabel='Time', ylabel='Battery Level', legend=None)
    temp.savefig('temp.png')
if __name__ == "__main__":
    main()

