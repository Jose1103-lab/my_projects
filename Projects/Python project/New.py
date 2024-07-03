#I will create a interface that will allow me interact with my expenses and make changes 
# to them. I will use "pandas" for data structures and store all the info in a sql data base.

#This will be the project where I will be using/applaying all knowledge I achieve 
# (6/19/2024)

import pandas as pd
#import numpy as np  \\ unused

print ("\nThis is my dataframe")

data = pd.DataFrame({    
    "Countries": ["Albania", "Japon", "RD"],
    "PIB": [14000, 1000, 500000],
    "Alive": ["No", "Yes", "No"]
    })

while True:        
    """for index in range(11):
        print(comma.columns)
        comm = pd.concat([comma, comma])
        #print(f"Done {index}%")
    """  
    print ()
    selection = [0, 0]  
    selection[0] = int(input("Enter row index: ")) 
    selection[1] = int(input("Enter column index: "))
    
    print()
    try:
        print (data.keys(0))
        print(data.iloc[selection[0], selection[1]])
        #print (data) #print the hole table
    except:
        print("\t**Error locating")
        pass
    print()
    ch = input ("Press any key to continue or (N) to exit... ")
    if ch.lower() == "n":
        break