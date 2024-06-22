import json

with open("products.json", "r") as f: products = json.load(f)["pageProps"]["availableItems"]

for product in products:
    print(product["Name"] + ((" " + product["Small Name"]) if product["Small Name"] else ""), product["Cost Hours"], product["Max Order Quantity"])