import requests, json
import os, dotenv

dotenv.load_dotenv()

user_id = os.getenv("USER_ID")

def scrape_products():
    url = f"https://hackclub.com/_next/data/vZ7Y_cWVMO57JkDZ9zlBN/arcade/{user_id}/shop.json?userAirtableID={user_id}"

    response = requests.get(url)
    products = response.json()

    with open("products.json", "w") as file:
        json.dump(products, file)

    products = products["pageProps"]["availableItems"]
    product_dicts = []
    for product in products:
        product_dicts.append({
            "name": product["Full Name"],
            "price": product["Cost Hours"],
            "max": product["Max Order Quantity"],
            "id": product["Full Name"].replace(" ", "_").lower(),
            "src": product["Image URL"]
        })
    
    return product_dicts