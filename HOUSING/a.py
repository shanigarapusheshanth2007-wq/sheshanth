import pandas as pd
a=pd.read_csv("HOUSING/Housing (1).csv")
a.to_excel("housingexcel.xlsx")